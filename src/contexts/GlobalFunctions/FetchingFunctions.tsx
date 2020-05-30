import React from 'react';
import {PostsType, PostType} from '../../models';
import * as HttpStatus from 'http-status-codes';
import axios, { AxiosInstance } from 'axios';
const api="http://127.0.0.1:8000/"
const path={
    posts:"announcements"
}
const link="http://127.0.0.1:8000/announcements/?p=";
export const fetchPosts = async(page:number, callback?: (posts:PostsType)=> void, errorHandle?:Function) =>{
    try{
        const res = await axios.get(link+page);
        if (res.status === HttpStatus.OK){
            let posts : PostsType = res.data;
            if (callback) callback(posts);
            console.log("Done requested");
        }else throw new Error("Some thing happen");
    }catch(error){
        console.log(error);
        if (errorHandle) errorHandle(error);
    }finally{
        console.log("Finish trying to fetch");
    }
}
