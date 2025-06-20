// i used bun + hono (dont get confused)
import { Hono } from "hono";
import { conn } from "./src/client";
const app = new Hono()

app.get("/", (c) => {
    return c.text("hello world")
})
conn()
Bun.serve({
    fetch: app.fetch,
    port: 3000,
})
console.log("bunn app running")
