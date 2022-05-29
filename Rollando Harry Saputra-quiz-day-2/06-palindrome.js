
function isPalindrome(word){
    let x = word.toUpperCase()
    let z = x.split('');
    kata1=x;
    kata2=z;
    kata2.reverse();
    for(i=0; i<kata1.length; i++){
    console.log(`hasilnya adalah ${kata1[i]==kata2[i]}`);
//    console.log(kata1[i],kata2[i], kata1[i]==kata2[i]);

    }

}
isPalindrome('kasur ini rUsak');//true