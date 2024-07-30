import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

class About extends React.Component {
  render(){
    return(
      <div id="about">
        <h1>About</h1>
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
