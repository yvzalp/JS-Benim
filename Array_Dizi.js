let dizi=[`ali`,`veli`,25,null,undefined]//farklı tiplerde eklenebilir

console.log(dizi[0]) //-ali- gelir

dizi[0]="recep" //eleman güncelledik
dizi[dizi.length]="ragıb"//sona ekledik
dizi.push("erkan") //sona ekledi
dizi.unshift("kadir")//bas kısmına ekler
dizi.pop() //sondaki eleman sildi
dizi.shift() //bastaki eleman sildi
dizi.reverse()//ters sıralar
dizi.splice()//eleman siler ekler start verebilirsin



// vb methodlara bakabilirsin


console.log(dizi) 
console.log(typeof dizi) //object döner
