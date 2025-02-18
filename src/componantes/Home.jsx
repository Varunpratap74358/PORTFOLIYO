
import { FaInstagram, FaSquareFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import varunpng from '../../public/varun.jpg'
import { ReactTyped } from 'react-typed'

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 my-16 md:my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-8 md:mt-24 space-y-3 order-2 md:order-1 text-center md:text-left">
            <span className="text-lg sm:text-xl font-semibold">Welcome To My Feed</span>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-x-0 sm:space-x-2 text-lg md:text-2xl lg:text-4xl">
              <h1>Hello, I am a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={['Developer', 'Programmer', 'Coder']}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md lg:text-lg text-justify px-4 md:px-0">
              As a fresher MERN (MongoDB, Express, React, Node.js) developer and
              a college student, you are stepping into a dynamic field that is
              highly in demand. Mastering the MERN stack enables you to build
              powerful, full-stack web applications, covering both frontend and
              backend development.
            </p>
            {/* Social media icons */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 space-y-6 md:space-y-0">
              <div className="space-y-2 pr-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex justify-center md:justify-start space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100072471157372" target="_blank">
                      <FaSquareFacebook className="text-2xl md:text-3xl cursor-pointer hover:text-blue-600 hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/varun-pratap-singh-928b69261/" target="_blank">
                      <FaLinkedin className="text-2xl md:text-3xl cursor-pointer hover:text-blue-800 hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/varun_singh_74358/" target="_blank">
                      <FaInstagram className="text-2xl md:text-3xl cursor-pointer hover:text-pink-600 hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl md:text-3xl cursor-pointer hover:text-blue-700 hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 pl-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex justify-center md:justify-start space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:text-green-700" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:text-green-700" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:text-blue-700" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full cursor-pointer hover:text-green-700" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-20 order-1">
          <div className="rounded-full w-[150px] h-[150px] sm:w-[200px] border-[5px] border-green-400 sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover">

            <img
              src={varunpng}
              alt="Profile"
              className="rounded-full w-[150px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[290px] lg:w-[400px] lg:h-[390px] object-cover"
            />
          </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
