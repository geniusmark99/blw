import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import CustomLabel from '@/Components/CustomLabel';
import { Head, Link, useForm } from '@inertiajs/react';
import GoogleIcon from '../../../images/Google.png';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <Link href="#" className="google-signup-link">
                <div className="google-signup-sub">
                    <img src={GoogleIcon}></img>
                </div>
                <div className="google-signup-sub">
                    Register with google
                </div>
                <div></div>
            </Link>

            <form id="form-input" onSubmit={submit}>

                <TextInput id="name"
                    name="name"
                    value={data.name}
                    autoComplete="name"
                    isFocused={true}
                    placeholder={errors.name ? errors.name : "Name"}
                    className={'mt-1 block w-full' + (errors.name ? " animate-bounce border-red-500 placeholder:text-red-400" : "")}
                    onChange={(e) => setData('name', e.target.value)}
                />

                <TextInput id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder={errors.email ? errors.email : "Email"}
                    className={'mt-1 block w-full' + (errors.email ? " animate-bounce border-red-500 placeholder:text-red-400" : "")}
                    autoComplete="username"
                    onChange={(e) => setData('email', e.target.value)}
                />


                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder={errors.password ? errors.password : "Password"}
                    className={'mt-1 block w-full' + (errors.password ? " animate-bounce border-red-500 placeholder:text-red-400" : "")}
                    autoComplete="new-password"
                    onChange={(e) => setData('password', e.target.value)}
                />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    placeholder={errors.password_confirmation ? errors.password_confirmation : "Comfirm Password"}
                    className={'mt-1 block w-full' + (errors.password_confirmation ? " animate-bounce border-red-500 placeholder:text-red-400" : "")}
                    value={data.password_confirmation}
                    autoComplete="new-password"
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                />

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-blue-500 hover:text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4 bg-red-500 opacity-90 hover:opacity-100" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
                {/* <CustomLabel /> */}

            </form>


        </GuestLayout>
    );
}
