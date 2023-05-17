import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
export default function Accounts({ auth }) {
    return <>
        <Head title="Accounts" />
        <DashboardLayout user={auth.user}>
            <h1>Accounts</h1>
        </DashboardLayout>

    </>
} 