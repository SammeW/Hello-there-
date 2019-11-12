function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");
    

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = 
        "<table> <thead> <tr> <th>Name</th> <th>Email</th> <th>Age</th> </tr> </thead> <tbody> <tr> <td>Samme</td> <td>Samme@gmail.com</td> <td>167</td>" +
        "</tr> </tbody> </table>";
    }
    else{
        document.getElementById("laatikko3").innerHTML = "<img src=https://img.ilcdn.fi/m4UpZp_c-9XPl6ctT9SGm3efpZA=/full-fit-in/612x/img-s3.ilcdn.fi/8f1aaa9af6f86a0c504dab320fd639bbb305eb63ae2214a258184529fdd5f55f.jpg>"
    }
}
function reloadFunktio(){
    document.location.reload();
}
function yhteystietoFunktio() {
    
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1; i >=0; i--) {
      text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
function diagrammiFunktio(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    var tekstikorkeus = 500;
    var määrä = ["0", "2500", "5000", "10 000", "12 500", "15 000"];
    var m;
    for (m = 0; m < määrä.length; m++){
    ctx.fillText(määrä[m], 1, tekstikorkeus);
    tekstikorkeus = tekstikorkeus - 95;
    }
    var tekstileveys = 20;
    var kuukaudet = ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"];
    var kk;
    for (kk = 0; kk < kuukaudet.length; kk++){
    ctx.fillText(kuukaudet[kk], tekstileveys, 500);
    tekstileveys = tekstileveys + 50;
    }
    ctx.moveTo(40, 200);
    var leveys = 40;
    var korkeus = ["200", "270", "140", "400", "300", "80", "230", "485", "232", "12", "355", "432", "123"];
    var l;
    var k;
    
    for (k = 0; k < korkeus.length; k++){
        ctx.lineTo(leveys, korkeus[k]);
        leveys = leveys + 40;
        }
    ctx.stroke();
    }