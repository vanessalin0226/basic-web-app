import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return my andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "vanessa2"
          ));
    });

    test('should answer name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "vv"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should find max number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 23, 20, 97?")).toEqual("97");
        expect(QueryProcessor("Which of the following numbers is the largest: 85, 93, 40?")).toEqual("93");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 1 multiplied by 2?")).toEqual("2");
        expect(QueryProcessor("What is 2 multiplied by 3?")).toEqual("6");
    });

    test('should minus numbers', () => {
        expect(QueryProcessor("What is 2 minus 1?")).toEqual("1");
        expect(QueryProcessor("What is 4 minus 4?")).toEqual("0");
    });

    // test('should return prime numbers', () => {
    //     expect(QueryProcessor("Which of the following numbers are primes: 2, 5, 11, 10, 1?")).toEqual("2, 5, 11");
    //     expect(QueryProcessor("Which of the following numbers are primes: 17, 19, 29, 0, 6?")).toEqual("17, 19, 29");
    // });

    test('should give powers of number', () => {
        expect(QueryProcessor("What is 2 to the power of 2??")).toEqual("4");
        expect(QueryProcessor("What is 8 to the power of 2?")).toEqual("64");
    });
});