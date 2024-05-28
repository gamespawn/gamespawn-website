import Orbital from "@/public/assets/projects/Orbital.png";
import pursuit from "@/public/assets/projects/pursuit.png";
import catan from "@/public/assets/projects/catan.png";
import yuurika from "@/public/assets/projects/yuurika.png";
import botanist from "@/public/assets/projects/botanist.png";

export const PersonalProjects = [
  {
    title: "Orbital",
    thumbnail: Orbital,
    team: ["Thomas Li"],
    email: "tli186@ucr.edu",
    platforms: ["PC"],
    description:
      "A game where you shoot enemies (in space) with your orbitals and try not to get hit by your enemies.",
    tags: ["Space", "Shooter"],
    schoolyear: 2019,
    downloadlink: "https://novasagittarii.github.io/w1-h2018/",
  },
  {
    title: "Pursuit of the Truth",
    thumbnail: pursuit,
    team: ["Flora Huang"],
    email: "fhuan048@ucr.edu",
    platforms: ["PC"],
    description:
      "A point-and-click visual novel. In the modern city of London, university student Mia Morgan is just trying to get by. She studies, works, oversleeps, and is about as ordinary as you can get. So how is it that she ended up having to work with one of the best detectives in London to prove her innocence for a crime she never committed? Investigate your surroundings, piece together evidence, and uncover the truth! Demo includes the first chapter. ",
    tags: [
      "Crime",
      "Detective",
      "Female Protagonist",
      "Point & Click",
      "Ren'Py",
    ],
    schoolyear: 2021,
    downloadlink: "https://4kstarri.itch.io/pursuit-of-the-truth",
  },
  {
    title: "Realtime Catan",
    thumbnail: catan,
    team: ["Thomas Li"],
    email: "tli186@ucr.edu",
    platforms: ["PC"],
    description:
      "This is a multiplayer game server implementation of the board game catan, but in realtime. Made with sockets.io, HTML, CSS, and Javascript. Differences from the Board Game: Everyone rolls at the same time, with a cooldown on each player's rolls. Ports and player trading not implemented, but you can trade 4 for 1. Robber is a temporary status that disables a resource node for a set period of time, there can be multiple active robbers at a time.",
    tags: ["Board", "Catan", "Multiplayer"],
    schoolyear: 2023,
    downloadlink: "https://cypress-rtc.glitch.me/",
  },
  {
    title: "The Traveling Botanist",
    thumbnail: botanist,
    team: ["Jessica Wei", "Justin Cheung", "Ariel Nam"],
    email: "jecwei@ucsc.edu",
    platforms: ["PC"],
    description:
      "Rejuvenate barren lands and bring nature back to the world in this satisfying puzzle game! Brought to you by BotaniSlammers.",
    tags: ["Puzzle"],
    schoolyear: 2021,
    downloadlink: "https://jessuka.itch.io/the-traveling-botanist",
  },
  {
    title: "Yuurika",
    thumbnail: yuurika,
    team: ["Thomas Li"],
    email: "tli186@ucr.edu",
    platforms: ["PC"],
    description: "Yuurika Game Engine. Multiplayer team-based space shooter.",
    tags: ["Multiplayer", "Space", "Shooter"],
    schoolyear: 2018,
    downloadlink: "https://yuurika.glitch.me/",
  },
];
export default PersonalProjects;
