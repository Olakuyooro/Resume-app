import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='text-white flex justify-end space-x-6 pr-8'>
      <div className='flex'>
        <MdMail className='text-xl'/>
        <a href = "mailto: pabloalabanza9@gmail.com">mail</a>
      </div>
      <div className='flex'>
        <FaLinkedin className='text-xl'/>
        <a
          href='https://www.linkedin.com/in/praise-kuyooro-b58135188/'
          target='_blank'
          rel="noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
