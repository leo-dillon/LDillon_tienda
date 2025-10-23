import { supabase } from "../supabase/client"
import type { Database } from "../supabase/supabase"
import { mostrar } from "../utils/mostrar"

export type Products_types = Database['public']['Tables']['products']['Row']
export type Variants_types = Database['public']['Tables']['variants']['Row']
export type Products_Variants_types = (Products_types & { variants: Variants_types[] })

interface Props {
    filters?: string[],
    page?: number,
    slug: string
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

    return products as ( Products_Variants_types[] )
}

export const countProduct = async ({ filters = [] }: Props) => {
    let query = supabase
        .from("products")
        .select("*", { count: "exact", head: true })

    if (filters.length > 0) {
        query = query.in("brand", filters)
    }

    const { count } = await query
    if( count == null ) return 1 
    return count
}

export const getLastProducts = async () => {
    const query = supabase
        .from("products")
        .select("*, variants(*)")
        .order('created_at', {ascending: true})
        .limit(4)
    
    const { data: products, error } = await query

    if( error ){
        mostrar("lastProducts --- ", error)
        throw new Error(error.message)
    }

    return products as ( Products_Variants_types[] )
} 

export const getRandomProducts = async () => {
    const query = (supabase as any)
        .rpc("random_products" , { limit_count: 4 })
        .select('*, variants(*)')

    const { data: products, error } = await query

    if( error ){
        mostrar("getRandomProduct --- ", error)
        throw new Error(error.message)
    }

    return products as ( Products_Variants_types[] )
} 

export const getProduct = async ({ slug }: Props) => {
    const query = supabase
        .from('products')
        .select('* variants(*)')
        .eq('slug', slug)

        const { data, error } = await query

        console.log(data)


}