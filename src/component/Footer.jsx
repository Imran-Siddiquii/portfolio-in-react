import React from 'react'

const Footer = () => {
  return (<>
        <footer className="footer">
<footer className="footer-container">
  {/* <!-- Grid container --> */}
  <div className="container">
    <h2>Connect with</h2>
    {/* <!-- Section: Social media --> */}
    <section className="icon">
      {/* <!-- Facebook --> */}
      <a className="btn"  href="https://www.facebook.com/profile.php?id=100012466931790" role="button"><i
          className="fab fa-facebook-f"></i></a>

      {/* <!-- Twitter --> */}
      <a className="btn"  href="https://twitter.com/siddiquiimran15" role="button"><i className="fab fa-twitter"></i></a>

      {/* <!-- Google --> */}
      <a className="btn"  href="#!" role="button"><i className="fab fa-google"></i></a>

      {/* Instagram  */}
      <a className="btn"  href="#!" role="button"><i className="fab fa-instagram"></i></a>

      {/* <!-- Linkedin --> */}
      <a className="btn"  href="https://www.linkedin.com/in/imran-siddiqui-45aa50174/" role="button"><i
          className="fab fa-linkedin-in"></i></a>

      {/* <!-- Github --> */}
      <a className="btn"  href="https://github.com/Imran-Siddiquii" role="button"><i className="fab fa-github"></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
</footer>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="footer-copywrite" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    <div className="copywrite">
      © 2022 Copyright :
    {/* </span> */}
    <a className=""
    href="https://imransiddiqui.netlify.app/">ImranSiddiqui</a>
  </div>
</div>
  {/* <!-- Copyright --> */}
</footer>
  </>
  )
}

export default Footer;