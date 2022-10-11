let say
say =Number("25")
say=parseInt("25")//tam sayı yapar
say=parseInt("25.5") //25 yazdırır

say=parseFloat("25.5")//ondalikli olarak bırakır
say=parseInt("25a") //a yı atar number yapar
say=parseInt("a25") //burda a-yı atamaz NaN olur Not a Number

say =isNaN("10")//sayiya cevrilip cevrilmeyecegine bakar
say =isNaN("a10")// true yani cevrilmez


const num =10.15485121 //kusuratli bir sayi
say=num.toPrecision(2)//string cevirdi ve ilk iki hane aldi 
say =num.toFixed(3)//virgulden sonra 3 alir sonrasini yuvarlar

say=Math.PI //pi sayisi
say=Math.round(2.4)// 2-en yakın sayı yuvarlar
say=Math.round(2.7)//3
say=Math.ceil(2.4)//her zaman yukari yuvarlar
say=Math.floor(2.4)//her zaman asagi yuvarlar
say=Math.sqrt(64)//karakök
say=Math.pow(2,3)// 2 üzeri 3
say=Math.abs(2.4)// mutlak deger
say=Math.min(1,5,8,25)//dizi koyuk
say=Math.max(2,4,8,12,78,)
say=Math.floor(Math.random()*10)//0 ile 10 arasi sayi döndürür


console.log(typeof(say))
console.log(say)