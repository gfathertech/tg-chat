export default {
  apps: [
    {
      name: "amatullah",
      script: "bun",               // 🧠 set this to the actual binary
      args: ["bun index.ts"],          // 💥 pass your file here
      watch: false
    }
  ]
}
