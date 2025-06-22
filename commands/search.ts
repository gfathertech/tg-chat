import { flux } from "../src/utils";

export default {
    name: "flux",
    desc: "flu ai",
    category: "search",
    execute: async(ctx: any) => {
        var match = ctx.message.text.split(' ')[1]
        if(!match) return ctx.reply("what image am i generating")
        try{
            var res = await flux(match.trim())
            var init = await ctx.reply(`generting ${match}...`)
            await ctx.replyWithPhoto(
                {
                    url: res
                },
                {
                    caption: `image generated for ${match}`
                }
            )
            await ctx.telegram.deleteMessage(ctx.chat.id, init.message.message_id )
    }catch(e:any) {
        console.log(e)
    }
    }
}