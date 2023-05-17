import React from 'react';

export default function Dashboard(props) {
    return (
        <div>
            <h1>Admin Dashboard</h1>

            <p>Welcome, {props.auth.user.name}!</p>

            <form method="POST" action="/admin/logout">
                <button type="submit">Logout</button>
            </form>
        </div>
    );
}