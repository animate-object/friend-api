import { EdgeName } from "../graph/edges.ts";
import { Vertex } from "../graph/vertex.ts";

export interface Existential {
  kind: "existential";
  entity: Vertex;
}

export const existential = (entity: Vertex): Existential => ({
  kind: "existential",
  entity,
});

type Connection = {
  from: Vertex;
  to: Vertex;
  connection: EdgeName;
};

export interface Associative {
  kind: "associative";
  connection: Connection;
}

export const associative = (
  from: Vertex,
  to: Vertex,
  connection: EdgeName
): Associative => ({
  kind: "associative",
  connection: {
    from,
    to,
    connection,
  },
});

export type Fact = Existential | Associative;
