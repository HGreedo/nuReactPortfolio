import React from "react";
// import img from "../images/linkedin.png"
import ('./aboutMe.css')


function About() {
 return (
    <div className="about-container">
            {/* {<img className="profile-pic" alt ='profile-pic' src={img}/>    } */}
            
            <h1>Hello! My name is Harry Reed</h1>


            <h6 className="tldr"> TL:DR I own a Small Women's Apparel Brand, recently graduated from a Full-Stack Web Bootcamp and currently work as an associate at Snow Peak's Warehouse. I like to work hard, and create product experiences that inspire people towards positive action. </h6>
            <br/>
            <p>
                I'm originally from Portland, Oregon, but grew up overseas for 10 and a half years in Hong Kong and Amsterdam before getting my undergrad in Journalism and Fashion Marketing at the U of Arizona.
                <br/>
                <br/>
                My first jobs out of college were as a customer service rep at a high-volume call center. I also supported the growth of Blue Star Donuts through assisting marketing events. I aquired a business license and sold 400 garments in 12 months through the apparel brand , and then got a job at high-end camping company called Snow Peak.
                <br/>
                <br/>
                Starting Ida Andersson Shop, and learning how to incorporate Etsy, Wix, Wordpress, Google Tag, Analytics, Pinterest, and Instagram, etc. evolved into this passion and insatiable desire to learn more about digital content creation and management.
                <br/>
                <br/>
                Which, ultimately led me to embarking on this coding journey and 6-month Full Stack Flex Bootcamp through U of Oregon.
                <br/>
                <br/>
                Like Ida Andersson, the Bootcamp was a fantastic platform to develop my computational skills, theory, and application. 
                <br/>
                <br/>
                I am a risk taker, (big believer in "you make zero percent of the shots you don't take), and I wanted to create a Final Project that would help me develop my understanding and application of all the course material. 
                <br />
                <br/>
                So, unlike my peers who were paired in groups of 4-5, I opted to do my Final Project completely own my own. 
                <br/>
                <br/>
                I conducted my own market research, ran a 'mini focus group' with students at the U of Oregon Sports Product Masters Program, and built the entire backend / frontend configuration, as well as styling and routing on my own.
                <br/>
                <br/>
                <br/>
                <a className="OFBC" href="https://docs.google.com/presentation/d/11norT5-tjyDEH1t3zuUZNtmzWBwMC2yjOdkXTDBOoX0/edit?usp=sharing">You can check out my presentation on "OFBC" here</a>
                <br/>
                <br/>

            </p>

        <div className="somethin-extra">
            <p>
                In my free time I go surfing on the Oregon Coast every weekend. I love backpack camping and hiking. Always Down for Karaoke and big time trivia Nerd.
            </p>
        </div>
        <div>

        <a className="email" href="mailto:reedharrison95@gmai.com"> Click Here to Send Me an Email</a>

        </div>
  </div>
        );
 }
export default About;