function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C Programming",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="section">

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;