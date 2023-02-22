import React from "react";
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";

const Home = () => {
  const url = window.location.href;
  const scrollToProducts = () => {};
  return (
    <div>
      {/* <AdminOnlyRoute /> */}
      <Slider />
      <Product />
    </div>
  );
};

export default Home;
