import { Link } from '@inertiajs/react';


export default function ActiveLink({ active = false, children, ...props }) {
    return <>
        <Link
            {...props}
            className={
                (active
                    ? 'active'
                    : '')
            }
        >
            {children}
        </Link>
    </>
}