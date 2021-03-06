const FIRST_NAMES = [
  "Frodnik",
  "Belthazar",
  "Tim",
  "Jordan",
  "Kumail",
  "Kumar",
  "Fred",
  "Veronica",
  "Veronique",
  "Morgan",
  "Griselda",
  "Annie",
  "Shelby",
  "Rihannon",
  "Sophie",
  "Finbad",
  "Glesaf",
  "Tonen",
  "Akeno",
  "Hiromi",
  "Kenji",
  "Achilles",
  "Hector",
  "Hermes",
  "Jason",
  "Kwan",
  "Longwei",
  "Altheia",
  "Andromeda",
  "Asia",
  "Caliope",
  "Cassiopeia",
  "Irene",
  "Coral",
  "Amare",
  "Kwame",
  "Dalila",
  "Zane",
  "Keiko",
  "Isabella",
  "Camilla",
  "Valentina",
  "Sook",
  "Zhenzhen",
  "Gena",
  "Gwinzel",
  "Swanda",
  "Torborg",
  "Evian",
  "Zorawar",
];
const LAST_NAMES = [
  "Hortipants",
  "Graham",
  "Walker",
  "Reid",
  "Cole",
  "Berry",
  "Scott",
  "Joyce",
  "Bates",
  "Carlson",
  "Wagner",
  "Mullins",
  "Montgomery",
  "Stanley",
  "Rodgers",
  "Cunningham",
  "Gomez",
  "Williamson",
  "Thornton",
  "Lee",
  "Watson",
  "King",
  "Todd",
  "Adkins",
  "Holt",
  "Haynes",
  "Higgins",
  "Lowe",
  "Phillips",
  "Maxwell",
  "Edwards",
  "Sweeney",
  "Moss",
  "Weaver",
  "Howard",
  "Shelton",
  "Young",
  "Griffin",
  "Ford",
  "Buchanan",
  "Baker",
  "Rogers",
  "Bridges",
  "Christie",
  "Paul",
  "Olson",
  "Jordan",
  "White",
  "Moreno",
  "Ortiz",
  "Rodriguez",
  "Howarth",
  "Parsons",
  "Austin",
  "Garrett",
  "Black",
  "Jackson",
  "Hammond",
  "Norris",
  "Valencia",
  "Lovell",
  "Drew",
  "Lindsay",
  "Jones",
  "Bird",
  "Mccarthy",
  "Fernandez",
  "Santos",
  "Adam",
  "Vincent",
  "Ahmed",
  "Whitehouse",
  "Thompson",
  "Mccoy",
  "Frazier",
  "Cook",
  "Meyer",
  "Leon",
  "Green",
  "Solis",
  "Ball",
  "Laing",
  "Gonzales",
  "Bailey",
  "Carrillo",
  "Blair",
  "Hart",
  "Webster",
  "Gonzalez",
  "Foster",
  "Rose",
  "Harvey",
  "Bauer",
  "Brewer",
  "Glover",
  "Garza",
  "Hill",
  "Morton",
  "Hutchinson",
  "Brooks",
  "Montgomery",
  "Jensen",
  "Rogers",
  "Mccarthy",
  "O'Quinn",
  "Gardner",
  "Booth",
  "Pham",
  "Austin",
  "Jackson",
  "Day",
  "Ayala",
  "Page",
  "Vazquez",
  "Wang",
  "Rice",
  "Wolf",
  "Abbott",
  "Mcguire",
  "Aguilar",
  "Mckinney",
  "Henry",
  "Baker",
  "Ross",
  "Lowe",
  "Cole",
  "Arnold",
  "Pratt",
  "Rowe",
  "Cummings",
  "Frank",
  "Clark",
  "Clayton",
  "Wilson",
  "Hammond",
  "Byrne",
  "Sweeney",
  "Porter",
  "Aguirre",
  "Robles",
  "Beck",
  "Harvey",
  "Alvarez",
  "Medina",
  "Benson",
  "Franklin",
  "Bass",
  "Lloyd",
  "Allen",
  "Hughes",
  "Lyons",
  "Howell",
  "Flores",
  "Harris",
  "Brady",
  "Dominguez",
  "Young",
  "Tate",
  "Rivera",
  "Luna",
  "Rios",
  "Bird",
  "Becker",
  "Grant",
  "Jennings",
  "Bell",
  "Miller",
  "Stevens",
  "Mccoy",
  "English",
  "Williamson",
  "Lynch",
  "Gough",
  "Waters",
  "Newman",
  "Ingram",
  "Vaughn",
  "Williams",
  "Estrada",
  "Edwards",
  "Scott",
  "Griffiths",
  "Mack",
  "Solis",
  "Price",
  "Lambert",
  "Roberts",
  "Munoz",
  "Graham",
  "Garza",
  "Poole",
  "Dunn",
];

