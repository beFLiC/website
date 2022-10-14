import React from "react";
// import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  return (
    <div id='contact'>
      <section className="py-52  h-[100vh]  text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 m-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="bg-gradient-to-r from-green-400 to-indigo-800 text-transparent bg-clip-text text-4xl font-bold">
              Get in touch
            </h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>FLiC Address, IET-DAVV</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            action="https://formspree.io/f/meqdkojv"
            method="POST"
            className="flex flex-col py-6 space-y-4 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <input
                type="text"
                placeholder="Your Name"
                className="block w-full py-2 rounded-3xl px-4 shadow-lg focus:ring focus:ring-opacity-75 focus:ring-yellow-400 bg-gray-800"
              />
            </label>
            <label className="block">
              <input
                type="email"
                placeholder="Email Address"
                className="block w-full  py-2 rounded-3xl px-4 shadow-lg focus:ring focus:ring-opacity-75 focus:ring-yellow-400 bg-gray-800"
              />
            </label>
            <label className="block">
              <textarea
                rows="3"
                placeholder="Message"
                className="block w-full py-2 rounded-3xl px-4 shadow-lg  focus:ring focus:ring-opacity-75 focus:ring-yellow-400 bg-gray-800"
              ></textarea>
            </label>
            <button
              type="button"
              className="py-2 sm:py-3  font-semibold rounded-full bg-green-500 text-violet-800 self-center px-8 text-lg  focus:ring-opacity-75  hover:bg-green-600  "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
