let ximena = "Christmas";
let falala = "pink"

function length(){
    let len = 0; 
    for(let i = 0; i < ximena.length; i++){
        len++;
    }
    return len 
}
console.log("length: ", length());

function slice(start,end){
    let segment = ""; 
    for(let i = start; i < end; i++){
        segment += ximena[i];
    }
    return segment
}
console.log("slice: ", slice(0,6));

function replace(oldChar, newChar){
    let newXimena= ""; 
    char =0;
    for(let i = 0; i<ximena.length; i ++){
        if(ximena[i] === oldChar && char ===0){
            newXimena+=newChar;
            char++; 
        }else{
            newXimena+=ximena[i];
        }
    }
    return newXimena
}

console.log("replace:", replace("s", "x"))

function replaceAll(oldChar, newChar){
    let newXimena= ""; 
    for(let i = 0; i<ximena.length; i ++){
        if(ximena[i] === oldChar){
            newXimena+=newChar; 
        }else{
            newXimena+=ximena[i];
        }
    }
    return newXimena
}
console.log("replaceAll:", replaceAll("s", "x"))

function concat(){
    let deer = ximena; 
    for(let i = 0; i < falala.length; i ++){
        deer+= falala[i]; 
    }
    return deer
}
console.log("concat:", concat())

function charAt(i){
    return ximena[i]
}
console.log("charAt:", charAt(5))




