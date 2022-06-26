import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import UserComponent from "../components/users/UserComponent";

const Seller = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <UserComponent />
      </main>
    </>
  );
};

export default Seller;
