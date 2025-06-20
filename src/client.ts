import { Telegraf } from "telegraf";
import config from '../config'
import { loadCommands } from "./cmd";
import { ama } from "./amatullah";
const bot = new Telegraf(config.BOT_TOKEN)

export async function conn() {
    const bot = new Telegraf(config.BOT_TOKEN)
    await loadCommands(bot)
    bot.start((ctx) => ctx.reply(`Amatullah AI Running`))


    bot.on('message', async(ctx) => {
        const msg = ctx.message
        if('text' in msg && msg.text && !msg.text.startsWith("/")) {
            const q = msg.text;
            const res = await ama(q, ctx.from?.id)
            console.log(ctx.from?.id)
            await ctx.reply(res)
        }
    })


    bot.launch();
    console.log(`Amatullah running`)
}