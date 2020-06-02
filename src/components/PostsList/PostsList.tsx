import React, { useContext, useEffect, useState } from 'react';
import { fetchPosts, LoadState } from '../../contexts/GlobalFunctions/FetchingActions';
import { PostType, ResponseDataType } from '../../models';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
import Paginator from '../Paginator/Paginator';
import PostItem from '../PostItem/PostItem';
import { FetchContext } from '../../contexts/GlobalStates/GlobalStates';
const initialPosts: ResponseDataType<Array<PostType>> = {
    count: 0,
    previous: "",
    next: "",
    results: []
};

const Posts: React.FC = () => {
    const postsPerPage: number = 5;
    const [postsData, setPostsData] = useState(initialPosts);
    const [page, setPage] = useState(1);
    const [loadState, setLoadState] = useState(LoadState.NOTLOADED);
    const { apiFetcher } = useContext(FetchContext);

    useEffect(() => {
        setLoadState(LoadState.NOTLOADED);
    }, [page]); // Request for a fetch
    useEffect(() => {
        let tid: ReturnType<typeof setTimeout>;
        if (loadState === LoadState.NOTLOADED) {
            setLoadState(LoadState.LOADING);
            fetchPosts(apiFetcher, page, 5, (posts: ResponseDataType<Array<PostType>>) => {
                setPostsData(posts);
                setLoadState(LoadState.LOADED);
            }, (error: Error) => {
                console.log(error);
                setPostsData(initialPosts);
                setLoadState(LoadState.LOADED);
                //tid = setTimeout(()=>setLoadState(LoadState.NOTLOADED)); //Uncomment if want to have infinite fetching
            });
        };
        return () => {
            clearTimeout(tid);
        }
    }, [apiFetcher, loadState, page]);//Fetch data
    // Stateless procedure
    let totalPages: number = (postsData.count) ? (Math.ceil(postsData.count / postsPerPage)) : 0;
    if (loadState === LoadState.LOADING)
        return (<LoadingPlaceholder />)
    else
        return (
            <div>
                {postsData.results.map((post, idx) => {
                    return (
                        <PostItem post={post} key={idx} />
                    )
                })}
                <Paginator id="posts" page={page} setPage={(page: number) => { setPage(page); window.scrollTo(0, 0); }} totalPages={totalPages}></Paginator>
            </div>
        )
};

export default Posts;