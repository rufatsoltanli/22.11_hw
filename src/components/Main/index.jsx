import React from 'react'
import "./main.css"
function Main() {
  return (
    <>
      <section id='welcomeSection'>
        <div className="sectionCont">
          <div className="leftSide">
            <div className="header"><h2>A Bootstrap 5 template for modern businesses</h2></div>
            <div className="text">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</div>
            <div className="buttons">
              <button className="btn1">Get Started</button>
              <button className="btn2">Learn More</button>
            </div>
          </div>
          <div className="rightSide">
            <div className="imgExampleDiv">600 x 400</div>
          </div></div>
      </section>
      <section id='wayToStart'>
        <div className="sectionCont"><div className="title"><h2>A better way to start building.</h2></div>
          <div className="cardsCont">
            <div className="card">
              <div className="cardIcon"><i class="fa-solid fa-building"></i></div>
              <div className="cardTitle">Title</div>
              <div className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, explicabo.</div>
            </div>
            <div className="card">
              <div className="cardIcon"><i class="fa-solid fa-building"></i></div>
              <div className="cardTitle">Title</div>
              <div className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, explicabo.</div>
            </div>
            <div className="card">
              <div className="cardIcon"><i class="fa-solid fa-building"></i></div>
              <div className="cardTitle">Title</div>
              <div className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, explicabo.</div>
            </div>
            <div className="card">
              <div className="cardIcon"><i class="fa-solid fa-building"></i></div>
              <div className="cardTitle">Title</div>
              <div className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, explicabo.</div>
            </div></div></div>
      </section>
      <section id='startWorking'>
        <div className="sectionCont"><div className="text">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</div>
          <div className="author"><div className="imgExample">40x40</div> Tom Ato <span>/</span> CEO, Pomodoro</div></div>
      </section>
    </>
  )
}

export default Main