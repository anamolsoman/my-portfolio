import React from "react";

function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-26 md:p-12 xs:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
