/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){

        m=0;
        for(let a=year1; a<=year2; a++){
        if(a%4==0){
        m++;
        console.log(`pada tahun ${a} adalah kabisat ke-${m}`);
        }
}
}


howManyKabisat(1997,2021);
