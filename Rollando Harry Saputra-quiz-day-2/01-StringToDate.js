/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    n = new Date(s);
    let tanggal =n.getDate();
    let bulan =n.getMonth();
    let tahun =n.getFullYear();
    if(isNaN(tanggal) || isNaN(bulan) || isNaN(tahun)){
        return(`${s} bad format date`);
    }else{
        return(n);
    }
}    

 console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
 console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date