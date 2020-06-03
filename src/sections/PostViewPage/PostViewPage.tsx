import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostContent from '../../components/PostContent/PostContent';
import PostComments from '../../components/PostComments/PostComments';

<<<<<<< HEAD
const initialPost: PostType = {
    id: 0,
    title: "",
    content: "",
    author: "",
    time: "",
    last_edited: ""
}

const PostViewPage: React.FC = () => {
    const { id } = useParams();
    const { apiFetcher } = useContext(FetchContext);
    const [post, setPost] = useState(initialPost);
    const [loadState, setLoadState] = useState(LoadState.LOADING);

    useEffect(() => {
        if (loadState === LoadState.LOADING) {
            
            fetchSinglePost(apiFetcher, id, (post: ResponseDataType<PostType>) => {
                setPost(post.results);
                setLoadState(LoadState.NOTLOADING);
            }, (error: Error) => {
                console.log(error);
                setPost(initialPost);
                setLoadState(LoadState.NOTLOADING);
                //tid = setTimeout(()=>setLoadState(LoadState.NOTLOADED)); //Uncomment if want to have infinite fetching
            });
        }
    }, [id, loadState, apiFetcher]);

    if (loadState === LoadState.LOADING) {
        return (<LoadingPlaceholder />);
    } else {
        console.log(post);
        return (
            <Container fluid="xl" className="mt-3">
                <Row>
                    <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 1 }}>
                        <h1>{post.title}</h1>
                        <HtmlContent content={post.content} />
                    </Col>
                    <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }}> {/** Move under the post when on mobile */}
                    Comments here
=======
const PostViewPage: React.FC = () => {    
    return (
        <Container fluid="xl" className="mt-3">
            <Row>
                <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 1 }}>
                    <PostContent />
                </Col>
                <Col md={{ span: 4, order: 2 }} xs={{ span: 12, order: 2 }}> {/** Move under the post when on mobile */}
                    <PostComments />
>>>>>>> ca1f4b0c3d812c6d4f216f45207c9d55143fcaad
                </Col>
            </Row>
        </Container>
    )
};
export default PostViewPage;
