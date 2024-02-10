import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/kfaa5whc9ukiqp3tqseo.jpg"
              isBlog={false}
              title="LoopStudios Landing Page"
              description="Dive into the world of web design with Loopstudios, a captivating challenge from Frontend Mentor. This project showcases cutting-edge frontend development skills, blending creativity and functionality seamlessly. "
              ghLink="https://github.com/PrinceJetro/loopstudios"
              demoLink="https://princejetros-loopstudios.vercel.app"              
            />
          </Col>


                <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg"
              isBlog={false}
              title="Nike Shoes Store"
              description="Unleash Your Potential with Nike's Exclusive Mobile App! 👟 Step into a world of performance and style right from your phone. Explore the latest kicks, personalized recommendations, and exclusive releases - all at your fingertips. Elevate your game and style, exclusively on mobile.🔥 #JustDoIt #NikeFootwear"
              ghLink="https://github.com/PrinceJetro/nike-shoe-emporium"
              demoLink="https://nike-shoe-emporium.vercel.app/"              
            />
          </Col>

                
         
                
                
                <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://agency-landing-fem.herokuapp.com/images/mobile/image-transform.jpg"
              isBlog={false}
              title="SunnySide Landing Page"
              description="Step into the sunshine with Sunnyside! 🌞 Your go-to app for vibrant living and positivity. Dive into a world of joy, discover exciting features, and brighten your day with every click. Ready for a sunny adventure? Click now and let the sunshine in"
              ghLink="https://github.com/PrinceJetro/sunnyside"
              demoLink="https://sunnyside-lemon-tau.vercel.app/"              
            />
          </Col>

                
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png"
              isBlog={false}
              title="Social Media Web App"
              description="Welcome to a vibrant online community powered by Django, HTML, CSS, and JS! Our social media web application combines the robust backend capabilities of Django, leveraging a PostgreSQL database through Supabase for secure and efficient data storage"
              ghLink="https://github.com/PrinceJetro/Jetro"
              demoLink="https://jetrostagram.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://images.macrumors.com/t/bqE08dtO0_ZRrznXxWn978HSr-Y=/1600x900/smart/article-new/2011/10/itunes_movie_trailers_ipad.jpg"
              isBlog={false}
              title="Movie Trailer App"
              description="Embark on a cinematic journey with our React-based Movie Trailer app, exclusively tailored for mobile users. Immerse yourself in the world of film trailers on-the-go. With a mobile-centric design, this app brings the magic of React to your fingertips. Explore and preview the latest movie trailers seamlessly, all within the convenience of your mobile device. Lights, camera, React - the silver screen experience, now in the palm of your hand!"
              ghLink="https://github.com/PrinceJetro/sylva"
              demoLink="https://sylva-x-jetro-movie-app.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dz209s6jk/image/upload/v1633619397/Challenges/fhzpdnabrek50hvhftnl.jpg"
              isBlog={false}
              title="E-commerce Web Application"
              description="Discover a world of online shopping with our React-powered eCommerce web app. Immerse yourself in a visually stunning and user-friendly interface designed for seamless navigation."
              ghLink="https://github.com/PrinceJetro/Frontend-Mentor-E-commerce"
              demoLink="https://princejetro-e-commerce.vercel.app/"
            />
          </Col>

                          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dz209s6jk/image/upload/v1606413905/Challenges/ty4ppudcq94rtgj4rv6p.jpg"
              isBlog={false}
              title="Todo App"
              description="This ToDo app, crafted with React, empowers users to efficiently manage their tasks. Seamlessly add new tasks, mark them as completed, and effortlessly delete those no longer needed. With a clean and intuitive interface, this app simplifies task organization, helping you stay on top of your to-do list effortlessly.ch allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/PrinceJetro/Todo-app"
              demoLink="https://princejetro-todo-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dz209s6jk/image/upload/v1629017580/Screenshots/kklmlncc4yza3dvsjrtb.jpg"
              isBlog={false}
              title="Calculator"
              description="Experience the convenience of our React-based calculator app. Whether you're crunching numbers for work or school, this user-friendly tool provides a straightforward interface for basic arithmetic operations. Add, subtract, multiply, and divide with ease. "
              ghLink="https://github.com/PrinceJetro/calculator-app"
              demoLink="https://princejetro-calculator-app.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.sketchappsources.com/resources/source-image/music-icon-glmrvn.png"
              isBlog={false}
              title="Music app"
              description="Harmony in Your Hands: Dive into the Beat with our Music App! 🎶 Whether you're on your desktop or mobile, experience the rhythm like never before. Your music, your way. Click to play the soundtrack of your life! 🎧🌟 #MusicApp #TuneIn"
              ghLink="https://github.com/PrinceJetro/music-player-"
              demoLink="https://jetromusicapp.vercel.app/#"
            />
          </Col>

                
                
                </Row>
      </Container>
    </Container>
  );
}

export default Projects;
