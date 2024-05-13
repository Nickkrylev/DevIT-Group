import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root') || document.body;

function MyModal({ open, children, disableGlobalScroll }) {
  useEffect(() => {
    if (disableGlobalScroll && open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '20px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {children}
    </div>,
    modalRoot
  );
}

export default MyModal;
