import { EdgeName } from "../graph/edges.ts";

const DISLIKES_THOUGHTS = [
  "{{from}} does not hold {{to}} in high regard.",
  "{{from}} does not care for {{to}}",
  "{{from}} dislikes {{to}}",
  "{{from}} abhors {{to}}",
  "{{from}} could do without {{to}}",
  "{{from}} can't stand {{to}}",
  "{{to}}? {{from}} could really do with out it",
  "{{to}}? I wouldn't bring that up when {{from}} is around",
];
const LIKES_THOUGHTS = [
  "{{from}} likes {{to}}",
  "{{from}} appreciates {{to}}",
  "{{from}} has a real affinity for {{to}}",
  "{{from}} is a big fan of {{to}}",
  "{{from}} is fond of {{to}}",
  "{{from}} really digs {{to}}",
];
const FEARS_THOUGHTS = [
  "{{from}} is terrified of {{to}}",
  "{{from}} is fearful of {{to}}",
  "{{from}} fears {{to}}",
  "{{from}} is frightened of {{to}}",
  "{{to}} really frightens {{from}}",
];
const EATS_THOUGHTS = [
  "{{from}} eats {{to}}",
  "{{from}} loves to eat {{to}}",
  "{{from}} has eaten {{to}} before",
  "{{from}} has eaten {{to}} several times",
  "{{from}} devours {{to}}",
  "{{from}} enjoys {{to}}",
];
const OWNS_THOUGHTS = [
  "{{from}} owns {{to}}",
  "{{from}} possesses {{to}}",
  "{{from}} has in there possession {{to}}",
  "{{from}} keeps {{to}} around",
];
const LIVES_AT_THOUGHTS = [
  "{{from}} inhabits {{to}}",
  "{{from}} lives in {{to}}",
  "{{to}}? That's where {{from}} lives",
];
const WORKS_AT_THOUGHTS = [
  "{{from}} works in {{to}}",
  "{{from}} does their work in {{to}}",
  "{{from}} has a job in {{to}}",
];
const VISITS_THOUGHTS = [
  "{{from}} frequently visits {{to}}",
  "{{from}} has been known to visit {{to}}",
  "{{from}} visits {{to}} often",
  "{{from}} can be seen around {{to}}",
  "{{from}} hangs around {{to}}",
];
const PERFORMS_THOUGHTS = [
  "{{from}} does a lot of {{to}}",
  "{{from}} has been known to partake in {{to}}",
  "{{from}} is a practitioner of {{to}}",
];
const HAPPENS_AT_THOUGHTS = [
  "There's a lot of {{from}} going on at {{to}}",
  "{{to}} is a {{from}} hot spot",
  "If you're looking for {{from}}, you should take a trip to {{to}}",
  "If you're looking for {{from}}, {{to}} is the place to go",
  "{{to}} is the place to find {{from}}",
  "Looking for {{from}}? Head to {{to}}",
];

const BELIEVES_IN_THOUGHTS = [
  "{{from}} believes in {{to}}",
  "{{from}} feels strongly in {{to}}",
  "{{from}} will vouch for {{to}}",
  "{{from}} contends that {{to}} is true",
  "{{from}} is a true believer in {{to}}",
  "{{from}} firmly believes in {{to}}",
];

export const ASSOCIATIVE_THOUGHTS: Record<EdgeName, string[]> = {
  [EdgeName.DISLIKES]: DISLIKES_THOUGHTS,
  [EdgeName.LIKES]: LIKES_THOUGHTS,
  [EdgeName.FEARS]: FEARS_THOUGHTS,
  [EdgeName.EATS]: EATS_THOUGHTS,
  [EdgeName.OWNS]: OWNS_THOUGHTS,
  [EdgeName.LIVES_AT]: LIVES_AT_THOUGHTS,
  [EdgeName.WORKS_AT]: WORKS_AT_THOUGHTS,
  [EdgeName.VISITS]: VISITS_THOUGHTS,
  [EdgeName.PERFORMS]: PERFORMS_THOUGHTS,
  [EdgeName.HAPPENS_AT]: HAPPENS_AT_THOUGHTS,
  [EdgeName.BELIEVES_IN]: BELIEVES_IN_THOUGHTS,
};

export const EXISTENTIAL_THOUGHTS = [
  "It is known that there is {{noun}}.",
  "I know of {{noun}}.",
  "There is {{noun}}.",
  "There is {{noun}} out there.",
  "There is {{noun}} out there somewhere, you know.",
];
