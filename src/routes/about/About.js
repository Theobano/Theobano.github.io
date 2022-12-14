import React from "react";
import { Helmet } from "react-helmet";
import "./About.css";

function About() {
  return (
    <div id="about">
      <Helmet>
        <title>Adedotun Ajibade - About</title>
    </Helmet>
      <div id="about-content">
        <h1>About me</h1>
        <p>
          Hello there! My name is Adedotun Ajibade, and I am a self-taught
          software engineer. I have a passion for exploring new technologies and
          have explored technologies ranging from web development to machine
          learning. I am an enthustistic learner and is always looking for new
          opportunities to learn and grow.
        </p>
        <p>
          I received my Bachelors of Technology degree in Industrial Mathematics
          from the Federal University of Technology, Akure in Nigeria,
          graduating with a first class. During my undergraduate studies, I
          gained a solid foundation in Mathematics and statistics and was
          introduced to the Python programming language. Armed with these and my
          interest in computer science, I delved into Data Science and Machine
          learning - a journey which started with a bootcamp in 2018 at Curators
          University(Coven labs) in Ondo State, Nigeria. I have since worked on
          a number of projects most especially with postgraduate students on
          their thesis. I am currently working as an IT support at Digital Pulse
          Technologies in Lagos, Nigeria where I am udergoing the compulsory
          National Youth Service.
        </p>
        <p>
          In my current role at Digital Pulse Technologies, I work with other
          developers to develop and maintain USSD applications, SMS applications
          and other neccesary features. I am skilled in varieties of programming
          languages including Python, Javascript, and Dart, and have experience
          with technologies and frameworks including data science and machine
          learning, Flutter, React.js, and cloud services.
        </p>
        <p>
          In my free time, I enjoy playing around with new technologies, playing
          video games, and watching anime. I am open to new opportunities as
          well as contibuting to open source software. Feel free to reach out to
          me on any of my social media platforms.
        </p>
      </div>
    </div>
  );
}

export default About;
