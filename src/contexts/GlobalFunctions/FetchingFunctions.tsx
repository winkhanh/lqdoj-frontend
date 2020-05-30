import React from 'react';
import { PostsType, ProblemsType } from '../../models';
import * as HttpStatus from 'http-status-codes';
import axios, { AxiosInstance } from 'axios';


const BASE_URL = "http://127.0.0.1:8000"

const API_PATH = {
    posts: "announcements",
    problems: "tasks"
}

class Fetcher {
    // Fetcher for public request without authentication
    private publicFetcher: AxiosInstance;
    // Fetcher for special request that requires authentication
    private authorizedFetcher: AxiosInstance;

    /*
        Fetcher's constructor, takes a token (optional) as a parameter
            - Initialize a publicFetcher with the base url
            - Initialize an authorizedFetcher with the base url and given token
    */
    constructor(token?: string) {
        this.publicFetcher = axios.create({
            baseURL: BASE_URL
        });
        if (token) {
            this.authorizedFetcher = axios.create({
                baseURL: BASE_URL,
                headers: { 'Authorization': 'Token ' + token }
            });
        } else {
            this.authorizedFetcher = axios.create({
                baseURL: BASE_URL,
                headers: { 'Authorization': "" }
            });
        }
    }
    private doFetch = async<T extends {}>(
        instance: AxiosInstance,
        method: string,
        target: string,
        params: object,
        callback: (responseData: T) => void,
        errorHandle: (error: Error) => void,
        data?: object
    ) => {
        try {
            let result;
            const config: object = {
                url: target,
                method: method,
                params: params
            }
            if (data && (method === 'put' || method === 'post' || method === 'patch')) {
                result = await instance.request({
                    ...config,
                    data: data
                });
            } else {
                result = await instance.request(config);
            }
            let responseData: T = result.data;
            if (result.status === HttpStatus.OK) {
                callback(responseData);
                console.log(`Successful ${method} to ${target}`)
            } else {
                throw new Error("OOPS");
            }
        } catch (error) {
            errorHandle(error);
            console.log(`We got some error here`);
            console.log(error);
        } finally {
            console.log(`Finish attemp ${method}`);
        }
    }

    fetchPosts = async (
        page: number,
        limit: number,
        callback: (posts: PostsType) => void,
        errorHandle: (error: Error) => void
    ) => {
        this.doFetch<PostsType>(this.publicFetcher,
            'get',
            API_PATH.posts,
            { p: page, limit: limit },
            callback,
            errorHandle);
    }

    fetchProblems = async (
        page: number,
        limit: number,
        callback: (problems: ProblemsType) => void,
        errorHandle: (error: Error) => void
    ) => {
        this.doFetch<ProblemsType>(this.publicFetcher,
            'get',
            API_PATH.problems,
            { p: page, limit: limit },
            callback,
            errorHandle);
    }
}

const FetchContext = React.createContext({
    fetcher: new Fetcher()
});
export default Fetcher;
export { FetchContext };