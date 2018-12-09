import  React  from 'react';

export const ProfilePage = props => (
    <div className="profile">
        <h1 className="profile--title">Welcome, {localStorage.getItem('authorized')}</h1>
    </div>
);