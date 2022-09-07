import React from 'react'

const Blogs = () => {
  return (<>
    <header className="header">
    <h3><b>  Blogs </b></h3>
      </header>

      <section className="blog container">
        <h3>ECMAScript</h3>
        <small>Date : 04/09/2022</small>
        <p style={{fontFamily:"'Courier New', Courier, monospace"}}>
        Write a blog about ECMAScript some features such as let and const, fat arrow function etc. 
        </p>
                <span><a  href="https://imransiddiqui.hashnode.dev/ecmascript" role="button"
          className="">Read more</a></span>
      </section>

      <section className="blog container">
        <h3>Basic Css property</h3>
        <small>Date : 04/09/2022</small>
        <p style={{fontFamily:"'Courier New', Courier, monospace"}}>Write a blog about most basic useful properties of CSS</p>
          <span><a  href="https://imransiddiqui.hashnode.dev/basic-css" role="button"
            className="">Read more</a></span>
        </section>
    </>
  )
}

export default Blogs;