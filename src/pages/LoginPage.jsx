import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const { googleSignin } = useContext(AuthContext);
    const googleLogin = () => {
        googleSignin()
            .then(() => { })
            .catch((err) => {
                alert(err)
            })

    }


    return (
        <div className="min-h-[80vh] max-[800px]:min-h-[100vw] my-10 flex items-center justify-center ">
            <div className="w-[80vw] lg:w-[60vw] xl:w-[40vw] max-w-9/10  bg-white shadow-2xl rounded-md p-4 flex flex-col items-center justify-center">
                <form action="" className='flex flex-col gap-5 w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3'>
                    <h1 className='font-bold mb-5 text-center'>LOGIN</h1>
                    <h2 className=''>Email:</h2>
                    <input type="text" className='input w-full' placeholder='Enter your email address' />
                    <h2>Password:</h2>
                    <input type="password" className='input w-full' placeholder='Enter Your password' />

                    <div> Forget password? recover <Link to='/recover' className='text-primary hover:underline'>here</Link> </div>

                    <input type="submit" value="Login" className='btn btn-primary w-full' />



                    <button type='button' onClick={googleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;