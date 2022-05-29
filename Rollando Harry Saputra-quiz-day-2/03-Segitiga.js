/** buat segitiga  */ 

let hasil = '';
for (let i=4; i>=1; i--) {
    for (let j = 1; j <= i; j++) {
        hasil += j ;
    }
    hasil += '\n';
}
console.log(hasil);
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

let result = '';
for (let i=5; i>=1; i--) {
    for (let j = i; j >= 1; j--) {
        result += j ;
    }
    result += '\n';
}
console.log(result);

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  
