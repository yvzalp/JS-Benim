let t =new Date()



console.log(t)//suan ki tarih ve saati verir

t.setDate(13) //burda tarih değiştik mi  asagıda o tarihi yazdirdi
t.setMonth(10)



console.log(t.getDate())//sadece gün

console.log(t.getDay())//3.gün paz,sal,carsamba

console.log(t.getFullYear())//yıl 

console.log(t.getHours())//saat

console.log(t.getMonth())//ay 0 dan baslaiği içi eksik cikar


//Set


let dogumGünü=new Date(1990,1,12)


console.log(t.getFullYear()-dogumGünü.getFullYear())//aradaki zamani verir


