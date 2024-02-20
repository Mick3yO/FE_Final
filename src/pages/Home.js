import React from 'react';
import { Image } from 'react-bootstrap';
import staffingMeetingImage from '../images/staffing meeting.jpg';

const Home = () => {
  return (
    <div className="text-center">
      <div className="container">
        <h1>Staffing Agency API</h1>
        <Image src={staffingMeetingImage} alt="Staffing Meeting" style={{ width: '60%', maxWidth: '60%' }} />

      </div>

    </div>
  );
};

export default Home;