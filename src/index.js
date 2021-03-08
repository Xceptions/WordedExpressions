class WordedExpressionsClass {
    constructor(input_msg) {
        this.result;
        this.inp = input_msg
    }
    result() {
        return this.inp
    }
}

function WordedExpressions ( query ) {
    // figuring out how to return something from the class
    let result = new WordedExpressionsClass( query ).result;
    return result
}

module.exports = {
    WordedExpressions,
    WordedExpressionsClass
}