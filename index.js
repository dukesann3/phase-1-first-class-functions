
function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function newFunc(){
        console.log('idk');
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('hi');
    }
}

