import { StringCalculator } from "../classes/StringCalculator";

describe("StringCalculator", () => {
	let calculator: StringCalculator;

	beforeEach(() => {
		calculator = new StringCalculator();
	});

	it("able to handle arbitrary amount of numbers", () => {
		expect(calculator.add("1,2,3,4,5")).toBe(15);
	});

	it("handle new lines between numbers", () => {
		expect(calculator.add("1\n2,3")).toBe(6);
	});

	it("handle different delimiters", () => {
		expect(calculator.add("//;\n1;2)")).toBe(3);
	});

	it("throw exception for negative numbers", () => {
		expect(calculator.add("1,-2,3")).toThrow(
			"Negative numbers not allowed: -2"
		);
	});
});
