import React from "react";
import ('./thirdpartylinks.css')
const ThirdPtyLinks = () => (
    <div>
            {/* <img alt ='profile-pic' src={profilePic}/>    */}
            <h1>Here is where I will put my work examples</h1>
            <p>
            This is a working route I need to update accordingly 
            </p>
            <ul className="link-container"> 
            
            <li className="link">
            <a href="https://github.com/HGreedo">Check Out My Github</a>
            </li>
            <li className="link">
            <a className="link" href="https://www.linkedin.com/in/harrison-reed-067436170/">Check Out My LinkedIn</a>
            </li>
            <li className="link">
            <a className="email" href="mailto:reedharrison95@gmai.com">reedharrison95@gmail.com</a>
            </li>

            <li className="link">
            <a href="https://finalproject-ofbc.herokuapp.com/">Final Project "OFBC" *still in development*</a>
            </li>
            <li className="link">
            <a href="https://www.idaanderssonshop.com/">Ida Andersson Shop</a>
            </li>
            <li className="link">
            <a className="email" href="mailto:idaanderssonshop@gmai.com">idaanderssonshop@gmail.com</a>
            </li>
            <li className="link">
            <a href="https://www.etsy.com/shop/IdaAnderssonShop">Reviews on Etsy</a>
            </li>
            <li className="link">
            <a href="https://github.com/HGreedo?tab=repositories">School Work Repos</a>
            </li>

            </ul>
  </div>
        );

export default ThirdPtyLinks;