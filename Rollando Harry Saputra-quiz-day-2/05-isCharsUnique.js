function isCharsUnique(string){
    a = string.split("");
    return new Set(a).size === a.length
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false
