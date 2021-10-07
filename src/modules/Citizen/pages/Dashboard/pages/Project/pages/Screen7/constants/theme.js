const width = window.innerWidth;

let scale = width / 1440;
scale = scale.toFixed(2);

export const SIZES = {
  //app dimensions
  width,
  scale
};

const appTheme = { SIZES };

export default appTheme;
