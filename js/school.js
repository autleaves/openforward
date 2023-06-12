let name = ['コウヨウ'];
let temp = '';
for(let i = 1; i<3; i++) {
    temp = prompt('please input one name');
    name.push(temp);
}
alert(name);


const price = 3000;
if(price >= 5000) {
    console.log('送料無料');
} else {
    console.log('送料800円');
}

let yosan = 3000;
if(yosan>=2000) {
    console.log('Tシャツと買う');}
else{
    console.log('Tシャツとあきらめる');
}


let yosan = 1000;
if(yosan>=2000) {
    console.log('Tシャツと買う');}
else{
    console.log('Tシャツとあきらめる');
}

let age = prompt('年齢を入力してください');
if(age >= 18) {
    alert('成人です');
}else {
    alert('未成年です');
}

let point = prompt('点数を入力してください');
if(point >= 80){
    console.log('金');
} else if(point >= 70) {
    console.log('銀');
} else {
    console.log('銅');
}

let ondo = prompt('温度を入力してください');
if (ondo >= 25) {
    alert('温度が' + ondo + '度なので冷房を付けます');
}　else if(ondo <= 18) {
    alert('温度が' + ondo + '度なので暖房を付けます');
}　else {
    alert ('快適なのでこのままです');
}