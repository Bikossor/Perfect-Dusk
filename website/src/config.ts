export const APP_NAME = "Perfect Dusk";
export const APP_DESCRIPTION =
  "Beautiful and accessible dark theme for your favorite code editor";
export const AUTHOR_NAME = "Bikossor";
export const AUTHOR_URL = "https://lichten.me";

type CodeEditor = {
  name: string;
  icon?: string;
  addition?: string;
};

export const CODE_EDITORS: ReadonlyArray<CodeEditor> = [
  {
    name: "Visual Studio Code",
  },
  {
    name: "VSCodium",
  },
  {
    name: "Zed",
    addition: "Coming soon",
  },
];

type Color = {
  name: string;
  hex: string;
};

export const COLOR_PALETTE: ReadonlyArray<Color> = [
  {
    name: "Active",
    hex: "#e2004f",
  },
  {
    name: "Border",
    hex: "#444",
  },
  {
    name: "Comments",
    hex: "#777",
  },
  {
    name: "Variables",
    hex: "#FFB580",
  },
  {
    name: "Invalid",
    hex: "#FF5370",
  },
  {
    name: "Operators",
    hex: "#B580FF",
  },
  {
    name: "Tags",
    hex: "#f07178",
  },
  {
    name: "Functions",
    hex: "#AAFF80",
  },
];
