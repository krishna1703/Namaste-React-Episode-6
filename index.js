import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
     <Body/>
     <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
