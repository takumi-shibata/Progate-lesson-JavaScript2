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


// 2.繰り返し処理(for(1))
// for文はwhile文の簡略版。(変数、条件、繰り返し処理を一つにまとめる)
for (let number = 1; number <= 100; number += 1) {
  console.log(number);
}
// →1・2・3・4・5...95・96・97・98・99・100


// 3.繰り返し処理(for(2))
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


// 4.配列[値1,値2,値3...];
// 指定された配列を代入してください
// ※定数名は複数形！ 数字以外は「" "」をつけること！ 末尾の「;」を忘れないこと！
const animals = ["dog","cat","sheep"];
// 定数animalsを出力して下さい
console.log(animals);
// →["dog","cat","sheep"]


// 5.配列の要素を取得する
const animals = ["dog", "cat", "sheep"];
// 配列の要素にはそれぞれインデックス番号という番号がついている(左から順に0・1・2)

// 配列の1つ目の要素を出力してください
console.log(animals[0]);
// →dog

// 配列の3つ目の要素を出力してください
console.log(animals[2]);
// →sheep


// 6.配列の更新
const animals = ["dog", "cat", "sheep"];
// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit"; 
// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]);
//→rabbit


// 7.配列の繰り返し(1)
const animals = ["dog", "cat", "sheep"];
// インデント番号は0~2。要素数は3つ

// 繰り返し処理for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3; i += 1) {
  // インデント番号の繰り返し処理、変数名はiを用いる。代入する変数の値はインデント番号「0」から始めることに注意！ i < 3(要素数)
  console.log(animals[i]);
  // [i]は繰り返し表示を行うインデント番号。
}
// →dog,cat,sheep


// 8.配列の繰り返し(2)
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
// lengthを用いて配列の要素の数を出力してください
// 定数名.lengthとすることで、配列の要素数を取得できる
console.log(animals.length);
// →8

// lengthを用いて条件式を書き換えてください
//「i < 8」を「i < animals.length」に書き換え可能
for (let i = 0; i < animals.length; i += 1) {
  console.log(animals[i]);
}
// →dog,cat,sheep,rabbit,monkey,tiger,bear,elephant
