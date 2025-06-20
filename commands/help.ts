export default {
    name: "ping",
    desc: "show ping",
    category: "info",
    execute: async (ctx: any) => {
      const start = Date.now();
      const sent = await ctx.reply("Checking speed...");
      const speed = Date.now() - start;
  
      await ctx.telegram.editMessageText(
        ctx.chat.id,
        sent.message_id,
        undefined,
        ` Pong! ${speed}ms 💖`
      );
    },
  };
  
