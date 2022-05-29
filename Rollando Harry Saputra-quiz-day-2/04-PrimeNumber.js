
function showPrimeNumber(n){
    for(i=1; i<=n; i++){
        let sign = 0;
        for(j=2; j<i; j++){
            if(i%j==0){
                sign=1;
                break;
            }
        }
        if (i > 1 && sign == 0) {
            console.log(i);
        }
}
}

showPrimeNumber(100);
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */
