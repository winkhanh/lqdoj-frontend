import React, { useState, useEffect, useContext } from 'react';
import { ResponseDataType, PostType } from '../../models';
import PostItem from '../PostItem/PostItem';
import Paginator from '../Paginator/Paginator';
import { FetchContext, LoadState } from '../../contexts/GlobalFunctions/FetchingFunctions';
import LoadingPlaceholder from '../LoadingPlaceholder/LoadingPlaceholder';
const initialPosts: ResponseDataType<Array<PostType>> = {
    count: 0,
    previous: "",
    next: "",
    results: []
};

const Posts: React.FC = () => {
    const postsPerPage : number = 5;
    const [postsData, setPostsData] = useState(initialPosts);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loadState, setLoadState]= useState(LoadState.NOTLOADED);
    const { fetcher } = useContext(FetchContext);
    useEffect(()=>{
        setLoadState(LoadState.NOTLOADED);
    }, [page]);//Request for a fetch
    useEffect(() => {
        let tid: ReturnType < typeof setTimeout > ;
        if (loadState === LoadState.NOTLOADED){
            setLoadState(LoadState.LOADING);
            fetcher.fetchPosts(page, (posts: ResponseDataType<Array<PostType>>) => {
                setPostsData(posts);            
                if (posts.count) {
                    setTotalPages(Math.ceil(posts.count / postsPerPage));
                    console.log(totalPages);
                }
                setLoadState(LoadState.LOADED);
            }, (error: Error) => {
                console.log(error);
                setTotalPages(0);
                setPostsData(initialPosts);
                setLoadState(LoadState.LOADED);
                //tid = setTimeout(()=>setLoadState(LoadState.NOTLOADED)); //Uncomment if want to have infinite fetching
            }); 
        };
        return ()=>{
            clearTimeout(tid);
        }
    }, [fetcher, loadState, page]);//Fetch data
    if (loadState === LoadState.LOADING) 
        return (<LoadingPlaceholder/>)
    else
        return (
            <div>
                {postsData.results.map((post, idx) => {
                    return (
                        <PostItem post={post} key={idx} />
                    )
                })}
                <Paginator id="posts" page={page} setPage={setPage} totalPages={totalPages}></Paginator>
            </div>
        )
};

export default Posts;