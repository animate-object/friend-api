import { thinkAboutTheWorld } from "./dialog/thought.ts";
import { generateFriendWorld, boundedWorld, World } from "./generate.ts";
import { KnownObjects, LocVariant, VertexT } from "./graph/vertex.ts";
import { En } from "./util/index.ts";

const quickDescribe = (o: KnownObjects): string => {
  switch (o.t) {
    case VertexT.human:
      return `${En.A(o.gender)} ${o.gender} human named ${o.name}`;
    case VertexT.animal:
      return `${En.A(o.gender)} ${o.gender} ${o.species}`;
    case VertexT.food:
      return `${o.flavors[0]} ${o.name}`;
    case VertexT.location:
      if (o.variant === LocVariant.city) {
        return `The city of ${o.name}`;
      } else {
        return o.name;
      }
    case VertexT.activity:
      return o.name;
    case VertexT.idea:
      return `${o.variant} regarding ${o.name}`;
  }
};

const describeWorld = (world: World): string => {
  let description = `# World of size ${world.length}`;
  world.forEach((vert) => {
    const { edges } = vert;
    description += "\n\n### " + quickDescribe(vert);
    description += `\n${En.A(vert.t)} ${vert.t.toLowerCase()}`;

    if (edges.size > 0) {
      edges.forEach((e) => {
        const { edges, ...to } = e.to;
        description += `\n* ${e.t.name.toLowerCase()} ===> ${quickDescribe(
          e.to as KnownObjects
        )}`;
      });
    } else {
    }
  });
  return description;
};

const lonelyWorld = boundedWorld(20);
const world = generateFriendWorld(lonelyWorld, undefined, 30);
const desc = describeWorld(world);

const knowledge = thinkAboutTheWorld(world, 15);

const thoughtsSummary =
  "\n\n## Thoughts Summary:" +
  knowledge.thoughts.reduce(
    (sum, nextThought) => `${sum}\n${nextThought.text}`,
    ""
  );

Deno.writeTextFile("world.md", desc + thoughtsSummary);
