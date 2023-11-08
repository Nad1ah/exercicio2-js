const firtName = prompt("Primeiro nome") ?? "";
const lastName = prompt("Ultimo Nome") ?? "";

function formatWord(word: string) {
  const firtsLetterBig = word.charAt(0).toLocaleUpperCase();
  const restOfTheWord = word.slice(1).toLocaleLowerCase();

  return `${firtsLetterBig}${restOfTheWord}`;
}

const finalWord = `${formatWord(firtName)} ${formatWord(lastName)}`;
alert(finalWord);
