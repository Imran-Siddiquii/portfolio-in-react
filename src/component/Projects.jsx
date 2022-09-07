import React from 'react'
import { Link } from 'react-router-dom';

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
      <section className="project container">
        <h3>Ubbi-Dubbi Translate </h3>
        <small>Date : 08/09/2022</small>
        <p>Built a app to check birthday is palindorme or not if not then show the next palindrome date using Html and Css and Javascript.</p>
        <h5> <span><Link to="/projects/ubbi-dubbi-translate" role="button"
              className="">Live Project</Link></span>
               {/* <span><a  href="https://github.com/Imran-Siddiquii/birthday-palindrome.git" className=" viewSource">View Source</a></span> */}
            </h5>
      </section>

      <section className="project container">
        <h3>Emoji Interpreter</h3>
        <small>Date : 08/09/2022</small>
        <p>Built a app to check birthday is palindorme or not if not then show the next palindrome date using Html and Css and Javascript.</p>
        <h5> <span><Link to="/projects/emoji-interpreter" role="button"
              className="">Live Project</Link></span>
               {/* <span><a  href="https://github.com/Imran-Siddiquii/birthday-palindrome.git" className=" viewSource">View Source</a></span> */}
            </h5>
      </section>
      <section className="project container">
        <h3>Movie Recommandation</h3>
        <small>Date : 08/09/2022</small>
        <p>Built a app to check birthday is palindorme or not if not then show the next palindrome date using Html and Css and Javascript.</p>
        <h5> <span><Link to="/projects/recommendation" role="button"
              className="">Live Project</Link></span>
               {/* <span><a  href="https://github.com/Imran-Siddiquii/birthday-palindrome.git" className=" viewSource">View Source</a></span> */}
            </h5>
      </section>
</>
  )
}

export default Projects;