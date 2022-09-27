import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;

 
    var skills = data.skills.map(function (skills) {
      return (
       <h1>{skills.name}</h1>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">

        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns"></div>
          </div>
        </div>
      </div>

      

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
