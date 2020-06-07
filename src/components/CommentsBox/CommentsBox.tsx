import React, {useContext, useState, useEffect	} from 'react';
import { FetchContext } from '../../Global/GlobalStates/GlobalStates';
import { fetchComments, LoadState,  } from '../../Global/GlobalFunctions/FetchingActions';
import { ResponseDataType, CommentType} from '../../models';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import LoadingPlacehlder from '../LoadingPlaceholder/LoadingPlaceholder';
import "./CommentsBox.scss";
interface PostCommentsProps{
	id:string
}
interface CommentProps{
	author:string,
	content:string	
}
const Comments : React.FC<CommentProps> = ({author, content})=>{
	return(
		<div>
			<h6>{author}</h6>
			<p>{content}</p>
		</div>
	)
}
const CommentsBox: React.FC<PostCommentsProps> = ({id}) => {
	const { apiFetcher } = useContext(FetchContext);
	const [comments, setComments]=useState(new Array<CommentType>());
	const [maxNumOfDisplay,setMax]=useState(5);
	const [commentContent, setComment]=useState("");
	const [loadState, setLoadState] = useState(LoadState.LOADING);
	useEffect(()=>{
		if (loadState === LoadState.LOADING){
			fetchComments(apiFetcher, id,
				(comments: ResponseDataType<Array<CommentType>>)=>{
					setComments(comments.results);
					setLoadState(LoadState.NOTLOADING);
				}, (error : Error)=>{
					console.log(error);
					setLoadState(LoadState.NOTLOADING);
				});
		}
	},[id, loadState, apiFetcher]);
	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
		setComment("");
	}
	const onClickHandler2 = (event: React.MouseEvent<HTMLButtonElement>) =>{
		setMax(prev=>prev+5);
	}
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setComment(event.target.value);
	}
	if (loadState === LoadState.LOADING)
		return (
			<LoadingPlacehlder/>
		);
	else
		return (
			<div>
				<InputGroup className="mb-3">
					<FormControl onChange={onChangeHandler} placeholder="Comment here" value={commentContent}/>
					<InputGroup.Append>
						<Button onClick={ onClickHandler } variant="outline-dark">Send</Button>
					</InputGroup.Append>
				</InputGroup>
				<div>
					<h5>Comments :</h5>
					<div className="comments-box">
						{comments.slice(0,Math.min(comments.length,maxNumOfDisplay))
						.map((comment:CommentType,idx)=>
						<Comments key={idx} author={comment.author} content={comment.content}/>)}
						{(maxNumOfDisplay<comments.length)?(<span onClick={onClickHandler2}> I WANT MORE .... </span>):null}
					</div>
				</div>
				
			</div>
		)
};
export default CommentsBox;