
let elTitle = document.querySelector('#title');

let dollar = 10650.34;
let yevro = 11650.03;

let bilet = 500;
let mehmonxona = 250;
let muzey = 120;

let sum = (bilet + mehmonxona) * dollar + muzey * yevro;

let name = prompt('Ismizni bilsak bo\'ladimi ???');
let izoh = prompt(name + 'Borish-kelish samolyot bileti-$500 Mehmonxona to’lovi (to’liq safar davomiyligi uchun)-$250 Muzey va ko’ngilochar joylar uchun - 120 yevro. Sizningcha narxlar arzonmi???');
let money = Number(prompt('Izohingiz uchun rahmat ' + name + " sizga " + sum + "so'm kerak bo'ladi, chuntagiz haqida ma'lumot bersangiz chuntagizda qancha mablag'iz bor"));


if(sum <= money){
    elTitle.textContent = "Sizdaham pul ko'payib ketti, oq yo'l sizga " + name
}else{
    elTitle.textContent = "Puliz yetmayapti shunga ozgina sabr qiling " + name
}