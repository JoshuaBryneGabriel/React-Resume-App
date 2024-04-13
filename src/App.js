import './App.css';

function App() {
  return (
  <div className= "app" style={{ backgroundColor: 'teal', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
    <header className="App-header">
      {/* <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px', marginRight: '20px' }} /> */}
      <h1>Joshua Gabriel</h1>
      <h2>Software Developer</h2>
    </header>
    <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <h3>About Me</h3>
      <p>I am a Computer Science Graduate of the University of The East with 4 months Project Based Contract experience as a Software Developer,
      now I am looking for a full-time job as a Software Developer to further enhance my skills and knowledge in my field of study as i am a fast learner,
      hardworking and can work under pressure. I am also a team player and looking to work with experienced individuals, I am also willing to learn new technologies in a fast paced manner
      in a short amount of time thanks to the advent of AI to help accelerate my learning and to be able to contribute to the company and to be able to help the company grow and succeed.
      </p>
    </section>
    <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <h3>Skills</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>C#</li>
        <li>.NET Framework</li>
        <li>ASP.NET</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>Jquery</li>
        <li>Python</li>
        <li>MongoDB</li>
      </ul>
    </section>
    <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <h3>Experience</h3>
      <h4>Cario - (Smarter Freight Technologies)</h4>
      <p>Role: Software Developer</p>
      <p>Duration: Dec 2023 - April 2024</p>
      <p>Description: Developed Tickets Application using C# Windows Forms with .NET Framework, Handled SQL operations using MS-SQL and a short introductory in Angular Web Development</p>
    </section>
  </div>
  );
}

export default App;


