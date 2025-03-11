import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Song from "../components/Song";

test("renders song with correct props", () => {
  
  render(<Song title="Pink Pony Club" artist="Chappell Roan" year={2025} onDoubleClick={() => {}} />);
  
  expect(screen.getByText(/Pink Pony Club/)).toBeInTheDocument();
  expect(screen.getByText(/Chappell Roan/)).toBeInTheDocument();
  expect(screen.getByText(/2025/)).toBeInTheDocument();

});

test("handles double-click event", () => {
  
  const mockHandler = jest.fn();
 
  render(<Song title="Pink Pony Club" artist="Chappell Roan" year={2025} onDoubleClick={mockHandler} />);
  
  fireEvent.doubleClick(screen.getByText(/Pink Pony Club/));
  
  expect(mockHandler).toHaveBeenCalledWith("Pink Pony Club");

});