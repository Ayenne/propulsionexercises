function nearby_az(string){
    let counter = 0;
    let checker = false;
    for(let i = 0; i < string.length; i++){
        if(string[i] === 'a'){
            checker = true;
            counter = 0;
        }
        if(checker = true){
            counter++;
        }
        if(string[i] === 'z' && checker === true && counter <= 4){
            return true;
        }
    }
    return false;
}
console.log(nearby_az("abbazabz"));