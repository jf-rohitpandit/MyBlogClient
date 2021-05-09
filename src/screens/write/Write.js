import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postBlog } from '../../actions/blogAction';
import Navbar from '../../componensts/navbar/Navbar';

const Write = (props) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		props.postBlog({ title, content });
		setTitle('');
		setContent('');
		toast.success('Posted successfully!');
	};

	return (
		<div>
			<Navbar />
			<br />
			<ToastContainer />
			<div className='container'>
				<h2 className='text-center'>Compose Blog</h2>
				<hr />

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
