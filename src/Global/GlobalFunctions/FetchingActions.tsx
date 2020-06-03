import { ResponseDataType, PostType, ProblemType, TokenType, UserType } from '../../models';
import APIFetcher from '../SpecialClasses/APIFetcher';

const API_PATH = {
    posts: "announcements/",
    problems: "tasks/",
    tokens: "tokens/",
    users: "users/"
}

enum LoadState {
    NOTLOADED = 0,
    LOADING,
    LOADED
}

const fetchPosts = async (
    fetcher: APIFetcher,
    page: number,
    limit: number,
    callback: (posts: ResponseDataType<Array<PostType>>) => void,
    errorHandle: (error: Error) => void
) => {
    fetcher.doFetch<ResponseDataType<Array<PostType>>>(
        'get',
        API_PATH.posts,
        { p: page, limit: limit },
        callback,
        errorHandle);
};

const fetchSinglePost = async (
    fetcher: APIFetcher,
    postID: string,
    callback: (posts: ResponseDataType<PostType>) => void,
    errorHandle: (error: Error) => void
) => {
    fetcher.doFetch<ResponseDataType<PostType>>(
        'get',
        API_PATH.posts + postID,
        {},
        callback,
        errorHandle);
};

const fetchProblems = async (
    fetcher: APIFetcher,
    callback: (problems: ResponseDataType<Array<ProblemType>>) => void,
    errorHandle: (error: Error) => void
) => {
    fetcher.doFetch<ResponseDataType<Array<ProblemType>>>(
        'get',
        API_PATH.problems,
        {},
        callback,
        errorHandle);
};

const doLogin = async (
    fetcher: APIFetcher,
    username: string,
    password: string,
    callback: (token: ResponseDataType<TokenType>)=> void,
    errorHandle: (error: Error) => void
) => {
    fetcher.doFetch(
        'post',
        API_PATH.tokens,
        {},
        callback,
        errorHandle,
        {username: username, password: password}
    );    
}

const fetchUser = async (
    fetcher: APIFetcher,
    username: string,
    callback: (me: ResponseDataType<UserType>) => void,
    errorHandle: (error: Error) => void
) => {
    fetcher.doFetch(
        'get',
        API_PATH.users + username,
        {},
        callback,
        errorHandle
    );
}
export { fetchPosts, fetchSinglePost, fetchProblems, fetchUser, doLogin };
export { LoadState };