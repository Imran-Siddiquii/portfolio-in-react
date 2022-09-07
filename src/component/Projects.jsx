import React from 'react'
const Projects = () => {
  return (<>
  <header className="header">
     <h2><b>Projects </b></h2>
       </header>
       <section className="project container">
        <h3>Birthday Palindrome </h3>
        <small>Date : 31/08/2022</small>
        <p>Built a app to check birthday is palindorme or not if not then show the next palindrome date using Html and Css and Javascript.</p>
        <h5> <span><a href="https://birthday-plndrom.netlify.app/" role="button"
              className="">Live Project</a></span>
               <span><a  href="https://github.com/Imran-Siddiquii/birthday-palindrome.git" className=" viewSource">View Source</a></span>
            </h5>
      </section>
</>
  )
}

export default Projects;