import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileCard from './ProfileCard';

const Profile = () => {
    const { userId } = useParams();
    const user = useSelector(state => state.session.user);
    const isOwner = user.id === +userId;

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>Profile</h2>
            <p>User {userId} </p>
            {isOwner &&
                <h3>I am the owner of this page</h3>
            }
            <ProfileCard 
                userId={userId}
            />
        </div>
    )
};

export default Profile;