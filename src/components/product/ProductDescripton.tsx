import { EditorContent, type JSONContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import type { Json } from "../../supabase/supabase"

interface Props {
    content: JSONContent | Json
}

export const ProductDescripton = ({ content }: Props) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content as JSONContent,
        editable: false,
        editorProps: {
            attributes: {
                class: 'prose prose-stone prose-invert prose-sm sm:prose-base max-w-none text-stone-100 leading-relaxed tracking-wide selection:bg-stone-700/40'
            }
        }
    })
    return (
        <div className="w-full">
            <EditorContent editor={editor} style={{ "width": "100%" }}/>
        </div>
    )
}

