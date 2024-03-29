import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "../FooterItem/index.css";
const FooterItem = () => {
  return (
    <div className="footer rounded-0 card bg-black shadow-lg mt-0 golden-text">
      <div className="text-center my-5">
        <h1 className="footer-heading mb-3">Ready to do your best work? </h1>
        <h5 className="text-2xl font-bold mb-4">Let's get you started.</h5>
        <div className="flex justify-center ">
          <Button className="footer-button p-3 hover:shadow-lg w-48 md:w-68 rounded font-sans text-white text-sm md:text-lg transform transition duration-500 hover:scale-110">
            <a href="/signup" className="no-underline text-white ">
              SIGN UP NOW ➪
            </a>
          </Button>
        </div>
      </div>

      <div class="fluid-container items-center">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul className="flex flex-col">
              <h2 class="footer-heading">Company</h2>
              <Link to="/aboutUs">About Us</Link>
              <Link to="/Team">Team</Link>
              <li>Career</li>
              <li>Blogs</li>
              <li>News</li>
            </ul>
          </div>

          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Contact</h2>
              <li>Help & Support</li>
            </ul>
          </div>

          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Follow ACM</h2>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaInstagramSquare />
                </span>{" "}
                Instagram
              </li>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaXTwitter />
                </span>{" "}
                Twitter
              </li>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaLinkedin />
                </span>{" "}
                LinkedIn
              </li>
              <li class="flex items-center">
                <span class="mr-2">
                  <FaSquareThreads />
                </span>{" "}
                Thread
              </li>
            </ul>
          </div>

          <div class="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 flex justify-center mb-5">
            <ul class="list-items-styles">
              <h2 class="footer-heading">Quick Links</h2>
              <li>Privacy Policy</li>
              <li>Terms & Refund</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <hr class="w-full bg-white h-1 m-3" />

          <div class="w-full my-4">
            <p class="font-bold text-center">
              © 2023 All rights reserved by AI CHEF MASTER.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterItem;
