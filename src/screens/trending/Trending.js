import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../../componensts/navbar/Navbar';
import classes from './Trending.module.css';
import { getTrendingBlogs } from '../../actions/blogAction';

const Trending = (props) => {
	const history = useHistory();

	const [mounted, setMounted] = useState(false);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		if (mounted === false) {
			props.getTrendingBlogs();
		}
		setMounted(true);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		setPosts(props.posts);
	}, [props.posts]);

	const openBlog = (id) => {
		history.push(`/post/${id}`);
		return null;
	};

	return (
		<div>
			<Navbar />
			<br />
			<div className='container'>
				<h2 className='text-center'>All Blogs</h2>
				<hr />

				{posts &&
					posts.map((post) => (
						<div
							className={classes.content}
							key={post._id}
							onClick={() => openBlog(post._id)}>
							<h4>{post.title}</h4>
						</div>
					))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	posts: state.blog.posts,
});

const mapDispatchToProps = (dispatch) => ({
	getTrendingBlogs: () => dispatch(getTrendingBlogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
