var buttao = document.getElementById("botaotrocar");
buttao.addEventListener('click',codigo);

var index=1;

function codigo(){
    document.getElementById("songimage").style.transition="1s";
    switch(index){
        case 1:
            document.getElementById("songimage").style.backgroundImage="url(images/nosurprises.jpg)";
            document.getElementById("musicname").innerText="Radio/Video";
            document.getElementById("artist").innerText="Artista/Banda: System of a Down"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 17/05/2005";
            document.getElementById("gender").innerText="Gênero: Rock";
            document.getElementById("time").innerText="Duração: 4:11";
            index++;
            break;
        case 2:
            document.getElementById("songimage").style.backgroundImage="url(images/escorte.jpg)";
            document.getElementById("musicname").innerText="SICKO MODE";
            document.getElementById("artist").innerText="Artista/Banda: Travis Scott"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 03/08/2018";
            document.getElementById("gender").innerText="Gênero: Hip-Hop";
            document.getElementById("time").innerText="Duração: 5:15";
            index++;
            break;
        case 3:
            document.getElementById("songimage").style.backgroundImage="url(images/taylor.jpg)";
            document.getElementById("musicname").innerText="Anti-Hero";
            document.getElementById("artist").innerText="Artista/Banda: Taylor Swift"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 21/10/2022";
            document.getElementById("gender").innerText="Gênero: Pop";
            document.getElementById("time").innerText="Duração: 3:21";
            index++;
            break;
        case 4:
            document.getElementById("songimage").style.backgroundImage="url(images/jackson.jpg)";
            document.getElementById("musicname").innerText="Thriller";
            document.getElementById("artist").innerText="Artista/Banda: Michael Jackson"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 29/11/1982";
            document.getElementById("gender").innerText="Gênero: Pop";
            document.getElementById("time").innerText="Duração: 5:58";
            index++;
            break;
        case 5:
            document.getElementById("songimage").style.backgroundImage="url(images/chitao1.jpeg)";
            document.getElementById("musicname").innerText="Evidências";
            document.getElementById("artist").innerText="Artista/Banda: Chitãozinho e Xororó"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 04/12/1990";
            document.getElementById("gender").innerText="Gênero: Sertanejo";
            document.getElementById("time").innerText="Duração: 4:54";
            index++;
            break;
        case 6:
            document.getElementById("songimage").style.backgroundImage="url(images/zezedicamargo.jpg)";
            document.getElementById("musicname").innerText="É o Amor";
            document.getElementById("artist").innerText="Artista/Banda: Zezé Di Camargo e Luciano"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 19/04/1991";
            document.getElementById("gender").innerText="Gênero: Sertanejo";
            document.getElementById("time").innerText="Duração: 3:23";
            index++;
            break;
        case 7:
            document.getElementById("songimage").style.backgroundImage="url(images/daftpunk.jpg)";
            document.getElementById("musicname").innerText="Instant Crush";
            document.getElementById("artist").innerText="Artista/Banda: Daft Punk & Julian Casablancas"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 19/05/2013";
            document.getElementById("gender").innerText="Gênero: Eletrônica";
            document.getElementById("time").innerText="Duração: 5:37";
            index++;
            break;
        case 8:
            document.getElementById("songimage").style.backgroundImage="url(images/jazz.jpg)";
            document.getElementById("musicname").innerText="In The Pocket";
            document.getElementById("artist").innerText="Artista/Banda: Dave Weckl"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 01/051/1994";
            document.getElementById("gender").innerText="Gênero: Jazz";
            document.getElementById("time").innerText="Duração: 5:31";
            index++;
            break;  
        case 9:
            document.getElementById("songimage").style.backgroundImage="url(images/radiovideo.jpg)";
            document.getElementById("musicname").innerText="No Surprises";
            document.getElementById("artist").innerText="Artista/Banda: Radiohead"
            document.getElementById("dateLanc").innerText="Data de Lançamento: 04/09/1995";
            document.getElementById("gender").innerText="Gênero: Rock";
            document.getElementById("time").innerText="Duração: 3:50";
            index=1;
            break; 
    }
}

function acao(elementId){
    if(document.getElementById("1").id==elementId)
        index=9;
    else if(document.getElementById("2").id==elementId)
        index=1;
    else if(document.getElementById("3").id==elementId)
        index=2;
    else if(document.getElementById("4").id==elementId)
        index=3;
    else if(document.getElementById("5").id==elementId)
        index=4;
    else if(document.getElementById("6").id==elementId)
        index=5;
    else if(document.getElementById("7").id==elementId)
        index=6;
    else if(document.getElementById("8").id==elementId)
        index=7;
    else
        index=8;

    codigo();
}


sultans.addEventListener('mouseover',function(){
    title.style.transition = "2s";
    title.style.marginRight = "0%";
    title.style.opacity = "100%";
});
sultans.addEventListener('mouseout',function(){
    title.style.transition = "2s";
    title.style.marginRight = "82%";
    title.style.opacity = "0%";
});

