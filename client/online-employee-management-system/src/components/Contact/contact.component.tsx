"use client";

import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web3forms.com/client/script.js";
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <section className="py-6">
      <div className="container mx-auto text-center mb-4" data-aos="fade-up">
        <p className="">
          If you have any questions, suggestions or want to contact, feel free
          to reach out!
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="p-8 shadow-lg rounded-lg">
            <form
              action="https://api.web3forms.com/submit"
              method="post"
              className=""
            >
              <input
                type="hidden"
                name="access_key"
                value="f946edf4-2bb1-420c-ac61-8b5f4b34382d"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name-field"
                    className="block text-gray-600 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-field"
                    className="block text-gray-600 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="subject-field"
                  className="block text-gray-600 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject-field"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter the subject"
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message-field"
                  className="block text-gray-600 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message-field"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="h-captcha" data-captcha="true"></div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
