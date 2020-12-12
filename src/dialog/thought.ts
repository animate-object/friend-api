/**
 * Thoughts:
 *
 * A thought is a single unit of information shared by a friend.
 *
 * A thought has an implied thinker (the friend), from whose perspective it
 * observes or describes, etc
 *
 *
 * Questions:
 * For the purposes of friend simulator, a thought also comprises one or more
 * reading comprehension questions. For instance the simple thought:
 *
 * I like potatoes
 *
 * Could implies at least one question:
 *
 * Do I like potatoes?
 *
 * Which in turn, implies an answer:
 *
 * Yes
 */

import { World } from "../generate.ts";
import edges, { Edge } from "../graph/edges.ts";
import { KnownObjects, Vertex } from "../graph/vertex.ts";
import { Arrays, En, Strings } from "../util/index.ts";
import { associative, existential, Fact } from "./fact.ts";
import { nominalize } from "./nominalize.ts";
import { ASSOCIATIVE_THOUGHTS, EXISTENTIAL_THOUGHTS } from "./thoughts.data.ts";

export interface Question {
  text: string;
  answer: {
    correct: string[];
    incorrect: string[];
  };
}

export interface Thought {
  text: string;
}

interface Nominal {
  def: string;
  a: string;
  singular: string;
}

export const existentialThought = (vertex: Vertex): [Thought, Fact[]] => {
  const template = Arrays.sample(EXISTENTIAL_THOUGHTS);
  const text = Strings.fillIn(template, {
    noun: Strings.hilite(nominalize(vertex as KnownObjects)),
  });

  return [{ text: En.capitalizeWithTags(text) }, [existential(vertex)]];
};

export const simpleAssociativeThought = (
  from: Vertex,
  to: Vertex,
  edge: Edge
): [Thought, Fact[]] => {
  const template = Arrays.sample(ASSOCIATIVE_THOUGHTS[edge.t.name]);
  const text = Strings.fillIn(template, {
    from: Strings.hilite(nominalize(from as KnownObjects, true)),
    to: Strings.hilite(nominalize(to as KnownObjects, true)),
  });

  return [
    { text: En.capitalizeWithTags(text) },
    [existential(from), existential(to), associative(from, to, edge.t.name)],
  ];
};

type ExpositionAcc = {
  facts: Fact[];
  runningThought: string;
  identifiedV: boolean;
};
export const expound = (vertex: Vertex): [Thought, Fact[]] => {
  const generateN = Math.min(vertex.edges.size, 3);

  let [identifiedV, startingThought]: [boolean, string] = [false, ""];
  if (Math.random() > 0.8) {
    const template = Arrays.sample(EXISTENTIAL_THOUGHTS);
    const text = Strings.fillIn(template, {
      noun: Strings.hilite(nominalize(vertex as KnownObjects)),
    });
    [identifiedV, startingThought] = [true, text];
  }

  const { facts, runningThought }: ExpositionAcc = Array.from(vertex.edges)
    .slice(0, generateN)
    .reduce(
      (
        { facts, runningThought, identifiedV }: ExpositionAcc,
        e: Edge
      ): ExpositionAcc => {
        const template = Arrays.sample(ASSOCIATIVE_THOUGHTS[e.t.name]);
        const next = Strings.fillIn(template, {
          from: !identifiedV
            ? Strings.hilite(nominalize(vertex as KnownObjects, true))
            : En.pronoun(vertex),
          to: Strings.hilite(nominalize(e.to as KnownObjects, true)),
        });

        // basically want to do this on the first loop if it hasn't been done.
        const wasIdentified = true;

        return {
          facts: [
            ...facts,
            existential(e.to),
            associative(vertex, e.to, e.t.name),
          ],
          runningThought:
            runningThought === ""
              ? En.capitalizeWithTags(next)
              : runningThought + ". " + En.capitalizeWithTags(next),
          identifiedV: wasIdentified,
        };
      },
      {
        facts: [existential(vertex)],
        runningThought: startingThought,
        identifiedV,
      }
    );

  return [{ text: runningThought }, facts];
};

export const randomExistentialThought = (world: World): [Thought, Fact[]] => {
  return existentialThought(Arrays.sample(world));
};

export const randomSimpleAssociativeThought = (
  world: World
): [Thought, Fact[]] => {
  const vertWithEdge = Arrays.shuffled(world).find((v) => v.edges.size > 0)!;
  const edge = Arrays.sample(Array.from(vertWithEdge.edges));
  return simpleAssociativeThought(vertWithEdge, edge.to, edge);
};

export const randomExpositionalThought = (world: World): [Thought, Fact[]] => {
  const candidateVertex = Arrays.shuffled(world).find((v) => v.edges.size > 1)!;
  return expound(candidateVertex);
};

type ThoughtGenerator = (w: World) => [Thought, Fact[]];

export const THOUGHT_GENERATORS: ThoughtGenerator[] = [
  randomExistentialThought,
  randomSimpleAssociativeThought,
  randomExpositionalThought,
];

interface Knowledge {
  thoughts: Thought[];
  facts: Fact[];
  questions: Question[];
}

type DataAccumulator = Pick<Knowledge, "thoughts" | "facts">;

export const thinkAboutTheWorld = (
  world: World,
  desiredThoughts: number = 50
): Knowledge => {
  const { thoughts, facts } = Arrays.times(desiredThoughts).reduce(
    (acc: DataAccumulator, _) => {
      const [newThought, newFacts] = Arrays.weightedSample([
        [randomSimpleAssociativeThought, 6],
        [randomExpositionalThought, 2],
        [randomExistentialThought, 1],
      ])(world);
      return {
        thoughts: [...acc.thoughts, newThought],
        facts: [...acc.facts, ...newFacts],
      };
    },
    {
      thoughts: [],
      facts: [],
    }
  );

  const questions: Question[] = [];

  return {
    thoughts,
    facts,
    questions,
  };
};
