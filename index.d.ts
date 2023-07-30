import {Language} from "./types";

declare module "num-words" {
  function numWords(n: number, language?: Language): string;
  export default numWords;
}
