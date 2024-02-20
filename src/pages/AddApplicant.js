import React, { useState } from 'react';
import ApplicantForm from '../components/ApplicantForm';
import OurteamImage from '../images/Our team.jpg';

const AddApplicant = () => {
  // API endpoint for adding applicants
  const apiUrl = 'https://658de4137c48dce94739d123.mockapi.io/applicants';

  // State variable to manage success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to add a new applicant
  const addApplicant = (name, position) => {
    // Send a POST request to add a new applicant
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, position }),
    })
      .then(() => {
        // Update the success message and log the success
        setSuccessMessage(`${name} has been added!`);
        console.log('Applicant added successfully:', name, position);
      })
      .catch((error) => {
        // Update the error message and log the error
        setSuccessMessage('Error adding applicant. Please try again.');
        console.error('Error adding applicant:', error);
      });
  };

  return (
    <div>
      {/* Heading for the Add Applicant page */}
      <h2>Add Applicant</h2>
      <img src={OurteamImage} alt="Our Team" style={{ width: '60%', maxWidth: '60%' }} />

      {/* Form for adding a new applicant */}
      <ApplicantForm onAdd={addApplicant} />

      {/* Display success message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default AddApplicant;
/* The AddApplicant component represents the page for adding a new applicant.
It contains a form (ApplicantForm component) for entering the details of a new applicant.
The addApplicant function sends a POST request to the API to add a new applicant.
Success and error messages are updated based on the outcome of the request.
I did add a success message that provides feedback to the user upon successfully adding a new applicant.*/
