import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Controls from "../components/Controls";

test("renders control buttons", () => {
  
  render(<Controls />);
  
  expect(screen.getByRole("button", { name: /shuffle/i })).toBeInTheDocument();
  
  expect(screen.getByRole("button", { name: /play|pause/i })).toBeInTheDocument();

});

test("toggles play/pause state", () => {
  
  render(<Controls />);
  
  const playPauseButton = screen.getByRole("button", { name: /play|pause/i });

  fireEvent.click(playPauseButton);
  
  expect(playPauseButton).toHaveTextContent(/pause/i);
  
  fireEvent.click(playPauseButton);
  
  expect(playPauseButton).toHaveTextContent(/play/i);
  
});