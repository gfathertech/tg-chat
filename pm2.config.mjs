export default {
  apps: [
    {
      name: "amatullah",
      script: "/bin/bash",               // Idk if I should leave this
      args: ["bun index.ts"],      // added this in args
      watch: false
    }
  ]
}
