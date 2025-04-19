//変数numに1以上の正数を代入
let num = 15;

//変数numが3の倍数であれば、「3の倍数です」という文字列を出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log(`3と5の倍数です`);
} else if (num % 3 === 0) {
    console.log(`3の倍数です`);
} else if (num % 5 === 0) {
    console.log(`5の倍数です`);
} else {
    console.log(num);
}