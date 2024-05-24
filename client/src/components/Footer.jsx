import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer className="border border-t-8 border-teal-500" container>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grif-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 rounded-lg text-white">
                Shubham's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://knowledgable-info.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Knowledgable Info
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shubham's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/shubhsingh1515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider></Footer.Divider>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by=" Shubham's Blog"
            year={new Date().getFullYear()}
          ></Footer.Copyright>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/profile.php?id=100038375522490" icon={BsFacebook}></Footer.Icon>
            <Footer.Icon href="https://www.instagram.com/shubh_singh1515/" icon={BsInstagram}></Footer.Icon>
            <Footer.Icon href="https://x.com/Shubh_singh1515" icon={BsTwitter}></Footer.Icon>
            <Footer.Icon
              href="https://github.com/shubhsingh1515"
              icon={BsGithub}
            ></Footer.Icon>
          </div>
        </div>
      </div>
    </Footer>
  );
}