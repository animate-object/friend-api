import { Edge } from "./edges.ts";

let nextGlobalId = 1;

const getGlobalId = () => {
  const id = nextGlobalId;
  nextGlobalId += 1;
  return id;
};

export enum VertexT {
  human = "HUMAN",
  animal = "ANIMAL",
  food = "FOOD",
  activity = "ACTIVITY",
  location = "LOCATION",
  idea = "IDEA",
}

export interface Vertex<T extends VertexT = any> {
  t: T;
  id: number;
  edges: Set<Edge>;
}

export const v = <T extends VertexT>(
  t: T,
  edges: Set<Edge> = new Set()
): Vertex<T> => ({
  t,
  id: getGlobalId(),
  edges,
});

export type Gender = "male" | "female" | "non-binary";

export interface Human extends Vertex<VertexT.human> {
  t: VertexT.human;
  gender: Gender;
  name: string;
}

export enum Species {
  cat = "cat",
  dog = "dog",
  alligator = "alligator",
  bald_eagle = "bald eagle",
  panther = "panther",
  polar_bear = "polar bear",
  frog = "frog",
  shark = "shark",
  amur_leopard = "Amur Leopard",
  black_rhino = "Black Rhino",
  bornean_orangutan = "Bornean Orangutan",
  cross_river_gorilla = "Cross River Gorilla",
  eastern_lowland_gorilla = "Eastern Lowland Gorilla",
  hawksbill_turtle = "Hawksbill Turtle",
  javan_rhino = "Javan Rhino",
  orangutan = "Orangutan",
  saola = "Saola",
  sumatran_elephant = "Sumatran Elephant",
  sumatran_orangutan = "Sumatran Orangutan",
  sumatran_rhino = "Sumatran Rhino",
  sunda_tiger = "Sunda Tiger",
  vaquita = "Vaquita",
  western_lowland_gorilla = "Western Lowland Gorilla",
  yangtze_finless_porpoise = "Yangtze Finless Porpoise",
  african_wild_dog = "African Wild Dog",
  asian_elephant = "Asian Elephant",
  black_footed_ferret = "Black-footed Ferret",
  blue_whale = "Blue Whale",
  bluefin_tuna = "Bluefin Tuna",
  bonobo = "Bonobo",
  bornean_elephant = "Bornean Elephant",
  chimpanzee = "Chimpanzee",
  fin_whale = "Fin Whale",
  galapagos_penguin = "Galapagos Penguin",
  ganges_river_dolphin = "Ganges River Dolphin",
  green_turtle = "Green Turtle",
  hectors_Dolphin = "Hector's Dolphin",
  humphead_wrasse = "Humphead Wrasse",
  indian_elephant = "Indian Elephant",
  indus_river_dolphin = "Indus River Dolphin",
  irrawaddy_dolphin = "Irrawaddy Dolphin",
  mountain_gorilla = "Mountain Gorilla",
  north_atlantic_right_qhale = "North Atlantic Right Whale",
  red_panda = "Red Panda",
  sea_lions = "Sea Lion",
  sea_turtle = "Sea Turtle",
  sei_whale = "Sei Whale",
  sri_lankan_elephant = "Sri Lankan Elephant",
  tiger = "Tiger",
  whale = "Whale",
  whale_Shark = "Whale Shark",
  african_elephant = "African Elephant",
  bigeye_tuna = "Bigeye Tuna",
  black_spider_monkey = "Black Spider Monkey",
  dugong = "Dugong",
  forest_elephant = "Forest Elephant",
  giant_panda = "Giant Panda",
  giant_tortoise = "Giant Tortoise",
}

export interface Animal extends Vertex<VertexT.animal> {
  t: VertexT.animal;
  gender: Gender;
  species: Species;
}

export enum Flavor {
  savory = "savory",
  spicy = "spicy",
  bitter = "bitter",
  sweet = "sweet",
  salty = "salty",
  sour = "sour",
}

export interface Food extends Vertex<VertexT.food> {
  t: VertexT.food;
  flavors: Flavor[];
  name: string;
}

export interface Activity extends Vertex<VertexT.activity> {
  t: VertexT.activity;
  name: string;
}

export enum LocVariant {
  local = "local",
  city = "city",
  country = "country",
}

export interface Location extends Vertex<VertexT.location> {
  t: VertexT.location;
  name: string;
  variant: LocVariant;
}

export enum IdeaVariant {
  conspiracy = "conspiracy",
  belief = "belief",
}

export interface Idea extends Vertex<VertexT.idea> {
  t: VertexT.idea;
  name: string;
  variant: IdeaVariant;
}

export type KnownObjects = Human | Animal | Food | Activity | Location | Idea;
