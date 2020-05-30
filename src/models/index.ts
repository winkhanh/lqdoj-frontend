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
    id:number,
    title:string,    
    content:string,
    author:string,
    time:string,
    last_edited:string
}

export interface PostsType {
    count: number,
    next: string,
    previous: string,
    results: Array<PostType>
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

export interface ProblemsType {
    count: number,
    next: string,
    previous: string,
    results: Array<ProblemType>
}