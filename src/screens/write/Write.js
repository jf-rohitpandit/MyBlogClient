import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postBlog } from '../../actions/blogAction';
import Navbar from '../../componensts/navbar/Navbar';

const Write = (props) => {
	const history = useHistory();
	const [mounted, setMounted] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted === false && props.token === null) {
		history.push('/login');
		return null;
	}

	const onSubmit = (e) => {
		e.preventDefault();

		props.postBlog({ title, content });
	};

	return (
		<div>
			<Navbar />
			<div className='container'>
				<form className='m-3' onSubmit={onSubmit}>
					<div className='mb-3'>
						<label className='form-label'>Title</label>
						<input
							type='text'
							className='form-control'
							placeholder='Title'
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className='mb-3 '>
						<label className='form-label '>Blog Content:</label>
						<textarea
							className='form-control'
							placeholder='something....'
							required
							value={content}
							onChange={(e) => setContent(e.target.value)}
							rows='15'></textarea>
					</div>
					<button type='submit' className='btn btn-primary btn-block'>
						Post
					</button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
	postBlog: (blogData) => dispatch(postBlog(blogData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Write);
