
import React from 'react';
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Your header content */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default Layout;
