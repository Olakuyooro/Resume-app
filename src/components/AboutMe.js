import React from 'react';
import TypeIt from 'typeit-react';

const AboutMe = () => {
  return (
    <div className='text-white w-72 ml-8 sm:w-96 sm:mt-12 sm:ml-72'>
      <TypeIt>
        <p>
          My name is Praise, a Frontend developer based in Ibadan, Nigeria.{' '}
          <br></br>
          I've had a thrilling adventure into web development. <br /> I have a
          strong desire to develop my abilities and create wonderful websites.
        </p>
      </TypeIt>
      <div>
        <hr className='w-96 mt-8 '></hr>
      </div>
    </div>
  );
};

export default AboutMe;
