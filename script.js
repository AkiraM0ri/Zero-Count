let btn = document.querySelector("#btn")

function contarZeros(){
    let inicial = document.querySelector("#init"),
    final = document.querySelector("#final"),
    res = document.querySelector("#res"),
    zeros = 0

    let init = Number(inicial.value)
    let fim = Number(final.value)
    
    while(init <= fim){
        var numero = init.toString()
        var tamanho = numero.length
        init++
       
        for (let i = 1; i <= tamanho; i++){
            let x = i - 1

            if((numero.substring(x,i)) == '0') {
                zeros++
                res.innerHTML = `Do numero inicial ao numero final há: ${zeros} zeros`
            }
        }
    }
}
btn.addEventListener("click", contarZeros)
