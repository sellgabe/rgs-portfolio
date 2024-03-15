import React from 'react';

import sideimg from '../assets/sideimg.png';

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="container grid grid-cols-1 justify-center items-center text-center lg:grid-cols-2 gap-4">
        <div className="m-auto max-lg:mb-8 ">
          <img
            src={sideimg}
            alt=""
            className="w-[26rem] h-[20rem] rounded-2xl"
          />
        </div>
        <div className="m-auto text-center lg:text-left max-w-[35rem]">
          <h4 className="font-bold text-blue-500 text-lg mb-2">ABOUT ME</h4>
          <h2 className="font-bold text-2xl max-w-[21rem] mb-4 max-lg:mx-auto">
            Web Developer based in the Philippines 📍
          </h2>
          <p className="font-mulish text-base text-neutral-600 mb-4">
            Hey, my name is Russell, and I'm a Web Developer dedicated to
            crafting sleek UI/UX for my users.
          </p>
          <p className="font-mulish text-base text-neutral-600 ">
            My main stack currently is React.js in combination with Tailwind
            CSS. Additionally, I have some familiarity with Node.js and MySQL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
