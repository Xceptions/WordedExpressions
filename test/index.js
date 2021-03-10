import assert from 'assert';
import { WordedExpression } from "../src/index.js";

describe('Test query: COUNT', () => {
    it('should return 2 for COUNT of p', done => {
        let result = WordedExpression("COUNT p IN happy GLOBAL CASE");
        assert.strictEqual(2, result);
        done();
    });
});

describe('Test query: REPLACE', () => {
    it('should return hbppy for REPLACING a WITH b IN happy', done => {
        let result = WordedExpression("REPLACE a WITH b IN happy");
        assert.strictEqual("hbppy", result);
        done();
    });
});

describe('Test query: IS', () => {
    it('should return True for IS p IN happy', done => {
        let result = WordedExpression("IS p IN happy");
        assert.strictEqual(true, result);
        done();
    });
});

describe('Test query: FIND', () => {
    it('should return a for FIND a IN happy', done => {
        let result = WordedExpression("FIND a IN happy");
        console.log(typeof(result))
        console.log(result === "a")
        assert.strictEqual("a", result);
        done();
    });
});



// RegexQuery("FIND a IN happy") // returns a
// RegexQuery("REPLACE a WITH b IN happy") // returns hbppy
// RegexQuery("IS p IN happy") // returns yes, otherwise returns no
// RegexQuery("COUNT p IN happy") // returns 2