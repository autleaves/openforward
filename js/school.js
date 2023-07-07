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
/* 
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
} */

/* Question 1 */
let yosan = 3000;
judge_budget(yosan);
yosan = 1000;
judge_budget(yosan);

function judge_budget(budget) {
    if(budget>=2000) {
        console.log('予算は'+ budget + '円なので、Tシャツと買う');}
    else{
        console.log('予算は'+ budget + '円なので、Tシャツとあきらめる');
    }
}

/* Question 2 */
let age = 0;
let i = true;
while (i) {
    age = parseInt(prompt('年齢を入力してください'));
    judge_age(age);
    if(confirm("続きますか？") != true){
        i=false;
    }
}
function judge_age(age) {
    if(age >= 18) {
        alert('成人です');
    }else {
        alert('未成年です');
    }
}


/* Question 3 */
let point = 0;
let i = true;
while(i) {
    point = parseInt(prompt('点数を入力してください'));
    judge_point(point);
    if(confirm("続きますか？") != true){
        i=false;
    }
}
function judge_point(point){
    if(point >= 80){
        console.log('金');
    } else if(point >= 70) {
        console.log('銀');
    } else {
        console.log('銅');
    }
}

/* Question 4 */
let ondo = 0;
let i = true;
while(i) {
    ondo = parseInt(prompt('温度を入力してください'));
    judge_temp(ondo);
    if(confirm("続きますか？") != true){
        i=false;
    }
}
function judge_temp(temp) {
    if (temp >= 25) {
        alert('温度が' + temp + '度なので冷房を付けます');
    }　else if(ondo <= 18) {
        alert('温度が' + temp + '度なので暖房を付けます');
    }　else {
        alert ('快適なのでこのままです');
    }
}

/* Question 5 */
let num1 = 0, num2 = 0;
let i = true;
while(i) {
    input_num();
    judge_num(num1, num2);
    if(confirm("続きますか？") != true){
        i = false;
    }
}
function input_num() {
    let input = [];
    for(let i = 1; i <= 2; i++) {
        input.push(prompt('数字' + i + 'を入力してください'));
    }
    num1 = parseInt(input[0]);
    num2 = parseInt(input[1]);
}
function judge_num(num1, num2) {
    if (num1 > num2) {
        alert(num1+' は '+ num2 + ' より大きいです');
    } else if (num1 == num2) {
        alert(num1+' と '+ num2 + ' は等しいです');
    } else {
        alert(num1+' は '+ num2 + ' より小さいです');
    }
}


const size = 20;
const result = (size >= 30) ? '粗大ゴミ':'不燃ごみ';
console.log(result);

