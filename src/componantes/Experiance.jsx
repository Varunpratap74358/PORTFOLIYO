import React from 'react'
import HMS from '../../public/hospital1.png'
import SMS from '../../public/schoole.png'
import JOB from '../../public/jobportal.png'
import AUCTION from '../../public/auction.webp'
import ECOM from '../../public/e-com.png'

const Experience = () => {
  const projects = [
    {
      id: 1,
      logo: JOB,
      name: 'Job Portal',
      description:
        'A full-stack job portal application where users can search and apply for jobs, and employers can post job openings.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB',"Redux","Sadcn Ui","tailwind"],
      link: 'https://github.com/Varunpratap74358/JOBHUNT',
    },
    {
      id: 2,
      logo: AUCTION,
      name: 'Auction Platform',
      description:
        'An online auction platform that allows users to bid on items in real-time, with integrated user authentication.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB',"Redux","Sadcn Ui","tailwind"],
      link:"https://imaginative-malabi-e886b8.netlify.app/"
    },
    {
      id: 3,
      logo: HMS,
      name: 'Hospital Management System',
      description:
        'A management system for hospitals to handle patient records, appointments, and staff data effectively.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      link:"https://github.com/Varunpratap74358/HOSPITAL_MANEGMENT_SYSTEM"
    },
    {
      id: 4,
      logo: SMS,
      name: 'School Management System',
      description:
        'A comprehensive system to manage student enrollments, attendance, and teacher records for schools.',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      link:"https://github.com/Varunpratap74358/School_Final"
    },
    {
      id: 5,
      logo: ECOM,
      name: 'E-Commerse',
      description:
        'E-Commerse website using MERN stack technology with tailwind css',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      link:"https://github.com/Varunpratap74358/MERN_E_Commerse"
    },
  ]

  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className="text-3xl font-bold mb-8  text-gray-800">
          Experience & Projects
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Here are some projects I've worked on, showcasing my skills in
          full-stack development. Each project highlights my ability to solve
          real-world problems using modern web technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(
            ({ id, logo, name, description, technologies, link }) => (
              <div
                key={id}
                className="bg-white border-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {name}
                  </h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={link}
                    target='_blanck'
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View Project Detail
                  </a>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Experience
