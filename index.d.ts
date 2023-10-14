import {Language} from "./types";

declare module "num-words" {
  function numWords(n: number, language?: Language, decimal?: boolean): string;
  export default numWords;
}
