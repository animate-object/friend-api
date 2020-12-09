import { Human, KnownObjects } from "./graph/vertex.ts";
import Random, { human } from "./random.ts";
import { Arrays } from "./util/index.ts";
import Edges, { EdgeT } from "./graph/edges.ts";

export type World = KnownObjects[];

export const boundedWorld = (entityCount: number = 10): World => {
  const keys = Object.keys(Random.Generators);

  return new Array(entityCount).fill(undefined).map(() => {
    const key = Arrays.sample(keys);
    return Random.Generators[key]();
  });
};

const tryToDrawConnection = (world: World): boolean => {
  const [v1, v2, ..._] = Arrays.shuffled(world);

  const validEdge: EdgeT | undefined = Arrays.shuffled(Edges.all).reduce(
    (acc: EdgeT | undefined, e: EdgeT) =>
      acc ? acc : e.canConnect(v1, v2) ? e : undefined,
    undefined
  );

  if (validEdge) {
    v1.edges.add({ t: validEdge, to: v2 });
    return true;
  } else {
    return false;
  }
};

const MAX_TRIES = 10000;

export const generateFriendWorld = (
  world: World,
  friend: Human = human(),
  toDraw: number = 50
): World => {
  let ct = 0;
  while (toDraw > ct || ct > MAX_TRIES) {
    if (tryToDrawConnection(world)) {
      ct += 1;
    }
  }
  return world;
};
