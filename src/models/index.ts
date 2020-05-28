export interface UserType {
    username:string,
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    is_staff:boolean,
    date_joined:string
}

export interface PostType {
    title:string,
    author:string,
    content:string,
    time:string,
    last_edited:string
}

export interface ProblemType{
    id:string,
    title:string,
    author: string,
    difficulty: string,
    tags: string[],
    percent: number
}