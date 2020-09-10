import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
        />
        <div className="home-row">
          <Product title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"}
          id="1"
          rating={5}
          price={19.98}
          image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
          />
          <Product title={"Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"}
          id="2"
          rating={3}
          price={25.99}
          image={"https://images-na.ssl-images-amazon.com/images/I/41NnaLXlzwL._SY300_.jpg"}
          />
        </div>
        <div className="home-row">
        <Product title={"ASUS TUF Gaming Laptop GTX 1650 4GB Graphics (Ryzen 5-3550H/8GB RAM/512GB PCIe SSD/Windows 10 "}
          id="3"
          rating={5}
          price={799}
          image={"https://images-na.ssl-images-amazon.com/images/I/815K4p82zlL._SL1500_.jpg"}
          />
          <Product title={"ASUS ROG Zephyrus 15.6-inch FHD 144Hz Gaming Laptop (9th Gen Core i7-9750H/16GB RAM/512GB PCIe SSD/Windows 10"}
          id="4"
          rating={5}
          price={999.99}
          image={"https://images-na.ssl-images-amazon.com/images/I/81YV9uenExL._SL1500_.jpg"}
          />
          <Product title={"HP Omen 9th Gen Intel Core i7 Processor 15.6-inch FHD Gaming Laptop (16GB/1TB HDD + 512GB SSD/Windows 10/NVIDIA GTX 1650 4GB /Shadow Black), 15-dh0135TX"}
          id="5"
          rating={5}
          price={1200}
          image={"https://images-na.ssl-images-amazon.com/images/I/81Cb68HDH-L._SL1500_.jpg"}
          />
        </div>
        <div className="home-row">
        <Product title={"Samsung - 34-inch Premium Curved Monitor with 21:9 Wide Screen, USB Type C Connectivity & Ultra WQHD Resolution - LC34H890WJWXXL"}
          id="6"
          rating={4}
          price={500}
          image={"https://images-na.ssl-images-amazon.com/images/I/71qkzkC7bHL._SL1500_.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
