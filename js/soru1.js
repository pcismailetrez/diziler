// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er
//  katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
// ödev sorusu
let yenidizi =dizi.filter(function(sayımız){
    return sayımız>10
 });
 let yenidizi2=dizi.map(function(sayıY){
     return sayıY*5
 });
 console.log(yenidizi2.splice(3,6))
 
 
 