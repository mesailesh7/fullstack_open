import { useState } from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name}</p>
      <p>{props.part.exercises}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.parts[0]} />
      <Part part={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const totalExercise = props.totals["parts"].reduce((sum, total) => {
    return sum + total.exercises;
  }, 0);
  return (
    <div>
      <p>Total exercises: {totalExercise}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total totals={course} />
    </div>
  );
};

export default App;
