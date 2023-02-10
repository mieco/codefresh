import { HandlerContext } from "$fresh/server.ts";
import foods  from "../../data/foods.json" assert { type: "json" };
// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response(JSON.stringify(foods));
};
