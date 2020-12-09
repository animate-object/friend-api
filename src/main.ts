import {
  APIGatewayProxyEvent,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import { thinkAboutTheWorld } from "./dialog/thought.ts";
import { generateFriendWorld, boundedWorld } from "./generate.ts";
import { human } from "./random.ts";

export const ok = (body: any, statusCode: number = 200) => ({
  statusCode,
  body: JSON.stringify(body),
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const error = (message: string, statusCode: number = 500) => {
  return ok({ message }, statusCode);
};

export async function getFriend(event: APIGatewayProxyEvent, conext: Context) {
  console.log("parsing event");
  let body: Record<string, any>;
  try {
    body = JSON.parse(event.body || JSON.stringify({}));
  } catch (error) {
    console.warn({ msg: "Error parsing body", body: event.body });
    console.error(error);
    body = {};
  }
  const { worldSize = 20, connections = 30, thoughtCt = 20 } = body;

  try {
    console.log("generating world entities");
    const lonelyWorld = boundedWorld(worldSize);
    console.log("drawing connections between the world");
    const world = generateFriendWorld(lonelyWorld, undefined, connections);
    console.log("thinking about the world");
    const { thoughts } = thinkAboutTheWorld(world, thoughtCt);
    console.log("making a friend");
    const { edges, ...friend } = human();
    console.log(
      `It's a big world. ${friend.name} has ${thoughts.length} thoughts about the world.`
    );
    return ok({
      friend,
      thoughts,
    });
  } catch {
    return error("Unexpected error");
  }
}
