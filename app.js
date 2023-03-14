import { accumulate } from "./snippets/accumulate.js";

let sums = accumulate(1, 2, 3, 4);
document.getElementById("accumulate-test").innerHTML = "Ergebnis von accumulate: " + sums;
