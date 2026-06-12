import Redis from "ioredis";
console.log("REDIS_URL =", JSON.stringify(process.env.REDIS_URL));

const redis = new Redis(process.env.REDIS_URL!);

redis
  .on("connect", () => console.log("✅ Connected to Redis"))
  .on("error", (err) => console.error("❌ Redis error:", err));

export default redis;
