function parimpar(n) {
    if(n%2 == 0){
        return "PAR"
    }else{
        return "IMPAR"
    }
    
}

//O N passa a valer 223 e vai retornar como IMPAR
let res = parimpar(224)
console.log(res)