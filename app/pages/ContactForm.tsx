import React from "react";
import Github from "../assets/github-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import GMail from "../assets/gmail-svgrepo-com.svg";
import Whatsapp from "../assets/whatsapp-alt-svgrepo-com.svg";
import Instagram from "../assets/instagram-svgrepo-com.svg";
import Link from "next/link";

const ContactForm: React.FC = () => {
  return (
    // <div className="flex flex-wrap mt-[70px] mb-[70px] overflow-scroll gap-2">
    //   <h2 className="text-2xl font-bold mb-4">Feel Free to Contact</h2>
      <div className="flex w-[100%] md:flex-nowrap flex-wrap  gap-5">
        <div className="w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="services"
              >
                Services*
              </label>
              <select
                id="services"
                className="w-full p-3 h-[40px] rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option>Choose a Service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Design</option>
                <option>Poster Making</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 p-4 rounded-md text-white font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full space-y-4">
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+91 9048512163</p>
            <p>+91 9072512163</p>
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>jithin1998official@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://www.linkedin.com/in/jithin-krishna-078680177/">
                <LinkedIn height={25} width={25} fill={"#fff"} />
              </Link>
              <Link href="https://github.com/Jithinkrishnapu">
                <Github height={25} width={25} fill={"#fff"} />
              </Link>
              <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqLRrfLdfRKPKgtHtJHKrfFftscMPVrDFhXXPsXpjfKVgPQVgQWXDxsKppfWtlSfkkvjB">
                <GMail height={22} width={22} fill={"#fff"} />
              </Link>
              <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqLRrfLdfRKPKgtHtJHKrfFftscMPVrDFhXXPsXpjfKVgPQVgQWXDxsKppfWtlSfkkvjB">
                <Whatsapp height={25} width={25} fill={"#fff"} />
              </Link>
              <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqLRrfLdfRKPKgtHtJHKrfFftscMPVrDFhXXPsXpjfKVgPQVgQWXDxsKppfWtlSfkkvjB">
                <Instagram height={25} width={25} fill={"#fff"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ContactForm;
