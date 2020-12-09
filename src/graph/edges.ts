import { Vertex, VertexT } from "./vertex.ts";

export enum EdgeName {
  OWNS = "OWNS",
  EATS = "EATS",
  LIKES = "LIKES",
  DISLIKES = "DISLIKES",
  FEARS = "FEARS",
  LIVES_AT = "LIVES_AT",
  WORKS_AT = "WORKS_AT",
  VISITS = "VISITS",
  PERFORMS = "PERFORMS",
  HAPPENS_AT = "HAPPENS_AT",
  BELIEVES_IN = "BELIEVES_IN",
}

export interface EdgeT {
  name: EdgeName;
  canConnect: (v1: Vertex<any>, v2: Vertex<any>) => boolean;
}

export interface Edge {
  t: EdgeT;
  to: Vertex<any>;
}

/**
 * Rule defs
 */

export type CatRule = (from: VertexT, to: VertexT) => boolean;
export type PropRule = (from: Vertex<any>, to: Vertex<any>) => boolean;

// category rules
const oneOf = (...types: VertexT[]) => (t: VertexT) => new Set(types).has(t);
const anyBeing = (from: VertexT) => oneOf(VertexT.human, VertexT.animal)(from);
const anyBeingTo = (t: VertexT) => (from: VertexT, to: VertexT) =>
  anyBeing(from) && t === to;
const anyBeingToLocation = anyBeingTo(VertexT.location);
const anyBeingToActivity = anyBeingTo(VertexT.activity);

// property rules
const noDuplicates = (e: EdgeName): PropRule => (
  v1: Vertex<any>,
  v2: Vertex<any>
): boolean => {
  // true if no duplicates are found
  const existingEdgesOfType: Edge[] = Array.from(v1.edges).filter(
    (edge: Edge) => edge.t.name === e
  );
  if (existingEdgesOfType.length < 1) {
    return true;
  } else {
    const dupe = existingEdgesOfType.find((edge) => edge.to.id === v2.id);

    return !dupe;
  }
};

const edgeT = (name: EdgeName, catRule: CatRule = () => true): EdgeT => ({
  name,
  canConnect: (v1, v2) => {
    if (!catRule(v1.t, v2.t)) {
      return false;
    } else {
      return [noDuplicates(name)].reduce(
        (allPrevTrue: boolean, next: PropRule): boolean =>
          allPrevTrue ? next(v1, v2) : false,
        true
      );
    }
  },
});

const OWNS = edgeT(
  EdgeName.OWNS,
  (from, to) =>
    from === VertexT.human &&
    !oneOf(VertexT.activity, VertexT.idea, VertexT.location, VertexT.human)(to)
);

const EATS = edgeT(
  EdgeName.EATS,
  (from, to) =>
    oneOf(VertexT.human, VertexT.animal)(from) && to === VertexT.food
);

const LIKES = edgeT(EdgeName.LIKES, anyBeing);
const DISLIKES = edgeT(EdgeName.DISLIKES, anyBeing);
const FEARS = edgeT(EdgeName.FEARS, anyBeing);

const LIVES_AT = edgeT(EdgeName.LIVES_AT, anyBeingToLocation);
const WORKS_AT = edgeT(
  EdgeName.WORKS_AT,
  (from, to) => from === VertexT.human && to === VertexT.location
);
const VISITS = edgeT(EdgeName.VISITS, anyBeingToLocation);

const PERFORMS = edgeT(EdgeName.PERFORMS, anyBeingToActivity);

const HAPPENS_AT = edgeT(
  EdgeName.HAPPENS_AT,
  (from, to) => from === VertexT.activity && to === VertexT.location
);

const BELIEVES_IN = edgeT(
  EdgeName.BELIEVES_IN,
  (from, to) => from === VertexT.human && to === VertexT.idea
);

const all = [
  OWNS,
  EATS,
  LIKES,
  DISLIKES,
  FEARS,
  LIVES_AT,
  WORKS_AT,
  VISITS,
  PERFORMS,
  HAPPENS_AT,
  BELIEVES_IN,
];

export default {
  OWNS,
  EATS,
  LIKES,
  DISLIKES,
  FEARS,
  LIVES_AT,
  WORKS_AT,
  VISITS,
  PERFORMS,
  HAPPENS_AT,
  BELIEVES_IN,
  all,
};
