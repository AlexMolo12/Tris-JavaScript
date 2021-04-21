let turno=true;
let giocatore=true;
let nTurni=1;
let fine;
let possibilitaDisegno=true;
//for(var i = 0; i < 9; i++) getInfo(i).innerHTML = "";
/*Da aggiungere:
resettare la tabella senza ricaricare la pagina
aggiungere l'obbligatorietà di mettere i nickname
una tabella dei punteggi
aggiungere colori alle X e O
*/
function inserisci(cella){
    let cellaSelezionata=getCella(cella);
    if(possibilitaDisegno)
    {
        if(cellaSelezionata.innerHTML!="X"&&cellaSelezionata.innerHTML!="O")
        {
            if(turno)
            {
                cellaSelezionata.innerHTML="X";
            }else
            {
                cellaSelezionata.innerHTML="O";
            }
            fine=controllaVittoria();
            turno=!turno;
            giocatore=!giocatore;
            nTurni++;
        }
    }
    if(fine!=false){
        possibilitaDisegno=false;
        document.getElementById("vincitore").innerHTML=fine;
    }
    
}

function getCella(cella)
{
    if(cella==1)
    {
        return document.getElementById("pos1");
    }else if(cella==2)
    {
        return document.getElementById("pos2");
    }else if(cella==3)
    {
        return document.getElementById("pos3");
    }else if(cella==4)
    {
        return document.getElementById("pos4");
    }else if(cella==5)
    {
        return document.getElementById("pos5");
    }else if(cella==6)
    {
        return document.getElementById("pos6");
    }else if(cella==7)
    {
        return document.getElementById("pos7");
    }else if(cella==8)
    {
        return document.getElementById("pos8");
    }else if(cella==9)
    {
        return document.getElementById("pos9");
    }
}

function controllaVittoria()
{
    let carattereVincente;
    let giocatoreVincente;
    if(giocatore)
    {
        carattereVincente="X";
        giocatoreVincente="Vince il giocatore 1";
    }else
    {
        carattereVincente="O";
        giocatoreVincente="Vince il giocatore 2";
    }
    if(nTurni<5)
    {
        return false;
    }
    if(getCella(1).innerHTML==carattereVincente&&getCella(2).innerHTML==carattereVincente&&getCella(3).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(4).innerHTML==carattereVincente&&getCella(5).innerHTML==carattereVincente&&getCella(6).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(7).innerHTML==carattereVincente&&getCella(8).innerHTML==carattereVincente&&getCella(9).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(1).innerHTML==carattereVincente&&getCella(4).innerHTML==carattereVincente&&getCella(7).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(2).innerHTML==carattereVincente&&getCella(5).innerHTML==carattereVincente&&getCella(8).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(3).innerHTML==carattereVincente&&getCella(6).innerHTML==carattereVincente&&getCella(9).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(1).innerHTML==carattereVincente&&getCella(5).innerHTML==carattereVincente&&getCella(9).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(getCella(3).innerHTML==carattereVincente&&getCella(5).innerHTML==carattereVincente&&getCella(7).innerHTML==carattereVincente)
    {
        return giocatoreVincente;
    }else if(nTurni==9){
        return "PAREGGIO";
    }else
    {
        return false;
    }
}