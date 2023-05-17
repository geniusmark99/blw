import { useEffect, useRef, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import CustomLabel from '@/Components/CustomLabel';
import GuestLayout from '@/Layouts/GuestLayout';
import GoogleIcon from '../../../images/Google.png';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { EyeIcon, EyeCloseIcon } from '@/Components/Icons/Icons';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {


    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    const inputPassword = useRef(null);
    const [showPasswordIcon, setPasswordIcon] = useState(false);

    const HandleShowPassword = (evt) => {
        if ('password' === inputPassword.current.type) {
            setPasswordIcon(true);
            inputPassword.current.type = 'text';
        } else {
            setPasswordIcon(false);
            inputPassword.current.type = 'password';
        }
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}


            <a href="#" className="google-signup-link">
                <div className="google-signup-sub">
                    <img src={GoogleIcon}></img>
                </div>
                <div className="google-signup-sub">
                    log in with google
                </div>
                <div></div>
            </a>


            <form id="form-input" onSubmit={submit}>
                <TextInput
                    id="email"
                    placeholder={errors.email ? errors.email : "Email Address"}
                    className={'mt-1 block w-full' + (errors.email ? " animate-bounce border-red-500 placeholder:text-red-400" : "")}
                    type="email"
                    name="email"
                    value={data.email}
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />



                <CustomLabel className='extra-label' htmlFor="password" value="Password">
                    <TextInput
                        id="password"
                        placeholder={errors.password ? errors.password : "Password"}
                        type="password"
                        name="password"
                        value={data.password}
                        className={'mt-1 block w-full' + (errors.password ? " animate-bounce border-red-500 placeholder:text-red-400" : "")}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        ref={inputPassword}
                    />


                    <div className="btn-password" title="click to see password" onClick={HandleShowPassword}>
                        {showPasswordIcon ? <EyeCloseIcon /> : <EyeIcon />}
                    </div>
                </CustomLabel>



                <div className="form-input-bottom">
                    <div className="remember-me">
                        <TextInput
                            type="checkbox"
                            name="password"
                            className="mx-2 border-2 border-blue-500 focus:outline-none focus:border-none"
                        />
                        Remember me
                    </div>
                    <Link href="/forgot-password">
                        Forget Password?
                    </Link>
                </div>


                <div className="form-btn-submit-cont">
                    <button type="submit" className="form-btn-submit font-bold text-2xl">
                        Log in
                    </button>
                </div>


            </form>
        </GuestLayout>
    );
}
