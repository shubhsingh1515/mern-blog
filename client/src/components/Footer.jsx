import React, { useState } from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import logo from "../logo.png";

// Custom styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    padding: "20px",
    maxHeight: "80%",
    overflowY: "auto",
  },
};

export default function FooterComp() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  function openModal(content) {
    setModalContent(content);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const privacyPolicyContent = (
    <div>
      <h1>Privacy Policy</h1>
      <p>We value your privacy and are committed to protecting your personal information.</p>
      <p>We take reasonable measures to protect your information from unauthorized access.</p>
      <p>You have the right to access, correct, and delete your personal data.</p>
      <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>
      <p>We will notify you of any changes to this policy via our website.</p>
      <p>If you have any questions, please contact us at [shubhsingh1515].</p>
    </div>
  );

  const termsAndConditionsContent = (
    <div>
      <h1>Terms & Conditions</h1>
      <p>By using our website, you agree to these Terms & Conditions.</p>
      <p>You agree to use our website lawfully and refrain from prohibited activities.</p>
      <p>You are responsible for maintaining the security of your account information.</p>
      <p>We disclaim any warranties and limit our liability for errors or damages.</p>
      <p>You agree to indemnify us against any claims arising from your use of the website.</p>
      <p>We may terminate your access to the site at our discretion.</p>
      <p>We will notify you of any changes to these terms via our website.</p>
      <p>If you have any questions, please contact us at [shubhsingh1515].</p>
    </div>
  );

  return (
    <Footer className="border border-t-8 border-teal-500" container>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <img
                src={logo}
                alt="Logo"
                className="h-40 rounded-full sm:h-32 md:h-48"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.hostitsmart.com/blog/how-to-write-technical-blog/#:~:text=Technical%20blog%20writing%20is%20a,accessible%20to%20a%20broader%20audience."
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
                  TechVoyage Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/shubhsingh1515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://p-6nib.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  onClick={() => openModal(privacyPolicyContent)}
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  onClick={() => openModal(termsAndConditionsContent)}
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="TechVoyage Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100038375522490"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/shubh_singh1515/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://x.com/Shubh_singh1515"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/shubhsingh1515"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Legal Modal"
      >
        <button onClick={closeModal} style={{ float: "right" }}>
          Close
        </button>
        {modalContent}
      </Modal>
    </Footer>
  );
}
