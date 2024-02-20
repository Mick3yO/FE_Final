import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EditApplicantForm from '../components/EditApplicantForm';
import ApplicantList from '../components/ApplicantList';
import applicantsImage from '../images/applicants.jpg';

//Same API
const apiUrl = 'https://658de4137c48dce94739d123.mockapi.io/applicants';

const Applicants = () => {
  // State variables to manage the modal, selected applicant, and edited details
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedPosition, setEditedPosition] = useState('');

  // Function to handle the click event when editing an applicant
  const handleEditClick = applicant => {
    editApplicant(applicant.id);
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedApplicant(null);
  };

  // Function to confirm and save changes to an applicant
  const handleConfirm = () => {
    saveEditedApplicant(selectedApplicant.id, editedName, editedPosition);
  };

  // Function to handle changes in the edited name
  const handleNameChange = e => {
    setEditedName(e.target.value);
  };

  // Function to handle changes in the edited position
  const handlePositionChange = e => {
    setEditedPosition(e.target.value);
  };

  // Function to fetch and populate data for editing an applicant
  const editApplicant = id => {
    fetch(`${apiUrl}/${id}`)
      .then(response => response.json())
      .then(data => {
        setSelectedApplicant(data);
        setEditedName(data.name);
        setEditedPosition(data.position);
      })
      .catch(error => console.error('Error fetching applicant for editing:', error));
  };

  // Function to save changes to an applicant
  const saveEditedApplicant = (id, editedName, editedPosition) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: editedName,
        position: editedPosition,
      }),
    })
      .then(() => {
        setSelectedApplicant(null);
        setShowModal(false);
      })
      .catch(error => console.error('Error updating applicant:', error));
  };

  return (
    <div>
      {/* Heading for the Applicants page */}
      <h2>Applicants List</h2>
      <img src={applicantsImage} alt="Applicants" style={{ width: '60%', maxWidth: '60%' }} />

      {/* Displaying the list of applicants and passing a callback for editing */}
      <ApplicantList onEdit={handleEditClick} />

      {/* Modal for editing an applicant */}
      {showModal && selectedApplicant && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Applicant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form for editing applicant details */}
            <EditApplicantForm
              editedName={editedName}
              editedPosition={editedPosition}
              handleNameChange={handleNameChange}
              handlePositionChange={handlePositionChange}
            />
          </Modal.Body>
          <Modal.Footer>
            {/* Button to save changes */}
            <button onClick={handleConfirm}>Save Changes</button>
            
            {/* Button to cancel and close the modal */}
            <button onClick={handleClose}>Cancel</button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Applicants;

/* 
The Applicants component represents the page for managing and editing applicants.
State variables (showModal, selectedApplicant, editedName, and editedPosition) are used to manage the modal and its content.
Functions (handleEditClick, handleClose, handleConfirm, handleNameChange, handlePositionChange, editApplicant, and saveEditedApplicant) handle various aspects of editing applicants and managing state.
The component renders a heading, an image, and the ApplicantList component for displaying the list of applicants.
A used the modal component for editing an applicant's details
Callbacks are passed to child components for handling interactions and updates.*/