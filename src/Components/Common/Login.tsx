import Image from 'next/image';
import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Login = ({ onClose }: any) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        showPassword: false,
        rememberMe: false,
    });

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleShowPassword = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add your login or sign-up logic here
        console.log('Form Data:', formData);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-[480px] w-full bg-white rounded-lg shadow-md px-10 py-5 relative mx-5">
                <div className='text-xl rounded-full border border-black p-2 max-w-[39px] top-3 absolute right-4 sm:right-7 cursor-pointer'
                    onClick={onClose}
                ><RxCross1 />
                </div>
                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src="/newlogo.svg"
                        alt="Logo"
                        className="w-22 h-22 max-w-[]"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="mt-6">
                    <div className="flex justify-between mb-4 relative border-b-2 pb-0.5 max-w-[400px]">
                        <button
                            onClick={handleToggle}
                            className={`px-4 py-2 font-semibold focus:outline-none  ${isLogin ? 'text-primary border-t-primary border-t-2 ' : 'text-gray-500 border-t-transparent border-t-2 '
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={handleToggle}
                            className={`px-4 py-2 font-semibold focus:outline-none border-t-2  ${isLogin ? 'text-gray-500 border-t-transparent border-t-2 ' : ' text-primary border-t-primary border-t-2 '
                                }`}
                        >
                            Sign Up
                        </button>
                        <div
                            className={`sm:block hidden absolute top-[41px] transition-all duration-500 ${isLogin ? ' w-20' : ' translate-x-[200px] sm:translate-x-[310px] w-[88px]'
                                }`}
                        >
                            <div className={` bg-primary h-1 rounded-md `}></div>
                        </div>
                    </div>
                    <h1 className='text-center text-sm font-semibold'> {isLogin ? ' Log In With Social' : 'Sign Up With Social'}</h1>
                    <div className="mt-4 flex sm:flex-nowrap gap-4 flex-wrap justify-center sm:justify-between pb-5">
                        <button className="bg-blue-600 text-white w-full px-3 py-2.5 text-xs rounded-md flex justify-center items-center  sm:mb-0">
                            <FaFacebook className="mr-2" />
                            {isLogin ? ' Continue with Facebook' : 'Continue with Facebook'}
                        </button>
                        <button className="bg-red-500 text-white w-full px-3 py-2.5 text-xs rounded-md flex justify-center items-center">
                            <FaGoogle className="mr-2" />

                            {isLogin ? ' Continue with Google' : 'Continue with Google'}

                        </button>
                    </div>
                    <h1 className='text-center text-sm font-semibold'>OR</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={formData.showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <span
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={handleShowPassword}
                                >
                                    {formData.showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4 flex justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Remember Me</span>
                            </label>
                            <span className=' font-semibold text-sm cursor-pointer hover:border-b-black border-b-2 border-b-transparent transition-all duration-300'>Forget Password?</span>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
