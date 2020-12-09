import {
  OWNERSHIP,
  EATS,
  LIKES,
  DISLIKES,
  FEARS,
  LIVES_AT,
  WORKS_AT,
  VISITS,
  PERFORMS,
  HAPPENS_AT,
  EdgeT,
} from "./edges.ts";

export interface Schema {
  edgeTypes: Set<EdgeT>;
}

export const SIMPLE_SCHEMA: Schema = {
  edgeTypes: new Set([
    OWNERSHIP,
    EATS,
    LIKES,
    DISLIKES,
    FEARS,
    LIVES_AT,
    WORKS_AT,
    VISITS,
    PERFORMS,
    HAPPENS_AT,
  ]),
};
