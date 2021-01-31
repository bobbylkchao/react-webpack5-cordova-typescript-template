import React, { FC } from "react";
import ReactDom from "react-dom";
import logo from './test.jpg';
import "./test.min.css";

const Hello: FC<{title: string}> = ({ title }) => {
  return <h1><img src={logo} />{title}</h1>;
};

ReactDom.render(
  <Hello title="Hello, typescript + react + webpack + eslint." />,
  document.querySelector("#root"),
);