function maxWordLength(params) {
    let x = 0;
    let par = params.split(' ');
    for(let i=0; i<par.length;i++){
    if(par[i].length>x){
    params = par[i];
    x = par[i].length;
    }
    }
    return params;
    }
    let paramResult = maxWordLength("aku suka bootcamp sentul city");//bootcamp
    console.log(paramResult);