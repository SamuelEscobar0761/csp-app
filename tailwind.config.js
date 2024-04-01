import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005A14', // Define tu color primario aquí
          // Puedes definir tonos adicionales si es necesario
          // '50': '#f5fafa',
          // '100': '#dbebe3',
          // '200': '#b2d1c0',
          // '300': '#89b79d',
          // '400': '#6e9e81',
          // '500': '#548666',
          // '600': '#447254',
          // '700': '#345343',
          // '800': '#244031',
          // '900': '#13201f',
        },
      },
    },
  },
  plugins: [],
});
