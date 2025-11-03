export interface Post{
    id: number,
    name: string,
    content: string,
}

export const posts: Post[] = [
    {id: 1, name: "first blog", content: "first content"},
    {id: 2, name: "second blog", content: "second content"}
]