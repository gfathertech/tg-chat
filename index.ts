// i used bun + hono (dont get confused)
import { Hono } from "hono";
import { conn } from "./src/client";
import config from "./config";
const app = new Hono()

app.get("/", (c) => {
    return c.text("hello world")
})
conn()
Bun.serve({
    fetch: app.fetch,
    port: config.PORT,
})
console.log("bunn app running")
