import axios from 'axios';
import * as cheerio from 'cheerio';



export default {
    name: "unsplash",
    desc: "unsplash images",
    category: "image download",
    execute: async(ctx: any) => {
    
    var args = ctx.message.text.split(' ')[1]

      if(!args) return ctx.reply("what image do you want")
  
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(args)}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const seen = new Set();
  let imageUrls: string[] = [];
    

  $('img[src^="https://images.unsplash.com"]').each((_, el) => {
    const fullUrl = $(el).attr('src');

    if (fullUrl && fullUrl.includes('photo') && !fullUrl.includes('profile')) {
      const baseUrl = fullUrl.split('?')[0];
      if (!seen.has(baseUrl)) {
        seen.add(baseUrl);
        imageUrls.push(fullUrl);
      }
    }
  });

  const arrayResults = imageUrls.slice(0, 10);
  if (!arrayResults.length) {
    return ctx.reply('No images found.');
  }

  const replyText = arrayResults
    .map((url, i) => `${i + 1}. ${url}`)
    .join('\n');;
  
for (let i = 0; i < arrayResults.length; i++) {

await ctx.replyWithPhoto(
                {
                    url: arrayResults[i]
                },
                {
                    caption: `Image ${i + 1} of ${arrayResults.length}\nGfather`
                }
            )

}
  
}
}