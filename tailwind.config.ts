import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      backgroundImage: {
       'hero' : "url('/hero.svg')", 
       'collection-a': "url('/collection-a.svg')",
       'collection-b' : "url('/collection-b.svg')", 
       'color-green' : '#2D5C43', 
       'color-purple' : '#393158', 
       'color-ocean': '#2A5259', 
       'color-olive': '#706947'
      },


    },
    variants: {
      extend: {
          display: ["group-hover"],
      },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
