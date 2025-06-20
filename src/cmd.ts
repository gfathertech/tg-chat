import fs from "fs";
import path from "path";
import { Telegraf } from "telegraf";

export async function loadCommands(bot: Telegraf<any>) {
  console.log("Initializing commands");

  const commandsPath = path.join(import.meta.dir, "../commands");
  const files = fs.readdirSync(commandsPath);
  let loaded = 0;

  for (const file of files) {
    if (file.endsWith(".ts") || file.endsWith(".js")) {
      const { default: command } = await import(`./commands/${file}`);

      if (command.name && typeof command.execute === "function") {
        bot.command(command.name, command.execute);
        loaded++;
      }
    }
  }

  console.log(`✅ Successfully loaded ${loaded} command${loaded !== 1 ? "s" : ""} `);
}
