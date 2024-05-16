import { RateLimiter } from "limiter";

export const emailLimiter = new RateLimiter({
  tokensPerInterval: 30,
  interval: "min",
  fireImmediately: true,
});
