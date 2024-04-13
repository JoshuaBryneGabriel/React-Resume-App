import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
        <h1>Joshua Gabriel</h1>
        <h2>Software Developer</h2>
      </header>
      <section>
        <h3>About Me</h3>
        <p>I am a Computer Science Graduate of the University of The East with 4 months Project Based Contract experience as a Software Developer</p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </section>
      <section>
        <h3>Experience</h3>
        <h4>Company Name</h4>
        <p>Role: Full Stack Developer</p>
        <p>Duration: Jan 2020 - Present</p>
        <p>Description: Developed and maintained web applications using React, Node.js, and MongoDB.</p>
      </section>
      <section>
        <h3>Education</h3>
        <h4>University Name</h4>
        <p>Degree: Bachelor's in Computer Science</p>
        <p>Year: 2016 - 2020</p>
      </section>
      <footer>
        <p>Contact: johndoe@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/johndoe/">https://www.linkedin.com/in/johndoe/</a></p>
      </footer>
    </div>
  );
}

export default App;

