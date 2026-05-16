let w 
do{
    w = Number(prompt("Dimmi la velocità: "));
    
    
    if (w<=10 && w>1){
        console.log("La sanzione è di 100$");
    }else {
        
        if (w>=11 && w<20){
            console.log("La sanzione è di 150$");
        }else{

            if (w>=21 && w<30){
                console.log("La sanzione è di 250$");
            }else{
                 
                 if (w>=31 && w<40){
                    console.log("La sanzione è di 300$");
                 }else console.log ("La sanzione è di 400$");
            }
        }
    }
}while (w>0);