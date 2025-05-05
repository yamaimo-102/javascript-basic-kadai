document.addEventListener('DOMContentLoaded', function() {
    // ボタン要素とテキスト要素を取得します
    const button = document.getElementById('btn');
    const textElement = document.getElementById('text');
  
    // ボタンがクリックされたときのイベントリスナーを追加します
    button.addEventListener('click', function() {
      // テキスト要素の内容を変更します

      // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
    textElement.textContent = 'ボタンをクリックしました';
  }, 2000);
    });
  });