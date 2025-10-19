import { supabase } from "../supabase/client"
import type { Database } from "../supabase/supabase"

export type Products_types = Database['public']['Tables']['products']['Row']
export type Variants_types = Database['public']['Tables']['variants']['Row']
export type Products_Variants_types = (Products_types & { variants: Variants_types[] })

export const getProducts = async (): Promise<(Products_Variants_types)[]> => {
    const {data: products, error} = await supabase
            .from('products')
            .select('*, variants(*)')
            .order('created_at', {ascending: true })
    
    if(error) {
        console.error(error.message)
        throw new Error(error.message)
    }

    return products as ( Products_Variants_types )[]
}