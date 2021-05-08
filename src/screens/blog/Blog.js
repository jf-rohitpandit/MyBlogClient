import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../../componensts/navbar/Navbar';
import classes from './Blog.module.css';
import { getBlog } from '../../actions/blogAction';

const Blog = (props) => {
	const [post, setPost] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		if (post === null) {
			console.log(id);
			props.getBlog(id);
		}
	}, []);

	useEffect(() => {
		setPost(props.post);
	}, [props.post]);

	return (
		<div>
			<Navbar />
			<br />
			<div className='container'>
				<div className={classes.content}>
					<h2>{post && post.title}</h2>
					<p>{post && post.content}</p>
				</div>
				<div className={classes.info}>
					<div className={classes.like}>
						<i class='far fa-heart fa-2x'></i>
						<i class='fas fa-heart fa-2x'></i>
					</div>
					<div className={classes.comment}>
						<i class='far fa-comment fa-2x'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
	post: state.blog.post,
});

const mapDispatchToProps = (dispatch) => ({
	getBlog: (postId) => dispatch(getBlog(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
