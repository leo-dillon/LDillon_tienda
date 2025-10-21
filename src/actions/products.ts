import { supabase } from "../supabase/client"
import type { Database } from "../supabase/supabase"

export type Products_types = Database['public']['Tables']['products']['Row']
export type Variants_types = Database['public']['Tables']['variants']['Row']
export type Products_Variants_types = (Products_types & { variants: Variants_types[] })

interface Props {
    filters?: string[],
    page?: number,

}

export const getProducts = async ({ filters = [], page = 1 }: Props): Promise<(Products_Variants_types)[]> => {

    const size = 8
    const start = ( page - 1 ) * size
    const end   = start + size - 1  

    let query = supabase
        .from("products")
        .select("*, variants(*)")
        .order("created_at", { ascending: true })
        .range( start, end )

    if (filters.length > 0) {
        query = query.in("brand", filters)
    }

    const { data: products, error } = await query
    
    if(error) {
        console.error(error.message)
        throw new Error(error.message)
    }

    return products as ( Products_Variants_types )[]
}

export const countProduct = async () => {
    const query = supabase
        .from("products")
        .select("*", { count: "exact", head: true })

    const { count } = await query
    if( count == null ) return 1 
    return Math.ceil( count / 8 )
}