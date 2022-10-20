export const getText = (textArea) => {
	return textArea.value;
};

export const splitForTranslationFromEnglish = (userInputString) => {
	let eLowerCase = userInputString.toLowerCase();
	eLowerCase = eLowerCase.replace(/\s/g, "|"); //removing all spaces
	let engInputStr = eLowerCase.split("");
	return engInputStr;
};
export const splitForTranslationFromMorse = (userInputString) => {
	return userInputString.split(" ");
};

export const removeSpace = (string) => {
	return string.replace(/\s/g, "");
};
export const reEngSpace = (string) => {
	return string.replace(/\|/g, " ");
};

export const matchKeyValue = (splitString, data) => {
	let translation = splitString.map((char) => data[char]); //matching the key/character to morse counterpart
	translation = translation.join(" ");
	return translation;
};

export const swapsie = (data) => {
	return Object.fromEntries(Object.entries(data).map((a) => a.reverse()));
};
