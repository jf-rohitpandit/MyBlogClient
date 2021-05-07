import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../componensts/navbar/Navbar';
import classes from './Home.module.css';
import { getHomeBlogs } from '../../actions/blogAction';

const Home = (props) => {
	const [mounted, setMounted] = useState(false);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		if (mounted === false) {
			props.getHomeBlogs();
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
	getHomeBlogs: () => dispatch(getHomeBlogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
