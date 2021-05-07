import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../componensts/navbar/Navbar';
import classes from './Trending.module.css';
import { getTrendingBlogs } from '../../actions/blogAction';

const Trending = (props) => {
	const [mounted, setMounted] = useState(false);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		if (mounted === false) {
			props.getTrendingBlogs();
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		setPosts(props.posts);
	}, [props.posts]);

	return (
		<div>
			<Navbar />
			<br />
			<div className='container'>
				<h2 className='text-center'>All Blogs</h2>
				<hr />

				{posts &&
					posts.map((post) => (
						<div className={classes.content} key={post.id}>
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
