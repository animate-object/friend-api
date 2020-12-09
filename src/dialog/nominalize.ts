import {
  IdeaVariant,
  KnownObjects,
  LocVariant,
  Vertex,
  VertexT,
} from "../graph/vertex.ts";
import { Arrays, En } from "../util/index.ts";

export const nominalize = (vertex: KnownObjects, def = false): string => {
  switch (vertex.t) {
    case VertexT.activity:
      return vertex.name;
    case VertexT.animal:
      return `${def ? "the" : En.a(vertex.species)} ${vertex.species}`;
    case VertexT.human:
      if (Math.random() > 0.8) {
        return `${def ? "the" : "a"} human ${Arrays.weightedSample([
          ["named", 3],
          ["called", 3],
          ["known as", 1],
        ])} ${vertex.name}`;
      } else {
        return vertex.name;
      }
    case VertexT.food:
      return vertex.flavors.join(" ") + " " + vertex.name;
    case VertexT.location:
      if (Math.random() > 0.8 || vertex.variant === LocVariant.local) {
        return (
          Arrays.weightedSample([
            ["a place called ", 1],
            ["", 4],
          ]) +
          (vertex.variant === LocVariant.local ? "the " : "") +
          vertex.name
        );
      } else {
        return vertex.name;
      }
    case VertexT.idea:
      if (vertex.variant === IdeaVariant.conspiracy) {
        return Arrays.weightedSample([
          [`the ${vertex.name} conspiracy`, 2],
          [`the conspiracy about ${vertex.name}`, 1],
        ]);
      } else {
        return `the ${vertex.name}`;
      }
  }
};
