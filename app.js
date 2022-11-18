function addTokens(input, tokens){
    if(typeof input !== "string"){
        throw new Error(`Invalid input`);
    }
 
    if(input.length < 6){
        throw new Error(`Input should have at least 6 characters`)
    }
 
    const isArrayvalid = tokens.every(element => typeof element.tokenName === "string" );
 
    if(!isArrayvalid){
        throw new Error(`Invalid array format`);
    }
 
    if (input.includes('...')){
        var newInput = input.replace('...','').concat('${').concat(tokens[0].tokenName).concat('}');
        return newInput;
    }
    else{
        return input;
    }  
}
 
const app = {
    addTokens: addTokens
}
 
module.exports = app;