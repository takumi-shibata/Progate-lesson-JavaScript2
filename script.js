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
  console.log(number); //→1〜条件の100まで出力される
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
  } else {　//if文の条件に当てはまらない場合、変数numberを出力
    console.log(number); //→結果1・2・3の倍数です・4・5・3の倍数です・7〜97・98・3の倍数です・100と出力される
  }
}


//配列(複数の値をまとめて管理)
// 定数animals(定数名は複数形)に、指定された配列を代入してください
const animals = ["dog","cat","sheep"]; //配列も1つの値なので、定数に代入することができる。
// 定数animalsを出力して下さい
console.log(animals); //→["dog","cat","sheep"]


//配列の要素の取得
const animals = ["dog", "cat", "sheep"]; //配列の要素にはそれぞれインデックス番号という番号がついている(左から順に0・1・2)
// 配列の1つ目の要素を出力してください
console.log(animals[0]); //→dog
// 配列の3つ目の要素を出力してください
console.log(animals[2]); //→sheep


//配列の更新
const animals = ["dog", "cat", "sheep"];
// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit"; 
// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]); //→rabbit


//配列の繰り返し
const animals = ["dog", "cat", "sheep"];　//インデント番号は0~2。要素は3つ
// for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3; i += 1) {　//変数名はiを用いる。変数の値はインデント番号「0」から始めることに注意！ i < 3(要素数)
  console.log(animals[i]); //条件にある要素を出力→dog,cat,sheep
}

const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
// lengthを用いて配列の要素の数を出力してください
console.log(animals.length); //定数名.lengthとすることで、配列の要素数を取得できる→8
// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i += 1) { //「i < 8」を「i < animals.length」に書き換え可能
  console.log(animals[i]); //条件にある要素を出力→dog,cat,sheep,rabbit,monkey,tiger,bear,elephant
}