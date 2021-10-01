import { useState } from 'react';

import ProfileUpdateForm from './ProfileUpdateForm';
import { ModalVerify, Modal } from '../../context/Modal'; 

const ProfileUpdate = ({ profile }) => {
    const [showModal, setShowModal] = useState();
    const [showVerification, setShowVerification] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        
        setShowModal(true);
    };

    return (
        <>
            <i
                className='fas fa-edit edit_item_white'
                onClick={handleUpdate}
            >
            </i>
            {showModal && (
                <Modal
                    onClose={() => setShowVerification(true)}
                >
                    <ProfileUpdateForm 
                        profile={profile}
                        setShowModal={setShowModal}
                        setShowVerification={setShowVerification}
                    />
                </Modal>
                )
            }
            {showVerification &&
                <ModalVerify
                    onClose={handleClose}
                    offVerify={() => setShowVerification(false)}
                >
                    <div>
                        Are you sure you want leave?
                    </div>
                </ModalVerify>
            }
            </>
    )
};

export default ProfileUpdate;