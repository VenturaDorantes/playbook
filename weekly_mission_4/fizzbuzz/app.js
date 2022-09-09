
// Clases que se utilizaran
const Reader = require("./lib/utils/Reader");

const fs = require("fs");

// Part 1: Leer archivo JSON =================
const explorers = Reader.readJsonFile("explorers.json");

// const rawdata = fs.readFileSync("explorers.json");
// const explorers = JSON.parse(rawdata);

// Part 2: Obtiene la cantidad de nombres de exploradores en el nodo ===============
const explorersInNode = explorers.filtrer((explorer) => explorer.mission == "node");
// console.log(explorersInNode.length);

// Part 3: Obtienen los nombres de usuario del explorardor en Node =================
const explorersInNodeToGetUsernames = explorers.filtrer((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
// console.log(usernamesInNode)

