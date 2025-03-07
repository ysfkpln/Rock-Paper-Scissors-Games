const oyuncu_skor=document.getElementsByClassName("oyuncu_skor")[0];
const bilgisayar_skor=document.getElementsByClassName("bilgisayar_skor")[0];
const tas=document.getElementById("tas");
const kagit=document.getElementById("kagit");
const makas=document.getElementById("makas");
const oyuncu_secimi=document.getElementById("oyuncu_secimi");
const bilgisayar_secimi=document.getElementById("bilgisayar_secimi");
const mesaj=document.getElementsByClassName("mesaj")[0];

let oyuncu=0;
let bilgisayar=0;

function bilgisayarSecim(){
    const secim=["tas","kagit","makas"];
    const rastgeleSayi=Math.floor(Math.random()*3);
    bilgisayar_secimi.setAttribute("src",`res/${secim[rastgeleSayi]}.png`);
    return secim[rastgeleSayi];
};


function eventListeeners(){
    tas.addEventListener("click",function(){
        oyuncu_secimi.setAttribute("src",`res/tas.png`);
        let bil_secim=bilgisayarSecim();
        sonuc("tas",bil_secim);
    });
    kagit.addEventListener("click",function(){
        oyuncu_secimi.setAttribute("src",`res/kagit.png`);
        let bil_secim=bilgisayarSecim();
        sonuc("kagit",bil_secim);
    });
    makas.addEventListener("click",function(){
        oyuncu_secimi.setAttribute("src",`res/makas.png`);
        let bil_secim=bilgisayarSecim();
        sonuc("makas",bil_secim);
    });
}

eventListeeners();

function sonuc(oyuncu,bilgisayar){
    switch(oyuncu+bilgisayar){
        case "tasmakas":
        case "kagittas":
        case "makaskagit":
            kazan();
        break;
        case "makastas":
        case "taskagit":
        case "kagitmakas":
            kaybet();
        break;
        case "tastas":
        case "kagitkagit":
        case "makasmakas":
            berabere();
        break;
        default:"Hataaa"
        break;
    }; 
    
};


function kazan(){
    oyuncu+=1;
    mesaj.innerHTML="Tebrikler Kazandiniz :)";
    oyuncu_skor.innerHTML=oyuncu.toString();
};

function kaybet(){
    bilgisayar+=1;
    mesaj.innerHTML="Maalesef Kaybettiniz :(";
    bilgisayar_skor.innerHTML=bilgisayar.toString();
};


function berabere(){
    mesaj.innerHTML="Tühh Berabere";
};


