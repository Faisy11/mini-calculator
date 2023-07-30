function mark() {
    let inp1= Number (document.getElementById ("fir").value );
    let inp2=Number (document.getElementById ("sec").value );
    let inp3=String (document.getElementById("sym").value)
    let tota=document.getElementById("total")
    if(inp3=="+" ){
tot=inp1+inp2
tota.innerHTML=("ANS : ")+tot
    }else if(inp3=="-"){
        tot=inp1-inp2
tota.innerHTML=("ANS : ")+tot
    }
    if(inp3=="*" ){
        tot=inp1*inp2
        tota.innerHTML=("ANS : ")+tot
            }else if(inp3=="/"){
                tot=inp1/inp2
        tota.innerHTML=("ANS : ")+tot
            }
        }

