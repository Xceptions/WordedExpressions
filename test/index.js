import assert from 'assert';
import { RegexQuery } from "../src/index.js";

describe('Testing RegexQuery', () => {
    it('should return 1 for count of a', done => {
        let result = RegexQuery("count a in said GLOBAL CASE");
        assert.strictEqual(1, result)
        done();
    });
});