import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="shadow-slate-400 border-t-2 shadow-lg py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        Varun Pratap Singh
                    </div>
                    {/* Links */}
                    
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    {/* Social Links */}
                    <div className="flex space-x-6 text-2xl">
                        <a href="https://www.linkedin.com/in/varun-pratap-singh-928b69261/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Varunpratap74358" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/Varun86016" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                            <FaTwitter />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100072471157372" className="hover:text-blue-500 transition duration-300">
                            <FaFacebook />
                        </a>
                    </div>
                    {/* Contact Information */}
                    <div className="text-center md:text-right mt-4 md:mt-0">
                        <p>varunpratap74358@gmail.com</p>
                        <p>8601686595, 8958765733</p>
                    </div>
                </div>

                <div className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Varun Pratap Singh. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
