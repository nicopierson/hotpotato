import React , { useState }from 'react';
import { Modal } from '../../context/Modal';
import { ModalVerify } from '../../context/Modal';
import { RecipeForm } from './RecipeForm';
import './CreateRecipeButton.css';
import './CreateRecipeForm.css';


const RecipeFormModal = () => {

  const [showModal, setShowModal] = useState(false);
  const [verifyClose, setVerifyClose] = useState(false);
  return (
    <>
      <button className="add-recipe-base-button" onClick={() => setShowModal(true)}> <i className="editicon fas fa-pen add-recipe-base-icon"></i> <div className=" add-recipe-base-text">Add Recipe</div>  </button>

      {verifyClose && (
        <ModalVerify  offVerify={() => setVerifyClose(false)} onClose={() => setShowModal(false)}>
          <div className="want-to-close">Are you sure you want to close?</div>
        </ModalVerify>
      )}
      {showModal && (
        // passing a callback that sets state to Modal (true or false) to open/close Modal
        <Modal onClose={() => setVerifyClose(true)} >

          <RecipeForm />
        </Modal>
      )}

    </>
  );
}

export default RecipeFormModal;
