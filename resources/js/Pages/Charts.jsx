import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';

export default function Charts({ auth }) {
    return <>
        <Head title="Charts" />

        <DashboardLayout user={auth.user}>
            <h1>Hello there</h1>
        </DashboardLayout>

    </>
}