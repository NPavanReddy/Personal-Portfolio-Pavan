import React from "react";
import SectionWrapper from "./SectionWrapper"; // Import SectionWrapper

const ContactSection = ({ email, phone }) => (
  <SectionWrapper id="contact" title="Get in Touch" className="bg-white">
    <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
      <p className="text-center text-lg text-gray-700 mb-8">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300"
            placeholder="Your Name"
            aria-label="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300"
            placeholder="your.email@example.com"
            aria-label="Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-300"
            placeholder="Your message here..."
            aria-label="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Alternatively, you can reach me directly:</p>
        <p className="mt-2">
          Email:{" "}
          <a
            href={`mailto:${email}`}
            className="text-indigo-600 hover:underline"
          >
            {email}
          </a>
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default ContactSection;
