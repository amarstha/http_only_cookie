import { useState } from 'react';
import Layout from '../hocs/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { register } from '../actions/auth';

const LoginPage = () => {

	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});

	const { 
		username, 
		password
	} = formData;

	const onChange = e => setFormData({
		...formData, 
		[e.target.name]: e.target.value
	});

	const onSubmit = e => {
		e.preventDefault();


	};

	return(
		<Layout
			title='httpOnly Auth | Login'
			content='Login Page'
		>
			<h1 className='display-4'>Login Page</h1>
			<form className='bg-light p-5 mt-5 mb-5' onSubmit={onSubmit}>
				<h3>Login Into Your Account</h3>
				<div className='form-group'>
					<label className='form-label' htmlFor='username'>
						<strong>User Name*</strong>
					</label>
					<input 
						className='form-control'
						type='text'
						name='username'
						placeholder='Username*'
						onChange={onChange}
						value={username}
						required
					/>
				</div>
				<div className='form-group'>
					<label className='form-label' htmlFor='password'>
						<strong>Password*</strong>
					</label>
					<input 
						className='form-control'
						type='password'
						name='password'
						placeholder='Password*'
						onChange={onChange}
						value={password}
						minLength='8'
						required
					/>
				</div>
				<button className='btn btn-primary' type='submit'>
					Login
				</button>
			</form>
		</Layout>
	);

};
export default LoginPage;