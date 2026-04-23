'use server'
import { revalidatePath } from "next/cache"
import { addPosts } from "../../database/post"

export const handlePost = async (formData) => {
    const title = formData.get('title')
    const description = formData.get('description')
    console.log(title, description)

    await addPosts({ title, description })
    revalidatePath('/server-action')

}