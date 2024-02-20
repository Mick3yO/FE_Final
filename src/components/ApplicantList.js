import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

// API I'm using the same mockAPI from previous assignments
const apiUrl = 'https://658de4137c48dce94739d123.mockapi.io/applicants';

const ApplicantList = ({ onEdit }) => {
  const [applicants, setApplicants] = useState([]);

  // Function to fetch and load the list of applicants from the API
  const loadApplicants = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setApplicants(data))
      .catch(error => console.error('Error fetching applicants:', error));
  };

  useEffect(() => {
    // Load applicants when the component mounts
    loadApplicants();
  }, []);

  // Function to handle the deletion of an applicant
  const handleDeleteApplicant = (id, name) => {
    // Display a confirmation message before deleting
    const isConfirmed = window.confirm(`Are you sure you want to delete ${name}?`);

    if (isConfirmed) {
      // Send a DELETE request to remove the applicant
      fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          // Reload the list of applicants after deleting
          loadApplicants();
        })
        .catch((error) => console.error('Error deleting applicant:', error));
    }
  };

  return (
    <div>
      {/* Display a list of applicants */}
      <ul>
        {applicants.map(applicant => (
          <li key={applicant.id}>
            {/* Display the applicant's name and position */}
            {applicant.name} - {applicant.position}

            {/* Button to trigger the editing of the applicant */}
            <button onClick={() => onEdit(applicant)}>Edit</button>

            {/* Button to delete the applicant */}
            <Button variant="danger" onClick={() => handleDeleteApplicant(applicant.id, applicant.name)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantList;
/* The ApplicantList component is responsible for displaying a list of applicants retrieved from the API.
The loadApplicants function fetches the list of applicants and updates the component state.
The useEffect hook is used to load applicants when the component mounts.
The handleDeleteApplicant function handles the deletion of an applicant, I added  a confirmation message before sending a DELETE request to the API.
Each applicant is displayed in a list item, showing their name and position.
Edit and delete buttons are provided for each applicant, with the ability to trigger the editing functionality and delete the applicant, respectively.
I'm not a fan of the layout etc but.. it works for the requirements
The onEdit prop is a callback function passed from the parent component, indicating what should happen when the "Edit" button is clicked.*/