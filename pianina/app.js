function kuyla (qiymat){
switch (qiymat){
    case "q":
    let q= new Audio("Q.mp3")    
    q.play();
    animatsiya(qiymat);
    break;
    case "w":
        let w= new Audio("W.mp3")    
        w.play();
        animatsiya(qiymat);
        break;
        
        case "e":
            let e= new Audio("E.mp3")    
            e.play();
            animatsiya(qiymat);
            break;

            case "r":
            let r= new Audio("R.mp3")    
            r.play();
            animatsiya(qiymat);
            break;

            case "t":
                let t= new Audio("T.mp3")  ;  
                t.play();
                animatsiya(qiymat);
                break;

                case "y":
                    let y= new Audio("Y.mp3");    
                    y.play();
                    animatsiya(qiymat);
                    break;

                    case "u":
                        let u= new Audio("U.mp3");    
                        u.play();
                        animatsiya(qiymat);
                        break;
                        
                        case "i":
                            let i= new Audio("I.mp3");    
                            i.play();
                            animatsiya(qiymat);
                            break;

                            case "o":
                                let o= new Audio("O.mp3");    
                                o.play();
                                animatsiya(qiymat);
                                break;

                                case "p":
                                    let p= new Audio("P.mp3");    
                                    p.play();
                                    animatsiya(qiymat);
                                    break;
}
}

function animatsiya(qiymat){
    document.getElementsByClassName(`key-${qiymat}`)[o].classList.add("pressed");
setTimeout(function (){
    document.getElementsByClassName(`key-${qiymat}`)[0].classList.remove("pressed");
},200);
}

document.addEventListener("keydown",function(event){

    let basHarf=event.key,
    nota=["q","w","e","r","t","y","u","i", "o","p"];
    basHarf=basHarf.toLocaleLowerCase();
    if(nota.includes(basHarf)){
        kuyla(basHarf);
    }
});