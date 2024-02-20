
import React, { useState, useEffect } from 'react';
import EditApplicantForm from './EditApplicantForm'; 

const Modal = ({ show, handleClose, handleConfirm, applicant }) => {
  // State for edited applicant details
  const [editedName, setEditedName] = useState('');
  const [editedPosition, setEditedPosition] = useState('');

  useEffect(() => {
    // Set initial values when the modal is opened or applicant changes
    if (applicant) {
      setEditedName(applicant.name);
      setEditedPosition(applicant.position);
    }
  }, [applicant]);

  // Event handler for name input change
  const handleNameChange = e => {
    setEditedName(e.target.value);
  };

  // Event handler for position input change
  const handlePositionChange = e => {
    setEditedPosition(e.target.value);
  };

  // Determine the CSS class for modal visibility
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      {/* Modal content */}
      <section className="modal-main">
        <h2>Edit Applicant</h2>

        {/* EditApplicantForm component for editing details */}
        <EditApplicantForm
          editedName={editedName}
          editedPosition={editedPosition}
          handleNameChange={handleNameChange}
          handlePositionChange={handlePositionChange}
          handleConfirm={() => handleConfirm({ name: editedName, position: editedPosition })}
        />

        {/* Cancel button to close the modal */}
        <button onClick={handleClose}>Cancel</button>
      </section>
    </div>
  );
};

export default Modal;
/* The Modal component is responsible for rendering a modal for editing applicant details.
It uses state hooks (useState) to manage the edited name and position.
The useEffect hook is utilized to set initial values when the modal is opened or when the applicant changes.
Input change handlers (handleNameChange and handlePositionChange) update the corresponding state.
The showHideClassName variable is used to conditionally apply CSS classes for modal visibility.
The EditApplicantForm component is included for editing the name and position.
The handleConfirm function is called when the user confirms the changes, passing the updated details.
The modal can be canceled and closed using the "Cancel" button.*/