const ACTIVITIES = [
  "reading",
  "running",
  "painting",
  "skiing",
  "skating",
  "singing",
  "walking",
  "sculpting",
  "swimming",
  "disc golfing",
  "ruminating",
  "self-reflection",
  "gaming",
  "monologuing",
  "drinking",
  "eating",
  "paragliding",
  "scuba-diving",
  "origami",
  "landscaping",
  "interior design",
  "ritual sacrifice",
  "sleeping",
  "jaywalking",
  "freebasing",
  "potlucking",
  "freebirthing",
  "gaslighting",
  "jayrunning",
  "broadcasting",
  "shepherding",
  "mimicry",
  "parking",
  "stealing",
  "racketeering",
  "electioneering",
  "fishing",
  "denial",
  "murder",
  "patricide",
  "matricide",
  "fratricide",
  "regicide",
  "assassinaton",
  "dating",
  "conscious uncoupling",
  "conscentious objection",
  "bikeshedding",
  "nimbyism",
  "authoritarianism",
  "communism",
  "collectivism",
  "statism",
  "kneading",
  "sourdoughing",
  "blanching",
  "boiling",
  "dry roasting",
  "stewing",
  "deep frying",
  "barbeque-ing",
  "air frying",
  "pressure cooking",
  "questioning",
  "quiet contemplation",
  "debauchery",
];

const DISHES = [
  "beef barley stew",
  "chicken wild rice soup",
  "chicken tikka masala",
  "bahn mi",
  "cheeseburger",
  "steak",
  "spaghetti and meatball",
  "caesar salad",
  "caprese salad",
  "mongolian beef",
  "sushi",
  "pizza",
  "spaghetti carbanara",
  "shrimp fetuccine al fredo",
  "lefsa",
  "anchovies",
  "peanut butter and jelly sandwich",
  "turkey club",
  "mashed potatoes and gravy",
  "green bean casserole",
  "chicken and waffles",
  "breakfast sandwich",
  "tacos al pastor",
  "chicken empanada",
];

const CITIES = [
  "tokyo",
  "london",
  "cairo",
  "lima",
  "paris",
  "beijing",
  "shanghai",
  "capetown",
  "dubai",
  "los angeles",
  "new york",
  "chicago",
  "atlanta",
  "phoenix",
  "wall",
];
const COUNTRIES = [
  "ecuador",
  "ghana",
  "greece",
  "lithuania",
  "taiwan",
  "new zealand",
  "australia",
  "united states",
  "canadia",
  "uruguay",
  "bangladesh",
  "japan",
  "laos",
  "germany",
  "slovenia",
];
const LOCAL_SPOTS = [
  "pub",
  "library",
  "park",
  "city hall",
  "police station",
  "coffee shop",
  "restaurant",
  "music store",
  "bank",
  "swimming hole",
  "apple orchard",
  "red light district",
  "topless bar",
  "gentleman's club",
  "overpass hangout spot",
  "spot down by the river",
  "locker room",
  "parking lot",
  "old town",
  "bad part of town",
  "suburbs",
  "drinking hole",
  "fire department",
  "spot out back",
  "makeout point",
  "gym",
];

const BELIEFS = [
  "fundamental decency of man",
  "power of friendship",
  "importance of good hygiene",
  "importance of working hard and playing harder",
  "value of twerking hard and slaying harder",
  "fundamental similarty of human beings",
  "fundamental difference of human beings",
  "importance finding oneself",
  "potential for a better tomorrow",
  "the inevitability of death",
  "the inevitability of progress",
  "the coming end of the world",
];

const CONSPIRACIES = [
  "knights templar",
  "illuminati",
  "chemtrails",
  "kennedy assassination",
  "new coke",
  "new world order",
  "denver airport",
  "israeli animal spies",
  "area 51",
  "area 52",
  "deep state",
  "moon",
  "9/11",
  "MKUltra",
  "flat earth",
  "paul is dead",
  "bilderberg group",
  "skull and bones",
  "galactic federation",
  "annunaki",
  "reptilian",
];

export default {
  FIRST_NAMES,
  LAST_NAMES,
  ACTIVITIES,
  DISHES,
  CITIES,
  COUNTRIES,
  LOCAL_SPOTS,
  CONSPIRACIES,
  BELIEFS,
};
