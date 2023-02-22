import React from 'react';
import MailIcon from './images/icons8-mail-48.png';
import linkIn from './images/icons8-linkedin-circled-48.png';

const Contact = () => {
  return (
    <div className='text-white flex justify-end space-x-6 pr-8'>
      <div className='flex'>
        <img className='w-5 h-5 mt-1' src={MailIcon} alt='mail'></img>
        <a href = "mailto: pabloalabanza9@gmail.com">mail</a>
      </div>
      <div className='flex'>
        <img className='w-5 h-5 mt-1' src={linkIn} alt='linkedin'></img>
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
