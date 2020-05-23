export interface User {
    username:string,
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    is_staff:boolean,
    date_joined:string
}

export interface Post {
    title:string,
    author:string,
    content:string,
    time:string,
    last_edited:string
}