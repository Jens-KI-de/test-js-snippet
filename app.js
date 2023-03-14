import { accumulate } from "./snippets/accumulate.js";

let sums = accumulate(1, 2, 3, 4);
const textContentOutput = document.getElementById("accumulate-test");
textContentOutput.value = sums.innerText;
