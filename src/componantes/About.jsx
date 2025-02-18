

function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express',
    'TypeScript',
    'MongoDB',
    'MySql',
    'Next.js',
    'C/C++'
  ]
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I am Varun Pratap Singh, a passionate Web developer with a keen
          eye for MERN Stack . With a background in IT, I strive to create
          impactful and visually stunning Software solutions that leave a
          lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Bachelor of Computer Applications (BCA), Future Institution, Expected
          2025 Diploma in Web Development, 2023 JavaScript Essentials, Coursera,
          2022
        </span>
        <br />
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          As a fresher with expertise in the MERN stack and Tailwind CSS, I have
          successfully completed several projects that demonstrate my skills in
          full-stack development. I developed a comprehensive{' '}
          <span className="text-green-500">Hospital Management System</span>{' '}
          that manages patient records, and staff details, making hospital
          operations more efficient. Additionally, I built a{' '}
          <span className="text-green-500">School Management System</span> to
          streamline student enrollment, and grade management. My experience
          also includes creating a{' '}
          <span className="text-green-500">Job Portal</span> with features for
          job postings and applications, providing a seamless experience for job
          seekers and recruiters. Furthermore, I built an{' '}
          <span className="text-green-500">Instagram Clone</span> that recreates
          core social media functionalities, such as user authentication and
          real-time updates, to simulate a social platform experience. Lastly, I
          developed an Auction Platform with features like bidding, item
          listings, and Chat functionalty, ensuring a smooth and engaging
          auction process for users.
        </span>
        <br />
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="mb-5">
          My mission is to become a highly skilled and successful full-stack
          developer, creating impactful, user-friendly applications that solve
          real-world problems. I am passionate about mastering both front-end
          and back-end technologies, especially with the MERN stack, and am
          constantly learning to stay updated with the latest trends and tools
          in web development. My journey is fueled by a commitment to continuous
          improvement, creativity, and an eagerness to tackle complex
          challenges. I aspire to contribute to meaningful projects that not
          only enhance my skills but also make a positive difference in the
          digital world, ultimately shaping me into a versatile and valuable
          developer.
        </p>
        <h1 className="text-green-600 font-semibold text-xl">Skills</h1>
        <div>
          {
            skills.map((item,index)=>{
              return(
                <h3 className="text-gray-500 text-sm" key={index}>{item}</h3>
              )
            })
          }
        </div>
        <br />
      </div>
    </div>
  )
}

export default About
