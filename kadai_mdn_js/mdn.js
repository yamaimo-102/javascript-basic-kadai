const date = new Date(); // 現在の日付を取得
const year = date.getFullYear();
const month = date.getMonth() + 1; // 月は0から始まるので+1
const day = date.getDate();

console.log(year + '年' + month + '月' + day + '日');