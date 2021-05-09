import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../componensts/navbar/Navbar';
import classes from './Blog.module.css';
import { getBlog } from '../../actions/blogAction';
import { getLikes, postLike } from '../../actions/likeAction';
import { getComments, postComment } from '../../actions/commentAction';

const Blog = (props) => {
	const [post, setPost] = useState(null);
	const [liked, setLiked] = useState(false);
	const [text, setText] = useState('');
	const [commentActive, setCommentActive] = useState(false);
	const [commentList, setCommentList] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		if (post === null) {
			console.log(id);
			props.getBlog(id);
			props.getLikes(id);
			if (props.token) {
				props.getComments(id);
			}
		}
	}, []);

	useEffect(() => {
		setPost(props.post);
	}, [props.post]);

	useEffect(() => {
		setLiked(props.liked);
	}, [props.liked]);

	useEffect(() => {
		setCommentList(props.commentList);
		console.log(props);
	}, [props.commentList]);

	const onLike = () => {
		if (props.token) {
			props.postLike(id);
		}
	};

	const onShowComments = () => {
		if (props.token) {
			setCommentActive((state) => !state);
		}
	};

	const onPostComment = (e) => {
		e.preventDefault();

		props.postComment(id, text);
		setText('');
	};

	return (
		<div>
			<Navbar />
			<br />
			<div className='container'>
				<div className={classes.content}>
					<h2 className='text-center'>{post && post.title}</h2>
					<p>{post && post.content}</p>
				</div>
				<div className={classes.info}>
					<div className={classes.like} onClick={onLike}>
						{liked === true ? (
							<i className='fas fa-heart fa-2x'></i>
						) : (
							<i className='far fa-heart fa-2x'></i>
						)}
					</div>
					<div className={classes.comment} onClick={onShowComments}>
						{commentActive ? (
							<i className='fas fa-comment fa-2x'></i>
						) : (
							<i className='far fa-comment fa-2x'></i>
						)}
					</div>
				</div>
				<div
					className={commentActive ? classes.show : classes.hide}
					id='comments'>
					<div className={classes.send}>
						<form onSubmit={onPostComment} className='d-flex my-2'>
							<input
								className='form-control'
								type='text'
								value={text}
								onChange={(e) => setText(e.target.value)}
							/>
							<button type='submit' className='btn btn-primary'>
								Comment
							</button>
						</form>
					</div>
					<div className={classes.commentList}>
						{commentList &&
							commentList.map((comment) => (
								<div className={classes.singleComment} key={comment._id}>
									<div className={classes.commentName}>{comment.user}</div>
									<p>{comment.text}</p>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
	post: state.blog.post,
	liked: state.like.liked,
	likeCount: state.like.likeCount,
	commentList: state.comment.commentList,
});

const mapDispatchToProps = (dispatch) => ({
	getBlog: (postId) => dispatch(getBlog(postId)),
	getLikes: (postId) => dispatch(getLikes(postId)),
	postLike: (postId) => dispatch(postLike(postId)),
	getComments: (postId) => dispatch(getComments(postId)),
	postComment: (postId, text) => dispatch(postComment(postId, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
