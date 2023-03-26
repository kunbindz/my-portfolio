import React from "react";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="paddingX w-full flex items-center ">
      <div className="w-full betweenCenter max-w-7xl mx-auto border-t-[1px] border-t-[#100d25] py-6">
        <div>
          <p className="text-[14px]">Thank you for watching my portfolio.</p>
        </div>
        <div className="flex flex-row ease-in duration-300">
          {socialMedia.map((social, idx) => (
            <a href={social.link} target="_blank" key={social.id}>
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] hover:scale-150 ease-in duration-300 object-contain cursor-pointer ${
                  idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                } `}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
