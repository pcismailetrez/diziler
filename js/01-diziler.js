let domain ="kodluyoruz"
let isActive= false
let items =[ 1,2,3,4, domain, isActive]

console.log(items)
let x =document.querySelector("#id")
x.innerHTML=items;

console.log(
    " dizinin ilk karakteri: "+ items[0]+ " "
   + "dizinin son karakteri :" +items[items.length-1] +
   "   dizinin ortadaki karakteri :"+ items[ Math.floor(items.length/2)] +
   ""
    )
    let arr =[0,1,2,3,4,5]
    for(let i =0;i<=arr.length-1;i++){
        console.log(arr[i])
        let y =document.querySelector("#arr")
         y.innerHTML=arr[i]
    }
    
    let kane = [0,1,2,3]
    kane.push(45) // son elemanı ekledik pushla 
    console.log(kane)
    kane.unshift(11) // ilk elemanı ekledik 
    console.log(kane) 
    kane.pop() // son elemanı çıkardık 
    console.log(kane) 
    kane.shift() // ilk elemanı çıkardık 
    console.log(kane)
    

    let firstmin = ['iso','etrez','mom','dad'];
    let lastmin =['melek','merve','serhat'];
    kane.unshift(firstmin)
    console.log(kane)
    kane.push(lastmin)
    console.log(kane)
    console.log(kane[0][2])
    console.log(kane[0].length
        )
        console.log(kane.length-1)
        let newtitle=firstmin.splice(0,4) // spalce ilki nerden başlaycagını (1 den başlasın dedik) ikincisi kaç adet olucağı .
        console.log("new title splace ile :"+ newtitle)

// örnek 1 
 let alışverişlistem =['domates ','ekmek',"süt"]
alışverişlistem.push('limon')
console.log(alışverişlistem)
// örnek 2 
// limonu silelim 
alışverişlistem.pop()
console.log(alışverişlistem)
const varmı =alışverişlistem.includes('ekmek')
console.log("ekmek varmı :"+varmı)


// .slice()
// Slice (dilimleme) metodu bir dizinin bir kısmının 
// kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
// Parantez içerisine ise kopyalamak istediğimiz elemanların
//  aralığını başlangıç ve bitiş indeksleri olacak şekilde 
//  iki parametre olarak giriyoruz. Bitiş indeksindeki
//   değerin aralığa dahil olmadığını unutmayalım.
// Bu metot uygulandığı dizinin orijinal halini değiştirmiyor 
// bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.


// örnek 3 arraylari birleştirme 

const katımaddeler =['masa','sandalye','kapı']
const sıvımaddeler =['su','yağ']
const maddeler =katımaddeler.concat(sıvımaddeler);
console.log(maddeler)


// örnek 4 map örneği 

let numberarray=[0,1,2,3,4,5,6,7,8]
let x1 = numberarray.map(function(sayı)
{
    return sayı*5
})
console.log("sayının 5 katını aldık :"+x1)

let x2=numberarray.some(function(sayı1){
 return sayı1>5
})
console.log("sayı1 dizide beşten büyük varmı ?  :"+x2)

// örnek 5 filter örneği bu örnek maptan farkı boolean gibi true false almaz dizinin sağğlayan kısmını tutar .
let x3 = numberarray.filter(function(sayı3)
{
return sayı3>1;
});

console.log("1 den büyük olan sayıları alır ve diziyi yazar : "+x3)

// örnek 6 find örnegi
// Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
// Diğer metotların aksine find metodu elemanın kendisini döner.
// Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
// Koşulu sağlayan bir eleman bulamazsa undefined döner.


let sayılarımız =[10,2,5,3,4];
let newsayı = sayılarımız.find(function(sayıx){
  return sayıx===5
});
console.log(newsayı)





const sayilar = [10,20,30];
function toplama ( aküm,sayi){
    return aküm+sayi;
}

let sonuc=sayilar.reduce(toplama,8);
console.log(sonuc);

let dizi = [2,5,8,11,15,17];

// çarpım örneği reduce yöntemiyle yaptım 
let örnek4 =[2,3,4];
function çarpim(sa1,sa2){
    return sa1*sa2;
}
let cevap=örnek4.reduce(çarpim,1);
console.log(cevap)

let dizif = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

let cevapf=dizif.filter(function(sayıf){
    if(sayıf>5){
        return console.log("beşten büyük bir eleman mevcut")
    }
    else{
        return console.log("beşten büyük bir eleman mevcut değil")
    }
})
for(var i =0;i<dizif.length;i++){
    if(dizi[i]>5){
        console.log("beşten büyüktür "+ dizif[i]);
    }else{
        console.log("beşten küçüktürler "+ dizif[i])
    }
}






























