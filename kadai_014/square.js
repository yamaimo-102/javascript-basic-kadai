const calculateSquare = (num) => {
    const result = num * num; // 引数を二乗した結果を計算
    return result; // 結果を戻り値として返す
};

// 戻り値を変数に保存する
const squareOfTen = calculateSquare(10);

// 確認のためにコンソールに出力する
console.log(squareOfTen);