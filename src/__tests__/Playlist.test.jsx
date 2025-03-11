import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Playlist from "../components/Playlist";

test("renders playlist with tracks", async () => {
  
  global.fetch = jest.fn(() =>
    
    Promise.resolve({
      
      json: () => Promise.resolve([
        {type: "song", title: "Wild Hearts Can't Be Broken", artist: "P!nk", year: 2017},
        {type: "podcast", episodeTitle: "Seeking Tanis, Runner Available", episode: 1},

      ]),

    })

  );

  render(<Playlist />);
  
  expect(await screen.findByText(/Wild Hearts Can't Be Broken/)).toBeInTheDocument();

});