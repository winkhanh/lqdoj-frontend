import React, { useState, useEffect, useContext } from 'react';
import { ResponseDataType, PostType } from '../../models';
import PostItem from '../PostItem/PostItem';
import Paginator from '../Paginator/Paginator';
import { FetchContext } from '../../contexts/GlobalFunctions/FetchingFunctions';

const initialPosts: ResponseDataType<Array<PostType>> = {
    count: 1,
    previous: "",
    next: "",
    results: []
};

const Posts: React.FC = () => {
    const [postsData, setPostsData] = useState(initialPosts);
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const { fetcher } = useContext(FetchContext);
    useEffect(() => {
        fetcher.fetchPosts(page, postsPerPage, (posts: ResponseDataType<Array<PostType>>) => {
            setPostsData(posts);            
            if (posts.results.length > postsPerPage) {
                setPostsPerPage(posts.results.length);
            }
            if (posts.count) {
                setTotalPages(Math.ceil(posts.count / postsPerPage));
            }
        }, (error: Error) => {
            console.log(error)
            setTotalPages(0);
            setPostsPerPage(1);
            setPostsData(initialPosts);
        });
    }, [fetcher, page, postsPerPage]);

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