import React from 'react'
import images from '../Images/fwr1.jpg'
import image from '../Images/mg2.jpg'
// import AboutFlower from "./AboutFlower";
import { Link } from "react-router-dom";


const bgclr = {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          opacity: " 0.7",
        
        };

 function Header() {
  return (
    <>
    <div className=" container-fluid  row p-2 mb-1 h-25 w-100 " style={bgclr} >
        <div className=" col-3">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" ><b>Fiod</b></Link>
            </li>
          </ul>
        </div>
        <div className=" col-6">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link text-dark" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark" >About</Link>
            </li>
            <li className="nav-item">
              <Link to ="/gallery" className="nav-link text-dark" >Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark " >Contact us</Link>
            </li>
          </ul>
        </div>
        <div className=" col-3">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link text-dark" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/notification" className="nav-link text-dark" >notification</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link text-dark" >Search</Link>
            </li>

          </ul>

        </div  >
        <div className="row my-5 ">

          <div className="  col-8 my-5">
            <h3 className=" text-dark">Welcome</h3>
            <h1 className="text-danger">Flowers shop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui.
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at et consectetur blanditiis a nostrum, fugit fugiat sapiente nobis fuga!
            </p>
            <button className="bg-dark text-white rounded-circle  p-3 mx-3">buy now</button>
          </div>
          <div className="  col-4">
            <img src={images} alt="flower image" className="   h-50  " />
          </div>
        </div>
      </div>
      {/* <AboutFlower/> */}
    </>
  )
}
export default Header;
