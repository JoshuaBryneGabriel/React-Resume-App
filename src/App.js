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
      <p>I am a Computer Science Graduate of the University of The East with 4 months Project Based Contract experience as a Software Developer</p>
    </section>
    <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <h3>Skills</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>C#</li>
        <li>.NET Framework</li>
        <li>ASP.NET</li>
        <li>HTML</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    </section>
    <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <h3>Experience</h3>
      <h4>Company Name</h4>
      <p>Role: Software Developer</p>
      <p>Duration: Dec 2023 - April 2024</p>
      <p>Description: Developed Tickets Application using C# Windows Forms with .NET Framework</p>
    </section>
  </div>
  );
}

export default App;


