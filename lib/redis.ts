import { connect } from "https://deno.land/x/redis@v0.32.1/mod.ts";
import { config } from "dotenv/mod.ts";

config({ safe: true, export: true, allowEmptyValues: true });

export const redis = await connect({
  hostname: Deno.env.get("REDIS_HOSTNAME") || "",
  port: Number(Deno.env.get("REDIS_PORT")) || 6379,
  username: Deno.env.get("REDIS_USERNAME") || "",
  password: Deno.env.get("REDIS_PASSWORD") || "",
  tls: true,
});
