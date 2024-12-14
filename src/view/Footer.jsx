import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <nav className="flex items-center justify-around h-16">
        <FooterItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75L12 4.5l9 5.25V19.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5V9.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 21V9l3-2.25L15 9v12"
              />
            </svg>
          }
          text="Home"
          path="/home"
        />

        <FooterItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 3.75h5.25a.75.75 0 01.75.75v5.25m-6-6L20.25 9M9 20.25H3.75a.75.75 0 01-.75-.75V14.25m6 6L3.75 15"
              />
            </svg>
          }
          text="Looks"
          path="/looks"
        />

        <FooterItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5V12a9 9 0 11-18 0V7.5a1.5 1.5 0 013 0V12a6 6 0 0012 0V7.5a1.5 1.5 0 013 0z"
              />
            </svg>
          }
          text="Category"
          path="/category"
        />

        <FooterItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75h-9A2.25 2.25 0 005.25 6v12a2.25 2.25 0 002.25 2.25h9A2.25 2.25 0 0018.75 18V6a2.25 2.25 0 00-2.25-2.25z"
              />
            </svg>
          }
          text="Account"
          path="/account"
        />
      </nav>
    </footer>
  );
};

const FooterItem = ({ icon, text, path }) => {
  const navigate = useNavigate();

  return (
    <button
      className="flex flex-col items-center text-gray-500 transition-colors hover:text-blue-500 focus:text-blue-500"
      onClick={() => navigate(path)}
    >
      {icon}
      <span className="mt-1 text-sm">{text}</span>
    </button>
  );
};

export default Footer;
