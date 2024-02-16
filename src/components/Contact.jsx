import React from 'react';
import PhoneIcon from '../assets/phoneicon.svg';
import EmailIcon from '../assets/emailicon.svg';

const Contact = () => {
  return (
    <section id="contact" className="container py-16">
      <div className="">
        <h4 className="font-bold text-blue-500 mb-4">CONTACT</h4>
        <p className="font-bold text-2xl">Let's build something together! 👇</p>
      </div>
      <div className="mt-12">
        <ul className="flex gap-20 max-sm:flex-col max-sm:py-8">
          <li className="flex gap-8 items-center max-sm:flex-col max-sm:text-center">
            <img
              src={PhoneIcon}
              alt="phone icon"
              className="w-[30px] h-[30px]"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold">Phone Number</p>
              <p className="text-neutral-600">(0977) 093-3690</p>
            </div>
          </li>
          <li className="flex gap-8 items-center max-sm:flex-col max-sm:text-center">
            <img
              src={EmailIcon}
              alt="phone icon"
              className="w-[32px] h-[32px]"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold">Email</p>
              <a
                href="mailto:sellgabe23@gmail.com"
                className="text-neutral-600"
              >
                sellgabe23@gmail.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
