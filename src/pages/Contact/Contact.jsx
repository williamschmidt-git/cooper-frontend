import React from 'react';
import Elipse from '../../components/Elipse/Elipse';
import Form from '../../components/Form/Form';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import './index.css';

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <Elipse />
      <GetInTouch />
      <Form />
    </div>
  );
}
