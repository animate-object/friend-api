import {
  Human,
  VertexT,
  Gender,
  v,
  Animal,
  Species,
  Activity,
  Location,
  Food,
  Flavor,
  LocVariant,
  Vertex,
  KnownObjects,
  IdeaVariant,
  Idea,
} from "./graph/vertex.ts";
import Data from "./data.ts";
import { Arrays } from "./util/index.ts";

const randName = () => {
  const first = Arrays.sample(Data.FIRST_NAMES) || "marie";
  const last = Arrays.sample(Data.LAST_NAMES) || "condominium";
  return `${first} ${last}`; // kind of limited to western style names...
};
const randomGender = (): Gender => {
  const r = Math.random() * 100;
  if (r < 2) {
    return "non-binary";
  } else if (r < 51) {
    return "female";
  } else {
    return "male";
  }
};

const randSpecies = (): Species => {
  const randKey: string = Arrays.sample(Object.keys(Species)) || "bald_eagle";
  return (Species as Record<string, string>)[randKey] as Species;
};
const randActivity = (): string =>
  Arrays.sample(Data.ACTIVITIES) || "ritual sacrifice";

export const human = (): Human => ({
  ...v(VertexT.human),
  gender: randomGender(),
  name: randName(),
});

const animal = (): Animal => ({
  ...v(VertexT.animal),
  gender: randomGender(),
  species: randSpecies(),
});

const randDish = (): string => Arrays.sample(Data.DISHES) || "pasta";
const randFlavor = (): Flavor => Arrays.sample(Object.keys(Flavor)) as Flavor;
const food = (): Food => ({
  ...v(VertexT.food),
  name: randDish(),
  flavors: [randFlavor()],
});

const activity = (): Activity => ({
  ...v(VertexT.activity),
  name: randActivity(),
});

const randLocation = (): { name: string; variant: LocVariant } => {
  const r = Math.floor(Math.random() * 3);
  if (r < 1) {
    return {
      name: Arrays.sample(Data.CITIES),
      variant: LocVariant.city,
    };
  } else if (r < 2) {
    return {
      name: Arrays.sample(Data.COUNTRIES),
      variant: LocVariant.country,
    };
  } else {
    return {
      name: Arrays.sample(Data.LOCAL_SPOTS),
      variant: LocVariant.local,
    };
  }
};

const randomBelief = (): { name: string; variant: IdeaVariant } => {
  const variant = Arrays.weightedSample([
    [IdeaVariant.belief, 1],
    [IdeaVariant.conspiracy, 1],
  ]);
  if (variant === IdeaVariant.conspiracy) {
    return { variant, name: Arrays.sample(Data.CONSPIRACIES) };
  } else {
    return { variant, name: Arrays.sample(Data.BELIEFS) };
  }
};

const idea = (): Idea => ({
  ...v(VertexT.idea),
  ...randomBelief(),
});

const location = (): Location => ({
  ...v(VertexT.location),
  ...randLocation(),
});

const generators: Record<string, () => KnownObjects> = {
  human,
  animal,
  food,
  activity,
  location,
  idea,
};

export default {
  Generators: generators,
};
