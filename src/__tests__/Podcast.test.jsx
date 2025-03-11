import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Podcast from "../components/Podcast";

test("renders podcast with season", () => {
  
  render(<Podcast season={2} episode={1} episodeTitle="Under the Hunter's Moon" onDoubleClick={() => {}} />);
  
  expect(screen.getByText(/Under the Hunter's Moon/)).toBeInTheDocument();

  expect(screen.getByText(/Season 2 Episode 1/)).toBeInTheDocument();
  
});
