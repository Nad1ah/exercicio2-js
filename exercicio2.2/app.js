var _a, _b;
var firtName = (_a = prompt("Primeiro nome")) !== null && _a !== void 0 ? _a : "";
var lastName = (_b = prompt("Ultimo Nome")) !== null && _b !== void 0 ? _b : "";
function formatWord(word) {
    var firtsLetterBig = word.charAt(0).toLocaleUpperCase();
    var restOfTheWord = word.slice(1).toLocaleLowerCase();
    return "".concat(firtsLetterBig).concat(restOfTheWord);
}
var finalWord = "".concat(formatWord(firtName), " ").concat(formatWord(lastName));
alert(finalWord);
