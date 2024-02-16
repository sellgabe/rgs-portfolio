import React from 'react';
import GitHubIcon from '../assets/github-mark.svg';
import OpenIcon from '../assets/open-icon.svg';

const Project = ({ img, title, desc, tags, links, isOdd }) => {
  return (
    <li
      className={`flex ${
        isOdd ? 'flex-row-reverse' : 'flex-row'
      } items-center justify-center gap-20 max-md:flex-col-reverse max-md:gap-10`}
    >
      <div className="my-auto">
        <img src={img} className="project-image rounded-2xl" />
      </div>
      <div className="flex gap-3 flex-col justify-center items-center max-w-[17rem] text-center py-4 max-md:max-w-[29rem] ">
        <h4 className="font-bold">{title}</h4>
        <p className=" text-base text-neutral-600">{desc}</p>
        <div className="flex gap-4 font-bold">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <div className="flex gap-10 mt-4">
          <div className="flex gap-1 cursor-pointer">
            <button
              className="font-semibold"
              onClick={() => {
                window.open(links[0], '_blank');
              }}
            >
              Code
            </button>
            <img
              src={GitHubIcon}
              alt="github icon"
              className="w-[1.7rem] h-[1.7rem]"
            />
          </div>
          <div className="flex cursor-pointer">
            <button
              className="font-semibold"
              onClick={() => {
                window.open(links[1], '_blank');
              }}
            >
              Live Demo
            </button>
            <img
              src={OpenIcon}
              alt="github icon"
              className="w-[1.7rem] h-[1.7rem]"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
