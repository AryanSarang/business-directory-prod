
const flowbite = require("flowbite-react/tailwind");
const flowbiteReact = require('flowbite-react/tailwind');

export default {


  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbiteReact.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), flowbiteReact.plugin()]
}