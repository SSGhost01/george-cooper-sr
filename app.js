// console.log("merhaba dünya")
// //alert("merhaba")
// document.write("merhaba    ")
// // html içinde bir etikete ıd ile ulaşma
// document.getElementById("title").innerHTML = "merhaba kadir"
// document.getElementById("yusuf").innerHTML= "merhaba yusuf"


// const a=5
// const b=3
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// //string= metin number=sayı boolean=true,false

// console.log(5 < 3)
// console.log(6 > 4)

// console.log("yu"+"suf")

//  function topla(sayi1,sayi2) {
//     return sayi1 + sayi2
// }

// console.log(topla(3,2))




//sayı işlemleri
const sayi1 = document.getElementById("s1");
const sayi2 = document.getElementById("s2");
const btn = document.getElementById("btn");
const show = document.getElementById("show");
const cikanbtn = document.getElementById("minus");
const carpanbtn = document.getElementById("multipy")
const bolenbtn = document.getElementById("division")

// butona tıklandığında fonksiyon çalışacak
btn.onclick =function(){
    const toplam = Number(sayi1.value)+ Number(sayi2.value); //value değer demektir
    //sayıların değerini aldık topladık
    show.innerHTML=toplam; //toplam div içinde yazılır
}

//çıkarma fonkyionu
cikanbtn.onclick =function(){
const cikan = Number(sayi1.value)- Number(sayi2.value);
show.innerHTML=cikan; 
}
//çarpma fonksiyonu
carpanbtn.onclick =function(){
    const carpan = Number(sayi1.value)* Number(sayi2.value);
    show.innerHTML=carpan; 
}
//bölme işlemi
bolenbtn.onclick =function(){
    const bolen = Number(sayi1.value)/ Number(sayi2.value);
    show.innerHTML=bolen; 
}
 

//if else eğer koşul yapısı 

const notbtn = document.getElementById("notbtn") //butonun ıdsini alıp notbtne atadık 
const durum = document.getElementById("durum")//divin idsini alıp duruma atadık 
//butona tıklayarak fonksiyonu çalıştırdık 

notbtn.onclick = function(){
    //inputun değerini alıyoruz
    const input = document.getElementById("not").value;
    
//
 //if else eğer koşul yapısı 
if(input< 100  && input >=85){

    durum.innerHTML="takdir"
}
//İNPUT 85 ile  70 arası teşekkür
else if(input<85 && input >=70){

    durum.innerHTML="teşekkür"
}
else if(input<70 && input>=50){
    durum.innerHTML="düz geçti"
}
else{   
    durum.innerHTML="sınıf tekrarı"
       }
    }