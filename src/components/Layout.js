import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    // Main container with flex column layout and minimum height of 100vh
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation bar component */}
      <NavBar />

      {/* Container for the main content, allowing it to grow flexibly */}
      <div className="container flex-grow-1">
        {/* Child components (page content) */}
        {children}
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
/* The Layout component serves as the overall layout structure for the application.
It uses a flex column layout (d-flex flex-column) to organize the components vertically.
The minimum height of the container is set to 100vh to ensure it spans the entire viewport height.
The NavBar component is included at the top for navigation purposes.
The main content is placed inside a container with the class container flex-grow-1.
The flex-grow-1 class allows the main content to grow and fill the available space.
The {children} expression is a placeholder for the actual content of individual pages.
Finally, the Footer component is included at the bottom of the layout.
This structure ensures a consistent layout across different pages, with a navigation bar, flexible main content area, and a footer.*/