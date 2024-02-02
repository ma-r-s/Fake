import { w as writable } from "./index.js";
const canvasImageStore = writable("");
const playersStore = writable(5);
const fakeArtistStore = writable(0);
const mostVotedStore = writable(0);
const colors = writable([
  "#FF0000",
  // red
  "#2222FF",
  // blue
  "#55EE66",
  // green
  "#FF9900",
  // orange
  "#A000A0",
  // purple
  "#00FFFF",
  // light blue
  "#008000",
  // dark green
  "#FF00FF",
  // pink
  "#FFEE33",
  // yellow
  "#A52A2A",
  // brown
  "#FF4500",
  // orangered
  "#1E90FF",
  // dodgerblue
  "#32CD32",
  // limegreen
  "#FF6347",
  // tomato
  "#8A2BE2",
  // blueviolet
  "#00CED1",
  // darkturquoise
  "#7CFC00",
  // lawngreen
  "#FF69B4",
  // hotpink
  "#FFFF00",
  // yellow
  "#8B4513"
  // saddlebrown
]);
export {
  canvasImageStore as a,
  colors as c,
  fakeArtistStore as f,
  mostVotedStore as m,
  playersStore as p
};
