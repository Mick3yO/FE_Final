import React, { useState } from 'react';

// Component for adding a new applicant
const ApplicantForm = ({ onAdd }) => {
  const [newName, setNewName] = useState('');
  const [newPosition, setNewPosition] = useState('');

  // Function to handle changes in the applicant's name input field
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  // Function to handle changes in the applicant's position input field
  const handlePositionChange = (e) => {
    setNewPosition(e.target.value);
  };

  // Function to handle the addition of a new applicant
  const handleAddApplicant = () => {
    // Check if name and position are provided
    if (newName.trim() === '' || newPosition.trim() === '') {
      console.error('Name and position are required');
      return;
    }

    // Call the onAdd callback to handle the addition of a new applicant
    onAdd(newName, newPosition);

    // Reset form fields after adding an applicant
    setNewName('');
    setNewPosition('');
  };

  return (
    <div>
      {/* Input fields for entering the new applicant's name and position */}
      <label>Name:</label>
      <input type="text" value={newName} onChange={handleNameChange} />
      <label>Position:</label>
      <input type="text" value={newPosition} onChange={handlePositionChange} />

      {/* Button to trigger the addition of a new applicant */}
      <button onClick={handleAddApplicant}>Add Applicant</button>
    </div>
  );
};

export default ApplicantForm;

/* The ApplicantForm component is responsible for capturing input to add a new applicant.
Two state variables, newName and newPosition, are used to manage the input fields for the new applicant's name and position.
The handleNameChange and handlePositionChange functions update the corresponding state variables as the user types.
The handleAddApplicant function is called when the "Add Applicant" button is clicked. It checks if the name and position are provided, 
and if so, calls the onAdd callback passed as a prop with the new applicant's information.
After adding an applicant, the form fields are reset to empty values.
*/
