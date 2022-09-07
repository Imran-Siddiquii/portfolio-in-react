import React from 'react'
import Navbar from './Navbar'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (<>
  
    <div className=''>
<main className="hero-section ">
<div className="container-hero">
  <div className="hero-text">
  <span>
    <h3 className="">Mohd Imran</h3>
    <h5 className="">I am learning make to program and web application with neoG Camp <br/><span> You can connect with me on<span><a href="https://twitter.com/siddiquiimran15"  style={{display: "inline-block",textDecoration:"none", marginLeft:"5px",color:"#0A66C2"}}>twitter</a></span></span></h5>
    </span>
  </div>
      <div className="img">
        {/* <img src="Programmer-transparent-background-PNG.png" alt="PNG" width="100%" height="300px" className="png"> --> */}
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/website-building-5329711-4465465.png" alt="Hero images" width="100%" height="300px" className="png"/>
      
      </div>
    </div>
  </main>


<section className="technology container">
<div className="">
  <h3>Technology</h3>
  <p>I have some knowledge about HTML5, CSS3, SCSS, BOOTSTRAP, WORDPRESS, JAVASCRIPT, REACTJS.</p>
</div>
</section>

<section className="project container">
<h3>Projects</h3>
<p>I have built projects some project by learning through youtube and I am still learning and trying to make new
  projects.</p>
 <span><Link to="/projects" role="button"
      className="">Projects</Link></span>

</section>

<section className="blog container">
<h3>Blogs</h3>
<p>I have written some blogs about my personal experience on social media platforms check them out.</p>
<span><Link to="/blogs" role="button"
      className="">Blogs</Link></span>
</section>
    </div>
    </>)
}

export default Home