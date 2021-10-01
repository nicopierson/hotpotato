import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateProfile } from '../../store/profile';

import styles from './ProfileUpdate.module.css';

const ProfileUpdateForm = ({ profile, setShowModal, setShowVerification }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState(profile?.username ? profile.username : '');
    const [email, setEmail] = useState(profile?.email ? profile.email : '');
    const [profile_img, setProfileImg] = useState(profile?.profile_img ? profile.profile_img : '');

    const handleCreate = async (e) => {
        e.preventDefault();

        const payload = {
            id: profile.id,
            username,
            email,
            profile_img,
        }

        const profileData = await dispatch(updateProfile(payload));

        if ('errors' in profileData) {
            setErrors(profileData.errors);
        } else {
            setShowModal(false);
        }
    };

    return (
        <div className='profile_container'>
            <div className={styles.header_container}>
                <h2>Update Profile</h2>
                <div className={styles.errors}>
                    <p className={styles.header_description}>Fill out the information about your profile...</p>
                </div>
            </div>
            <div className={styles.edit_input_container}>
                <input
                    className={`${styles.edit_field} ${errors.length > 0 && Object.keys(errors[0]).includes('username') ? 'errors_input' : ''}`}
                    type='text'
                    name='username'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder='Username'
                    autoFocus={true}
                >
                </input>
                <p className={styles.modal_errors_message}>
                    {errors.length > 0 &&
                        <>
                            {errors[0].username}
                        </>
                    }
                </p>
                <input
                    className={`${styles.edit_field} ${errors.length > 0 && Object.keys(errors[0]).includes('email') ? 'errors_input' : ''}`}
                    type='text'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Email'
                >
                </input>
                <p className={styles.modal_errors_message}>
                    {errors.length > 0 &&
                        <>
                            {errors[0].email}
                        </>
                    }
                </p>
                <input
                    className={`${styles.edit_field} ${errors.length > 0 && Object.keys(errors[0]).includes('profile_img') ? 'errors_input' : ''}`}
                    type='text'
                    name='profile img'
                    onChange={(e) => setProfileImg(e.target.value)}
                    value={profile_img}
                    placeholder='profile image url'
                >
                </input>
                <p className={styles.modal_errors_message}>
                    {errors.length > 0 &&
                        <>
                            {errors[0].profile_img}
                        </>
                    }
                </p>
                <div>
                    <button
                        onClick={handleCreate}
                        className={styles.save_button}
                    >
                        <i className='fas fa-check-circle'></i>
                        <span>Save</span>
                    </button>
                    <button
                        className={styles.cancel_button}
                        onClick={() => setShowVerification(true)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProfileUpdateForm;