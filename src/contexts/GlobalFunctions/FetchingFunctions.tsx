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
class Fetcher{
    private publicFetcher: AxiosInstance;
    private authorizedFetcher: AxiosInstance;
    constructor(token?:string){
        this.publicFetcher=axios.create({
            baseURL: api,
        });
        if (token)
            this.authorizedFetcher=axios.create({
                baseURL: api,
                headers: {'Authorized-Token':token} //Fixed header name plz
            });
        else
            this.authorizedFetcher=axios.create({
                baseURL: api,
                headers: {'Authorized-Token':""} //Fixed header name plz
            });
    }    
    private doFetch = async<T extends {} >(instance:AxiosInstance,
                        method:string,
                        path:string,
                        params:object,
                        callback: ( responseData : T)=> void,
                        errorHandle:(error:Error)=>void,
                        data?:object
                        )  =>{
        try{
            let result;
            const config:object={
                url:path,
                method:method,
                params:params
            }
            if (data && (method==='put' || method === 'post' || method==='patch'))
                result = await instance.request({
                    ...config,
                    data:data
                });
            else
                result = await instance.request(config);
            let responseData : T =result.data;
            if (result.status === HttpStatus.OK){
                callback(responseData);
                console.log(`Successful ${method} to ${path}`)
            }else{
                throw new Error("OOPS");
            }
        }catch(error){
            errorHandle(error);
            console.log(`We got some error here`);
            console.log(error);
        }finally{
            console.log(`Finish attemp ${method}`);
        }
    }
    fetchPosts = async(page:number, callback: (posts:PostsType)=> void, errorHandle:(error:Error)=>void) =>{
       this.doFetch<PostsType>(this.publicFetcher,'get',path.posts,{p:page},callback,errorHandle);
    }
}

const FetchContext = React.createContext({
    fetcher: new Fetcher()
});
export default Fetcher;
export {FetchContext};