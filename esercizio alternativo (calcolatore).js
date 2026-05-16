//(Calcolatore) Scrivere un programma che legga due numeri e un operatore tra 
//+, -, * e / da tastiera e mostri a video il risultato dell’operazione sui due numeri.
var a = Number(prompt(" First number: "));
var b = Number(prompt(" Second number: "));
var op = prompt(" dimmi che operazione vuoi: ");
if (op=="+"){
    console.log(a+b);
}
if (op == "-"){
    console.log(a-b);
}
if (op == "*"){
    console.log(a*b);
}
if (op=="/"){
    if (b==0){
        console.log("ciccio, non si può fare.");
    }else
    {
        console.log(a/b);
    }
}

switch (op){
    case "+": console.log(a+b);
              break;
    case "-": console.log(a-b);
              break;
    case "*": console.log(a*b);
              break;
    case "/":{
        if (b == 0){
            console.log("Errore divisione per zero");
        }else{
        console.log(a/b);
              
        }
              break;
    }  
}