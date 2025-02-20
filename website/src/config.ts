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
