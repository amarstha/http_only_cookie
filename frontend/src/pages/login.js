import { useState,useEffect } from 'react';
import Layout from '../hocs/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, reset_register_success } from '../actions/auth';
import Loader from 'react-loader-spinner';

const LoginPage = () => {

	const dispatch = useDispatch();
	const router = useRouter();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	const loading = useSelector(state => state.auth.loading);

	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});

	const { 
		username, 
		password
	} = formData;

	useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

	const onChange = e => setFormData({
		...formData, 
		[e.target.name]: e.target.value
	});

	const onSubmit = e => {
		e.preventDefault();

		if (dispatch && dispatch !== null && dispatch !== undefined)
			dispatch(login(username, password));

	};

	if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard');

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
				{
                    loading ? (
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Loader
                                type='Oval'
                                color='#00bfff'
                                width={50}
                                height={50}
                            />
                        </div>
                    ) : (
                        <button className='btn btn-primary mt-5' type='submit'>
                            Login
                        </button>
                    )
                }
			</form>
		</Layout>
	);

};
export default LoginPage;