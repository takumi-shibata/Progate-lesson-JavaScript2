// 変数numberを定義してください
let number = 0;

// 変数numberに1を加えて、その後に変数numberの値を出力してください
number += 1;
console.log(number); //→1

// 変数の値の更新
number += 1;
console.log(number); //→2

number += 1;
console.log(number); //→3

number += 1;
console.log(number); //→4

number += 1;
console.log(number); //→5


//繰り返し処理(while文)
// 変数numberを定義してください
let number = 1;
// 繰り返し処理
while (number <= 100) {
  console.log(number); //1〜条件の100まで出力される。
  number += 1; //繰り返す処理は1つの記載で大丈夫。記載がないと無限ループに陥る(条件の100まで繰り返し1を足し続ける)
}


//繰り返し処理(for文)
for (let number = 1; number <= 100; number += 1) { //for文はwhile文の簡略版。(変数、条件、繰り返し処理を一つにまとめる)
  console.log(number);
}

for (let number = 1; number <= 100; number += 1) {
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if (number %3 === 0) { //「3の倍数である」という条件は、「(a(number))を3で割った余りが、(b)0と等しい」
    console.log("3の倍数です");
  } else {
    console.log(number); //if文の条件に当てはまらない場合、変数numberを出力
  }　//→結果1・2・3の倍数です・4・5・3の倍数です・7〜97・98・3の倍数です・100と出力される
}
