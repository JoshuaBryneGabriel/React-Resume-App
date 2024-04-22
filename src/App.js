import React, { useState } from 'react';
import './App.css';

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [ticTacToeAbout, setTicTacToeAbout] = useState(Array(9).fill(null));
  const [ticTacToeExperience, setTicTacToeExperience] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickAbout = (i) => {
    const newTicTacToe = [...ticTacToeAbout];
    if (calculateWinner(newTicTacToe) || newTicTacToe[i]) return;
    newTicTacToe[i] = xIsNext ? 'X' : 'O';
    setTicTacToeAbout(newTicTacToe);
    setXIsNext(!xIsNext);
    if (calculateWinner(newTicTacToe)) {
      setShowAboutMe(true);
    }
  };

  const handleClickExperience = (i) => {
    const newTicTacToe = [...ticTacToeExperience];
    if (calculateWinner(newTicTacToe) || newTicTacToe[i]) return;
    newTicTacToe[i] = xIsNext ? 'X' : 'O';
    setTicTacToeExperience(newTicTacToe);
    setXIsNext(!xIsNext);
    if (calculateWinner(newTicTacToe)) {
      setShowExperience(true);
    }
  };

  return (
    <div className="app" style={{ backgroundColor: 'teal', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
      <header className="App-header">
        {/* <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px', marginRight: '20px' }} /> */}
        <h1>Joshua Gabriel</h1>
        <h2>Software Developer</h2>
      </header>
      <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <h3>About Me</h3>
        {showAboutMe ? (
          <p>I am a Computer Science Graduate of the University of The East with 4 months Project Based Contract experience as a Software Developer,
          now I am looking for a full-time job as a Software Developer to further enhance my skills and knowledge in my field of study as i am a fast learner,
          hardworking and can work under pressure. I am also a team player and looking to work with experienced individuals, I am also willing to learn new technologies in a fast paced manner
          in a short amount of time thanks to the advent of AI to help accelerate my learning and to be able to contribute to the company and to be able to help the company grow and succeed.
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {ticTacToeAbout.map((value, i) => (
              <button key={i} onClick={() => handleClickAbout(i)}>{value}</button>
            ))}
          </div>
        )}
      </section>
      <section style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <h3>Experience</h3>
        {showExperience ? (
          <div>
            <h4>Cario - (Smarter Freight Technologies)</h4>
            <p>Role: Software Developer</p>
            <p>Duration: Dec 2023 - April 2024</p>
            <p>Description: Developed Tickets Application using C# Windows Forms with .NET Framework, Handled SQL operations using MS-SQL and a short introductory in Angular Web Development</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {ticTacToeExperience.map((value, i) => (
              <button key={i} onClick={() => handleClickExperience(i)}>{value}</button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

// Helper function to determine if there's a winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;




