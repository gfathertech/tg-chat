import { Telegraf } from "telegraf";
import config from '../config'
import { loadCommands } from "./cmd";
const bot = new Telegraf(config.BOT_TOKEN)

export async function conn() {
    const bot = new Telegraf(config.BOT_TOKEN)
    await loadCommands(bot)
    bot.start((ctx) => ctx.reply(`Amatullah AI Running`))
    bot.launch();
    console.log(`Amatullah running`)
}