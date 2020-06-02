import { ResponseDataType, PostType, ProblemType } from '../../models';
import APIFetcher from './APIFetcher';

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

export { fetchPosts, fetchSinglePost, fetchProblems };
export { LoadState };