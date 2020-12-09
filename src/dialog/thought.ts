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
import { Edge } from "../graph/edges.ts";
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
  const thought = {
    text: Strings.fillIn(template, {
      noun: Strings.hilite(nominalize(vertex as KnownObjects)),
    }),
  };
  return [thought, [existential(vertex)]];
};

export const simpleAssociativeThought = (
  from: Vertex,
  to: Vertex,
  edge: Edge
): [Thought, Fact[]] => {
  const template = Arrays.sample(ASSOCIATIVE_THOUGHTS[edge.t.name]);
  const thought = {
    text: Strings.fillIn(template, {
      from: Strings.hilite(nominalize(from as KnownObjects, true)),
      to: Strings.hilite(nominalize(to as KnownObjects, true)),
    }),
  };
  return [
    thought,
    [existential(from), existential(to), associative(from, to, edge.t.name)],
  ];
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

type ThoughtGenerator = (w: World) => [Thought, Fact[]];

export const THOUGHT_GENERATORS: ThoughtGenerator[] = [
  randomExistentialThought,
  randomSimpleAssociativeThought,
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
        [randomSimpleAssociativeThought, 5],
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

  // TODO generate questions based on the accumulated facts
  const questions: Question[] = [];

  return {
    thoughts,
    facts,
    questions,
  };
};
