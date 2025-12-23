import React from 'react';
import './styles.css'; // Import your custom styles

function App() {
  return (
    <div className="body">
      {/* Header */}
      <header id="header-container">
        <h1 id="title">Kim's Kreations</h1>
        <img className="logo-img" src="/logo.png" id="logo" alt="Kim's Kreations Logo" />
      </header>

      {/* Navigation Buttons */}
      <nav id="nav-buttons">
        <button>Home</button>
        <button>Cakes</button>
        <button>Sweets</button>
      </nav>

      {/* About Me Section */}
      <div id="about-me">
        <p>Welcome to Kim's Kreations! A small, black-owned baking business located in Hampton, VA and Brockton, MA! I sell assorted sweets, including cakes, cupcakes, cookies. Use the navigation buttons above to look around, and place an order!</p>
      </div>
    </div>
  );
}

export default App;