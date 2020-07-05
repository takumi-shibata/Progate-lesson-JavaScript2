// 1.繰り返し処理(while)
// 変数numberを定義してください
let number = 1;
// 繰り返し処理
while (number <= 100) {
  console.log(number); 
  number += 1;
  //繰り返す処理は1つの記載で大丈夫。記載がないと無限ループに陥る(条件の100まで繰り返し1を足し続ける)
}
// →1・2・3・4・5...95・96・97・98・99・100


// 2.繰り返し処理(for)
// for文はwhile文の簡略版。(変数、条件、繰り返し処理を一つにまとめる)
for (let number = 1; number <= 100; number += 1) {
  console.log(number);
}
// →1・2・3・4・5...95・96・97・98・99・100


for (let number = 1; number <= 100; number += 1) {
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  //「3の倍数である」という条件は、「(a(number))を3で割った余りが、(b)0と等しい」
  if (number % 3 === 0) {
    console.log("3の倍数です");
    // if文の条件に当てはまらない場合、変数numberを出力
  } else {　
    console.log(number);
  }
}
// →1・2・3の倍数です・4・5・3の倍数です・7...97・98・3の倍数です・100