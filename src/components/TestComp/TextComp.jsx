import "./TextComp.css";

const TextComp = () => {
  return (
    <>
      <div className="testInfo">
        <h1>Online Tests</h1>
        <p>
          Our platform offers a variety of online tests to assess and improve
          your knowledge in different areas.
        </p>
        <h2>Types of Tests</h2>
        <ul>
          <li>
            <strong>HTML:</strong> Test your understanding of web structure and
            semantics.
          </li>
          <li>
            <strong>CSS:</strong> Evaluate your skills in styling and layout
            techniques.
          </li>
          <li>
            <strong>JavaScript:</strong> Challenge your problem-solving and
            coding abilities.
          </li>
        </ul>
        <h2>Levels</h2>
        <ul>
          <li>
            <strong>Beginner:</strong> Start from the basics and learn the
            fundamentals.
          </li>
          <li>
            <strong>Intermediate:</strong> For those comfortable with the basics
            and ready to learn more complex concepts.
          </li>
          <li>
            <strong>Advanced:</strong> Test your expertise and advanced
            knowledge in real-world scenarios.
          </li>
        </ul>
        <p>Choose a test that matches your skills and start improving today!</p>
      </div>
    </>
  );
};

export default TextComp;
