import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import HeaderBeforeLogin from '../partials/HeaderBeforeLogin';
import { Formik } from 'formik';

const Login = () => {

    const navigate = useNavigate();


    const loginSubmit = async (formdata) => {
        const response = await fetch('http://localhost:5000/user/login',{
            method: 'post',
            body: JSON.stringify(formdata),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const userData = await response.json();
        if(response.status === 200){
            console.log('Login Successful');
            sessionStorage.setItem('currentUser',JSON.stringify(userData));
            Swal.fire({
                title:"Success",
                icon: "success",
                text:"Log In Successful",
                timer: 2000,
                confirmButtonText: 'OK',
                confirmButtonColor: 'green'
            })
            navigate('/todo');
        }else if(response.status=== 401){
            console.log('Login Failed');
            Swal.fire({
                title: "Login Failed...",
                icon: 'error',
                timer: 3000,
                text: 'Someone anonymous...',
                footer: `<a href='../userregister'>Want to register?</a>`
            })
        }
    }

    return (
        <>
            <HeaderBeforeLogin status='register' />
            <div className="container mt-5" style={{backgroundColor: '#d4ff0000'}} >
                <div className="card p-5" style={{backgroundColor: '#dcfbfb2b'}}>
                    <h2 className='text-center'>LoginIn Here...</h2>
                    <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>
                        {
                            ({ values, handleSubmit, handleChange }) => (<form onSubmit={handleSubmit}>
                                {/* Email input */}
                                <div className="outline mb-4">
                                    <label className="form-label" htmlFor="form1Example1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        onChange={handleChange}
                                        required
                                        value={values.email}
                                    />
                                </div>
                                {/* Password input */}
                                <div className="outline mb-4">
                                    <label className="form-label" htmlFor="form1Example2">
                                        Password
                                    </label>
                                    <input
                                        type="password" 
                                        id="password" 
                                        className="form-control" 
                                        onChange={handleChange}
                                        value={values.password}
                                        required
                                        />
                                </div>
                                {/* 2 column grid layout for inline styling */}
                                <div className="row mb-4">

                                    <div className="col">
                                        {/* Simple link */}
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>
                                {/* Submit button */}
                                <button type="submit" className="btn btn-primary btn-block fs-6">
                                    Sign in
                                </button>
                            </form>
                            )
                        }
                    </Formik>

                    
                </div>
            </div>

        </>
    )
}

export default Login