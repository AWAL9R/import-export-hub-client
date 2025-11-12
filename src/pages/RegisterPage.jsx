import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { auth } from '../firebase/firebase';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import CheckPassword from '../components/CheckPassword';


const RegisterPage = () => {
    const {setUser, signUpWithPassword, googleSignin } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordOkay, set_isPasswordOkay] = useState(false);
    const navigate=useNavigate();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    // console.log(params.get("next"))
    const next = decodeURIComponent(params.get("next") || '') || "/";

    const googleLogin = () => {
        googleSignin()
            .then(() => { 
                navigate(next)
            })
            .catch((err) => {
                toast(err.message)
            })
    }

    const handlePasswordChange=(e)=>{
        const p=e.target.value
        const isOk=CheckPassword({password:p})==null;
       setPassword(p)
       set_isPasswordOkay(isOk)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo=e.target.photo.value;
        const password=e.target.password.value;
        // console.log(name, email, photo, password)
        signUpWithPassword(email, password)
        .then(()=>{
            updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast("Profile updated")
                        setUser({ ...auth.currentUser })
                        navigate(next)
                    })
                    .catch(err => {
                        toast(err.message)
                        navigate(next)
                    });
        })
        .catch(err=>{
            toast("Error: "+err.message);
        })
    }


    return (
        <div className="min-h-[80vh] max-[800px]:min-h-[100vw] my-10 flex items-center justify-center ">
            <div className="w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw] max-w-9/10  bg-base-100 shadow-2xl rounded-md p-4 flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3'>
                    <h1 className='font-bold mb-5 text-center text-primary'>REGISTER</h1>
                    <h2 className='text-secondary'>Name:</h2>
                    <input type="text" name='name' className='input w-full' placeholder='Enter your full name' required />

                    <h2 className='text-secondary'>Email:</h2>
                    <input type="email" name='email' className='input w-full' placeholder='Enter your email address' required />

                    <h2 className='text-secondary'>PhotoURL:</h2>
                    <input type="url" name='photo' className='input w-full' placeholder='Enter profile picture url' required />

                    <h2 className='text-secondary'>Password:</h2>
                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} onChange={handlePasswordChange} name='password' className='input w-full' placeholder='Enter Your password' required /> <button type='button' onClick={() => setShowPass(!showPass)} className='z-99 absolute top-3 right-2 select-none'> {showPass ? <BsEyeSlashFill /> : <BsEyeFill />}</button>
                    </div>

                    {password?<CheckPassword password={password}/>:""}


                    <input disabled={!isPasswordOkay} type="submit" value="Register" className='btn btn-primary w-full' />

                    <div> Already have an account? login <Link to={`/login${location.search}`} className='text-primary'>here</Link></div>

                    <div className='divider'>Social login</div>

                    <button type='button' onClick={googleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>


                </form>
            </div>
        </div>
    );
};

export default RegisterPage;