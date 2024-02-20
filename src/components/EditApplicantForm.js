import React from 'react';

const EditApplicantForm = ({ editedName, editedPosition, handleNameChange, handlePositionChange }) => {
  return (
    // Form for editing applicant details
    <form>
      {/* Input field for editing the applicant's name */}
      <label>Name:</label>
      <input type="text" value={editedName} onChange={handleNameChange} />

      {/* Input field for editing the applicant's position */}
      <label>Position:</label>
      <input type="text" value={editedPosition} onChange={handlePositionChange} />
    </form>
  );
};

export default EditApplicantForm;

/* The EditApplicantForm component is a simple form used for editing applicant details.
It receives props such as editedName, editedPosition, handleNameChange, and handlePositionChange.
The form includes two input fields, one for the applicant's name and the other for the position.
The value attribute of each input is set to the corresponding prop, ensuring that the form reflects the current editing values.
The onChange event handlers (handleNameChange and handlePositionChange) are passed to update the state when the user types into the input fields.
I'm using this component within the Modal component to provide an interface for editing applicant details.*/