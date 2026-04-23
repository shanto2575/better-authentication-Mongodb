
export const posts=[
    {
        id:1,
        title:'GitHub',
        description:'portfolio is best'
    },
    {
        id:2,
        title:'Gemini',
        description:'gemini is better than chatgpt'
    },
    {
        id:3,
        title:'ChatGPT',
        description:'chatgpt is the best'
    },
]

export const addPosts=async(newpost)=>{
    posts.push(newpost)
}

export const getPosts=async()=>{
    return posts
}