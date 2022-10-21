import * as tests from "./logic.js";
let getString = "hueue test time idk";
let preString = "TeSt tHiS";
let spaceString = "test|this";
let morse = "... --- ... | ... --- ...";
let morseSplit = ["...", "---", "...", "|", "...", "---", "..."];
let postString = ["t", "e", "s", "t", "|", "t", "h", "i", "s"];
let dumbyData = { a: ".-", b: "-...", c: "-.-." };
let dumbyDataReverse = { ".-": "a", "-...": "b", "-.-.": "c" };
let dumbyMorse = ".- -... -.-.";
let dumbyEng = ["a", "b", "c"];
describe("logic", () => {
	//gettext dont know how to emulate a textarea to get the value from :/
	// it("gettin text", () => {
	// 	expect(tests.getText(getString)).toBe("hueue test time idk");
	// });

	it("lower case n replace space w |", () => {
		expect(tests.splitForTranslationFromEnglish(preString)).toStrictEqual(
			postString
		);
	});
	it("splits a string into array", () => {
		expect(tests.splitForTranslationFromMorse(morse)).toStrictEqual(morseSplit);
	});

	it("no spaces", () => {
		expect(tests.removeSpace(getString)).toBe("hueuetesttimeidk");
	});
	it("replace | with a space ", () => {
		expect(tests.reEngSpace(spaceString)).toBe("test this");
	});
	//match key value
	it("matches keys to values and returns as a string", () => {
		expect(tests.matchKeyValue(dumbyEng, dumbyData)).toBe(dumbyMorse);
	});

	//swapsie
	it("swaps round keys and objects", () => {
		expect(tests.swapsie(dumbyData)).toStrictEqual(dumbyDataReverse);
	});
});
