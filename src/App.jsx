import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'
import MiniCV from './components/MiniCV'



function App() {
  
  return (
    <>
      <Navbar />
      <h1 className='bgTitle'>We all have to start somewhere...</h1>
      <div className='mainBody'>
      <MiniCV />
        <div className='bio' id="aboutMe"><h2>...and here is where my journey begins!</h2>
          <h4>Hello there, my name is Ángel!</h4>
          <p>
            Welcome to my website. I’m a web developer who is constantly learning, and I love creating responsive, user-friendly websites that look great and work smoothly.
            While I’m still learning, I’ve already picked up a strong foundation in both front-end and back-end development, working with HTML, CSS, JavaScript, React, and Node.js. 
            I’m passionate about improving my skills and exploring new technologies, always looking for ways to grow as a developer. While I enjoy all aspects of web development,
            I’m especially drawn to front-end work because I love bringing designs to life and adding interactive features. I’ve worked on a variety of projects as part of my learning journey,
            and I’m eager to keep building and learning from every new challenge. My goal is to continue growing and eventually contribute to projects that make a real impact.
            <br /><br />  If you’d like to have me on board for your projects, feel free to drop me a message on any of my social media channels. I’d love to hear from you!

          </p>
        </div>
        <div className='projects'>
          <h2 id="myProjects">My Projects</h2>
            <Cards title="Fakeflix" desc="This project simulates a streaming catalog for movies and series by utilizing arrays for storing data and iteration methods for navigating the content. Each movie or series is represented as an object, allowing for efficient data manipulation and enhancing the project's scalability while providing a practical understanding of data structures and object-oriented programming." style="style1" />
            <Cards title="Weather App" desc="kfjnbdlkjbndlfnblfkdnb" style="style2" />
            <Cards title="morcilla" desc="kfjnbdlkjbndlfnblfkdnb" style="style3" />
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App
 