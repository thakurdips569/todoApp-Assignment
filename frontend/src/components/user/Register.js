import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import HeaderBeforeLogin from '../partials/HeaderBeforeLogin'

const Register = () => {

    const navigate = useNavigate();

    const registerSubmit = async (formdata  ) => {


        const response  = await fetch('http://localhost:5000/user/register', {
            method:'post',
            body: JSON.stringify(formdata),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(response.status);
        if(response.status===200){
            Swal.fire({
                title:'Registered Successfully',
                icon: 'success',
                timer: 2000
            })
            navigate('/login');
        }else{
            Swal.fire({
                title:'Some error Occurred',
                icon:'error',
                timer:2000
            })
        }        
    }
    const logIn = () => {
        navigate('/login');
    }
    return (
        <>
            <HeaderBeforeLogin status='login' />
            <div className="container mt-5" style={{backgroundColor: '#d4ff0000'}}>
                <div className="card p-5" style={{backgroundColor: '#dcfbfb2b'}}>
                    <h2 className='text-center'>Register Here...</h2>

                    <Formik initialValues={{ fullname: '', username: '', email: '', password: '' }} onSubmit={registerSubmit}>
                        {
                            ({ values, handleSubmit, handleChange }) => (<form onSubmit={handleSubmit}>
                                {/* Fullname */}
                                <div className="outline mb-4">
                                    <label className="form-label" htmlFor="fullname">
                                        Full Name
                                    </label>
                                    <input
                                        type="text" id="fullname"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={values.fullname}
                                        required
                                    />
                                </div>
                                {/* Email input */}
                                {/* Username */}
                                <div className="outline mb-4">
                                    <label className="form-label" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={values.username}
                                        required
                                    />
                                </div>
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
                                        value={values.email}
                                        required
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

                                {/* Submit button */}
                                <button type="submit" className="btn btn-primary btn-block fs-6">
                                    Sign up
                                </button>
                            </form>)
                        }
                    </Formik>



                </div>
            </div>
        </>

    )
}

export default Register