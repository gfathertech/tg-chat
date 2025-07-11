export default {
    name: "yt",
    desc: "iLoveYt video downloader",
    category: "downloader",
    execute: async(ctx: any) => {
        var youtubeUrl = ctx.message.text.split(' ')[1];
        if(!youtubeUrl) return ctx.reply("Please provide a YouTube URL.");
        try{
            var init = await ctx.reply(`Scraping download options for ${youtubeUrl}...`);
            var res = await scrapeIloveYt(youtubeUrl.trim());
            
            let replyMessage = `Download options for ${youtubeUrl}:\n\n`;
            if (res && res.length > 0) {
                res.forEach((option: any) => {
                    replyMessage += `Quality: ${option.quality}, Format: ${option.format}, Link: ${option.link}\n`;
                });
            } else {
                replyMessage += "No download options found or an error occurred.";
            }

            await ctx.reply(replyMessage);
            await ctx.telegram.deleteMessage(ctx.chat.id, init.message.message_id );
    }catch(e:any) {
        console.log(e);
        await ctx.reply(`Error: ${e.message || "An unknown error occurred during scraping."}`);
    }
    }
};

