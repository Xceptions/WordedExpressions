"use strict"

class WordedExpressions {
    /** Class that holds all the code */
    constructor ( query ) {
        this.result;
        this.todo = {
            action: null,
            subject: null,
            preposition: null,
            object: null,
            conjunction: null,
            conj_object: null,
            global_status: "",
            case_status: "insensitive"
        }
        this.expression = query.split(" ");
        this.getWord(this.expression);
    }
    
    getWord () {
        let match = this.expression[0];
        if ( this.expression.length !== 0 ) {
            this.parseQuery ( match );
        } else {
            this.processQuery( this.todo );
        }
    }

    parseQuery ( match ){
        /*
        * if we match a keyword, the next word that follows it is assumed
        * to be associated with the keyword and remove both.
        */
       let _match = match.toUpperCase() // allows for keywords to be case insensitive
        switch ( _match ) {
            case "FIND":
                this.todo.action = _match;
                this.expression.shift();
                this.todo.subject = this.expression[0];
                break;
            case "REPLACE":
                this.todo.action = _match; 
                this.expression.shift();
                this.todo.subject = this.expression[0];
                break;
            case "IS":
                this.todo.action = _match; 
                this.expression.shift();
                this.todo.subject = this.expression[0];
                break;
            case "COUNT":
                this.todo.action = _match;
                this.expression.shift();
                this.todo.subject = this.expression[0];
                break;
            case "IN":
                this.todo.preposition = _match;
                this.expression.shift();
                this.todo.object = this.expression[0];
                break;
            case "WITH":
                this.todo.conjunction = _match;
                this.expression.shift();
                this.todo.conj_object = this.expression[0];
                break;
            case "GLOBAL":
                this.todo.global_status = "g";
                break;
            case "CASE":
                this.todo.case_status = "sensitive";
                break;
            default:
                throw new SyntaxError("Unexpected syntax: " + match);
        }
    
        this.expression.shift(); // remove the processed word
        this.getWord(); // pick the next word to process
    }

    processQuery () {
        if ( this.todo.action == "FIND" )
        {
            let to_find = new RegExp(this.todo.subject, this.todo.global_status);
            let str = this.todo.object;
            this.result = to_find.exec(str)
            return this.result;
        }
        else
        if ( this.todo.action == "IS" )
        {
            let to_find = new RegExp(this.todo.subject, this.todo.global_status);
            let str = this.todo.object;
            this.result = to_find.test(str);
            return this.result;
        }
        else
        if ( this.todo.action == "REPLACE" )
        {
            let subject = this.todo.subject;
            let conj_object = this.todo.conj_object;
            let object = this.todo.object;

            this.result = object.replace(subject, conj_object);
            return this.result;
        }
        else
        if (this.todo.action == "COUNT")
        {
            let subject = this.todo.subject;
            let object = this.todo.object;
            let re = new RegExp(subject, this.todo.global_status);
            this.result = object.match(re).length;
            return this.result;
        }
    }
}

// An alternative if you wish to use it as a function
function WordedExpression ( query ) {
    let result = new WordedExpressions( query ).result;
    return result;
}

module.exports = {
    WordedExpressions,
    WordedExpression
}