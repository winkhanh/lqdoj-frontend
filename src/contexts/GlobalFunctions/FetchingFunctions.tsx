import React from 'react';
import { ResponseDataType, PostType, ProblemType } from '../../models';
import * as HttpStatus from 'http-status-codes';
import axios, { AxiosInstance } from 'axios';


const BASE_URL = "http://127.0.0.1:8000"

const API_PATH = {
    posts: "announcements",
    problems: "tasks",
    tokens: "tokens",
    users: "users"
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
        callback: (posts: ResponseDataType<Array<PostType>>) => void,
        errorHandle: (error: Error) => void
    ) => {
        this.doFetch<ResponseDataType<Array<PostType>>>(this.publicFetcher,
            'get',
            API_PATH.posts,
            { p: page, limit: limit },
            callback,
            errorHandle);
    }

    fetchProblems = async (
        callback: (problems: ResponseDataType<Array<ProblemType>>) => void,
        errorHandle: (error: Error) => void
    ) => {
        this.doFetch<ResponseDataType<Array<ProblemType>>>(this.publicFetcher,
            'get',
            API_PATH.problems,
            {},
            callback,
            errorHandle);
    }
}

const FetchContext = React.createContext({
    fetcher: new Fetcher()
});
export default Fetcher;
export { FetchContext };