import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { AppName } from '../settings';
import Title from '../components/Title';
import { getFirebaseErrorMessage } from '../firebase/firebaseErrorMessages';

const LoginPage = () => {
    const { signInWithPassword, googleSignin } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    // console.log(params.get("next"))
    const next = decodeURIComponent(params.get("next") || '') || "/";

    const [isSubmitting, setSubmitting] = useState(false);


    const googleLogin = () => {
        googleSignin()
            .then(() => {
                setSubmitting(false)
                toast("Logged In using Google...")
                navigate(next)
            })
            .catch((err) => {
                setSubmitting(false)
                toast(getFirebaseErrorMessage(err));
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true)
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        signInWithPassword(email, password)
            .then(() => {
                setSubmitting(false)
                toast("Logged In...")
                navigate(next)
            })
            .catch(err => {
                setSubmitting(false)
                toast(getFirebaseErrorMessage(err));
            })
    }

    // Demo USer
    // demo@demo.com
    // DemoDemo

    const emailRef=useRef()
    const passwordRef=useRef()

    const fillDemoUserInfo = (e) => {
        e.preventDefault()
        emailRef.current.value='demo@demo.com'
        passwordRef.current.value='DemoDemo'
        //handleSubmit(e)
    }

    return (
        <div className="min-h-[80vh] max-[800px]:min-h-[100vw] my-10 flex items-center justify-center ">
            <Title value={`${AppName} - Login`}></Title>
            <div className="container max-w-180! py-5  bg-base-100 shadow-2xl rounded-xl p-4 flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5  w-9/10 sm:w-8/10 md:w-7/10'>
                    <h1 className='font-bold mb-5 text-center text-primary'>LOGIN</h1>
                    <h2 className='text-accent'>Email:</h2>
                    <input ref={emailRef} type="email" name='email' className='input input-primary w-full' placeholder='Enter your email address' required />
                    <h2 className='text-accent'>Password:</h2>
                    <div className='relative'>
                        <input ref={passwordRef} type={showPass ? 'text' : 'password'} name='password' className='input input-primary w-full' placeholder='Enter Your password' required /> <button type='button' onClick={() => setShowPass(!showPass)} className='z-99 absolute top-1/2 -translate-y-1/2 right-4 select-none'> {showPass ? <BsEyeSlashFill /> : <BsEyeFill />}</button>
                    </div>

                    <div className='hidden'> Forget password? recover <Link to={`/recover${location.search}`} className='text-primary hover:underline'>here</Link> </div>

                    <Link className='underline text-primary' onClick={fillDemoUserInfo}>Fill demo user credentials</Link>

                    <button disabled={isSubmitting} className='btn btn-primary w-full'>Login</button>

                    <div> New to our site? register <Link to={`/register${location.search}`} className='text-primary'>here</Link></div>

                    <div className='divider'>Social login</div>

                    <button type='button' onClick={googleLogin} className="btn bg-base-100 border-gray-200">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>


                </form>
            </div>
        </div>
    );
};

export default LoginPage;