// frontend/src/context/Modal.js
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState(false);


  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}


export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />

      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function ModalVerify({ offVerify, onClose,children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  const verifyAndClose = () =>{
    offVerify();
    onClose();
  }

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" />
      <div id="modal-content" className="modal-verify">
        {children}
        <div className="display-buttons">
          <div  className="button-style-stay" onClick={offVerify}>Stay</div>
          <div className="button-style-exit" onClick={verifyAndClose}>Leave</div>
        </div>


      </div>

    </div>,
    modalNode
  );
}
