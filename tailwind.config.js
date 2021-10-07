module.exports = {
  purge: ["./src/**/*.{js,jsx,tx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        32.4: "32.4%",
        36: "36%",
        49: "49%",
        150: "150%"
      }
    }
  },
  plugins: []
};
