import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Status from "../components/Status";

test("displays default status", () => {
 
  render(<Status />);
  
  expect(screen.getByText(/Select a track to play/)).toBeInTheDocument();
  
});