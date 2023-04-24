import React from "react";
import { Joao } from "./components/Joao";
import GlobalStyle from "./theme/globalStyles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Joao />
      <h1>Hello World</h1>
    </>
  );
}
