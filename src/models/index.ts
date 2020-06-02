export interface UserType {
    username:string,
    first_name:string,
    last_name:string,
    email:string,
    is_staff:boolean,
    date_joined:string
}

export interface PostType {
    id:number,
    title:string,    
    content:string,
    author:string,
    time:string,
    last_edited:string
}

export interface ProblemType{
    id:string,
    task_code:string,
    title:string,
    author: string,
    difficulty: string,
    tags: string[],
    percent: number
}

export interface ResponseDataType<T extends {}> {
    count?: number,
    next?: string,
    previous?: string,
    message_code?: string,
    results: T
}