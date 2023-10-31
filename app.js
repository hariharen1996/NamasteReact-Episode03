import React from "react";
import ReactDOM from "react-dom";
// 1 .Create an Nested header element using React.createElement(h1,h2,h3 inside a div with class "title")

const Heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Heading-1"),
  React.createElement("h2", {}, "Heading-2"),
  React.createElement("h3", {}, "Heading-3"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);

// 2. create same element using JSX

const HeadingJsx = (
  <div className="title">
    <h1>Heading - 1</h1>
    <h2>Heading - 2</h2>
    <h3>Heading - 3</h3>
  </div>
);

const rootJsx = ReactDOM.createRoot(document.getElementById("root"));
rootJsx.render(HeadingJsx);

// 3. create a Functional component of same with JSX
// 4. Pass attribute into the tag in jsx
// 5. Composition of component (add component inside another)
// 6. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX?
const name = "Headings";

const Title = () => {
  return <h1 className="heading">Namste React by Akshay Saini</h1>;
};

const HeadingFunctional = () => {
  return (
    <div className="title">
      <Title />
      <Title></Title>
      <h1>{name}</h1>
      <h1>Heading - 1</h1>
      <h2>Heading - 2</h2>
      <h3>Heading - 3</h3>
    </div>
  );
};

const rootFunctional = ReactDOM.createRoot(document.getElementById("root"));
rootFunctional.render(<HeadingFunctional />);
