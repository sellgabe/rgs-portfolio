import React from 'react';
import myPhoto from '../assets/myphoto.png';

const Home = () => {
  return (
    <section id="home" className="h-[100vh] w-full relative">
      <div className="container">
        <div className="flex gap-3 text-center justify-center items-center flex-col mt-48 ">
          <div className="box-container">
            <div className="box">
              <div>
                <img
                  src={myPhoto}
                  alt="russell photo"
                  className="rounded-2xl h-[10rem] w-[8rem]"
                />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-neutral-800 max-sm:text-3xl">
            Front-End Developer
          </h1>
          <p className="font-mulish text-xl text-neutral-600 max-sm:text-base">
            Hi, I'm Russell San Pedro. A passionate Front-End Developer based in
            the Philippines 📍
          </p>
          <div className="flex gap-2 text-white mt-2">
            <button className="px-5 py-3 rounded-xl bg-blue-700 text-white hover:opacity-95">
              <a href="#contact">Contact Me</a>
            </button>
            <button className="px-5 py-3 rounded-xl bg-neutral-500 text-white hover:opacity-95">
              <a
                href="https://drive.google.com/file/d/1DpB1gMKIM_Cs3PZTJRrDvIhpl8D3rb00/view?usp=sharing"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center font-mulish mt-12 max-sm:flex-col ">
          <p className="font-semibold pr-4 text-neutral-700 border-r-2 border-solid border-neutral-400 mr-14 max-sm:border-b-2 max-sm:border-r-0 max-sm:mb-6 max-sm:mr-0 max-sm:p-0 max-sm:pb-2">
            Tech Stack
          </p>
          <div>
            <ul>
              <li>
                <img
                  src="https://skillicons.dev/icons?i=html,css,js,react,tailwind,nodejs,express,mysql"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
