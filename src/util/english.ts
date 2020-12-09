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

export default {
  a: (n: string) => indefinite(n, false),
  A: (n: string) => indefinite(n, true),
};
