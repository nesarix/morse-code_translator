import * as logic from "./logic.js";
import * as data from "./data.js";
let morseTxtArea = document.getElementById("morseText");
let englTxtArea = document.getElementById("englishText");
let translateBtnEng = document.getElementById("btn__translateEng");
let translateBtnMor = document.getElementById("btn__translateMor");

let eText;
let mText; //= logic.getText(morseTxtArea);

translateBtnEng.addEventListener("click", () => {
	eText = logic.getText(englTxtArea);
	mText = logic.getText(morseTxtArea);
	let eSplit = logic.splitForTranslationFromEnglish(eText);
	console.log(eSplit);
	mText = logic.matchKeyValue(eSplit, data.alphabetMorse);
	console.log(mText);
	morseTxtArea.value = mText;
});
translateBtnMor.addEventListener("click", () => {
	mText = logic.getText(morseTxtArea);
	let mSplit = logic.splitForTranslationFromMorse(mText);
	let beepBoop = logic.swapsie(data.alphabetMorse);
	eText = logic.matchKeyValue(mSplit, beepBoop);
	eText = logic.removeSpace(eText);
	eText = logic.reEngSpace(eText);
	englTxtArea.value = eText;
});
