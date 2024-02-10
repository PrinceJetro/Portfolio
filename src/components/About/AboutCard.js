import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adegbuyi Jephthah </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            I am currently a freelancer looking for projects to work on.
            <br />
            I have completed several courses on Software development, including CS50 at Harvard University with a \
              certificate of completion 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Digital design is like painting, except the paint never dries"{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
