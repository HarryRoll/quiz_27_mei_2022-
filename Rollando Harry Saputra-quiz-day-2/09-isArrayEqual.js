function isArraysEqual(arrayA, arrayB) {
    
    for(i=0; i<arrayA.length; i++){
        if(arrayA[i]!==arrayB[i]){
            join = arrayA.concat(arrayB);
            console.log(`data tidak sama sehingga di concat, jadi hasilnya adalah ${arrayA.length==join.length} karena panjang array berbeda`);
        }else{
        console.log(`data sama sehingga tidak di concat, jadi hasilnya adalah ${arrayA.length==arrayB.length} karena panjang array sama`);
        }
    }
 }

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
isArraysEqual(fruitNamesA, fruitNamesB); // true
isArraysEqual(fruitNamesA, fruitNamesC); // false
