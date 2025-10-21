import { supabase } from "../supabase/client"
import type { Database } from "../supabase/supabase"

export type Products_types = Database['public']['Tables']['products']['Row']
export type Variants_types = Database['public']['Tables']['variants']['Row']
export type Products_Variants_types = (Products_types & { variants: Variants_types[] })


export const getProducts = async ({ filters = [] }: { filters?: string[] }): Promise<(Products_Variants_types)[]> => {
    let query = supabase
        .from("products")
        .select("*, variants(*)")
        .order("created_at", { ascending: true })

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