import { Animal, Human, Vertex, VertexT } from "../graph/vertex.ts";

const startsWithVowelSound = (noun: string): boolean => {
  // naive, needs to handle silent h's, etc
  const first = noun[0];
  if (!first) {
    return false;
  } else {
    return new Set("aeiou").has(first);
  }
};
const indefinite = (
  noun: string,
  capitalize = false
): "a" | "an" | "A" | "An" => {
  if (startsWithVowelSound(noun.toLowerCase())) {
    return capitalize ? "An" : "an";
  } else {
    return capitalize ? "A" : "a";
  }
};

type Genderific = Human | Animal;

const pronoun = (vertex: Vertex): string => {
  if ((vertex as Genderific).gender !== undefined) {
    const { gender } = vertex as Genderific;
    return gender === "female" ? "she" : gender === "male" ? "he" : "they";
  } else {
    return "it";
  }
};

const capitalize = (s: string): string => {
  return s[0].toUpperCase() + s.slice(1);
};

const capitalizeWithTags = (s: string): string => {
  // hacky
  return s[0] === "{" ? s[0] + s[1].toUpperCase() + s.slice(2) : capitalize(s);
};

export default {
  a: (n: string) => indefinite(n, false),
  A: (n: string) => indefinite(n, true),
  pronoun,
  capitalize,
  capitalizeWithTags,
};
