# Amatullah AI
A playful Telegram bot created by Haki 🧠💬

---

## ✨ Features
- AI-powered chat
- Fast response system
- Modular command structure
- Bun runtime support
- Works on VPS, locally, or cloud (Render)

---

## 🚀 Installation & Setup

### 🧶 Install Bun (if not installed):
```bash
curl -fsSL https://bun.sh/install | bash
```
Then restart terminal or source your shell config.

### 📦 Clone the Project
```bash
git clone https://github.com/hakisolos/amatullah.git
cd amatullah
```

### 🔧 Install Dependencies
```bash
bun install
```

### 🔐 Add Bot Token
Create or edit `/config.ts` like this:
```ts
export default {
  BOT_TOKEN: process.env.BOT_TOKEN || "your_token_here"
};
```

Then create a `.env` file:
```env
BOT_TOKEN=your_telegram_bot_token_here
```

> Keep `.env` private — do not commit it.

### 🏁 Start the Bot
```bash
bun start
```

---

## ☁️ Deploy Options

### ✅ Render.com
1. Push this project to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Set **Build Command** to: `bun install`
4. Set **Start Command** to: `bun start`
5. Add your BOT_TOKEN in Render's Environment Variables
6. Deploy 🚀

### ✅ VPS (Ubuntu/Debian)
```bash
sudo apt update && sudo apt install git curl
curl -fsSL https://bun.sh/install | bash

# Clone and setup
git clone https://github.com/hakisolos/amatullah.git
cd amatullah
bun install

# Add your .env
nano .env

# Run
bun start
```

---

## 🤝 Contributing

### 🧸 Pull Request
1. Fork the repo
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m "Add: cool feature"`
5. Push: `git push origin feature-name`
6. Open a Pull Request

### 🐞 Found a Bug?
- Open an [Issue](https://github.com/hakisolos/amatullah/issues)
- Describe what happened
- Add logs or screenshots if needed

---

## 🪪 License
This project is licensed under the [MIT License](./LICENSE)

---

> Made with 💖 by Nikka Tech Inc 
