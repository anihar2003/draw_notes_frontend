import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:3000/api/login', values);
        const { accessToken, refreshToken } = response.data;

        // Save tokens to localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Redirect to the home or dashboard after successful login
        navigate('/dashboard'); // Change '/dashboard' to your desired route
      } catch (error) {
        setErrorMessage('Invalid email or password');
        console.error('Error during login', error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link to="/" className="absolute top-7 left-5 text-blue-600 hover:text-blue-800 flex items-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 111.414 1.414L4.414 9H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z" clipRule="evenodd" />
        </svg>
      </Link>
      <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        {errorMessage && (
          <p className="text-center text-red-500 font-medium">{errorMessage}</p>
        )}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-medium"
          >
            Login
          </button>
          <div className="text-center text-sm mt-4">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-blue-600 hover:text-blue-800">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
