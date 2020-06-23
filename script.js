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
  console.log(number); 
  // →1〜条件の100まで出力される
  number += 1;
  //繰り返す処理は1つの記載で大丈夫。記載がないと無限ループに陥る(条件の100まで繰り返し1を足し続ける)
}


//繰り返し処理(for文)
// for文はwhile文の簡略版。(変数、条件、繰り返し処理を一つにまとめる)
for (let number = 1; number <= 100; number += 1) {
  console.log(number);
  // →1〜条件の100まで出力される
}


for (let number = 1; number <= 100; number += 1) {
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if (number %3 === 0) {
  //「3の倍数である」という条件は、「(a(number))を3で割った余りが、(b)0と等しい」
    console.log("3の倍数です");
  } else {　
  // if文の条件に当てはまらない場合、変数numberを出力
    console.log(number);
  // →結果1・2・3の倍数です・4・5・3の倍数です・7〜97・98・3の倍数です・100と出力される
  }
}


//配列(複数の値をまとめて管理)
// 定数animals(定数名は複数形)に、指定された配列を代入してください
const animals = ["dog","cat","sheep"];
// 配列も1つの値なので、定数に代入することができる。
// 定数animalsを出力して下さい
console.log(animals);
// →["dog","cat","sheep"]


//配列の要素の取得
const animals = ["dog", "cat", "sheep"];
// 配列の要素にはそれぞれインデックス番号という番号がついている(左から順に0・1・2)
// 配列の1つ目の要素を出力してください
console.log(animals[0]); // →dog
// 配列の3つ目の要素を出力してください
console.log(animals[2]); // →sheep


//配列の更新
const animals = ["dog", "cat", "sheep"];
// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit"; 
// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]); //→rabbit


//配列の繰り返し
const animals = ["dog", "cat", "sheep"];　// インデント番号は0~2。要素は3つ
// 繰り返し処理for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3; i += 1) {
  // インデント番号の繰り返し処理、変数名はiを用いる。代入する変数の値はインデント番号「0」から始めることに注意！ i < 3(要素数)
  console.log(animals[i]);
  // [i]は繰り返し表示を行うインデント番号。
  // →dog,cat,sheep
}


const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);
// 定数名.lengthとすることで、配列の要素数を取得できる→8
// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i += 1) {
  //「i < 8」を「i < animals.length」に書き換え可能
  console.log(animals[i]);
  // →dog,cat,sheep,rabbit,monkey,tiger,bear,elephant
}


//オブジェクト(配列と同じく複数のデータをまとめて管理。それぞれの値にプロパティと呼ばれる名前をつけて管理)
// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {name:"にんじゃわんこ",age:14};
// characterの値を出力してください
console.log(character);
// →{name:"にんじゃわんこ",age:14}


//オブジェクトの値の取得・更新
const character = {name: "にんじゃわんこ", age: 14};
// characterのnameの値を出力してください
console.log(character.name);
// →にんじゃわんこ
// characterのageの値を「20」に更新してください
character.age = 20;
// characterをコンソールに出力してください
console.log(character);
// →{name: "にんじゃわんこ", age: 20}


//オブジェクトを要素に持つ配列
const characters = [
  {name: "にんじゃわんこ", age: 14}, //インデント番号「0」
  {name: "ひつじ仙人", age: 1000}   //インデント番号「1」
];
// charactersの1つ目の要素をコンソールに出力してください
console.log(characters[0]);
// →{name: "にんじゃわんこ", age: 14}
// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log(characters[1].name);
// →ひつじ仙人


const characters = [　
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];  // charactersにオブジェクトを要素に持つ配列を代入

// for文を完成させてください
for (let i = 0; i < characters.length; i += 1) {　
  // name・ageそれぞれ出力するのは手間がかかるので繰り返し処理。
  // インデント番号の繰り返し処理、変数名はiを用いる。代入する変数の値はインデント番号「0」から始めることに注意！
  //「i < 3」を「i < animals.length」に書き換え。
  console.log("--------------------");  
  // 定数characterを定義してください
  const character = characters[i]; 
  // characterにcharactersの代入内容と繰り返し表示を行うインデント番号を代入  
  // 「名前は〇〇です」を出力してください
  console.log("名前は" + character.name + "です");
  //「文字列の連結 "" + ""」もしくは「テンプレートリテラル ${}」  
  // 「〇〇歳です」を出力してください
  console.log(character.age + "歳です"); 
  //　→出力(名前はにんじゃわんこです　14歳です　名前はひつじ仙人です　100歳です　名前はベイビーわんこです　5歳です)
}


//undefinedの対応(「undefined」は配列の存在しないインデックス番号の要素や、オブジェクトの存在しないプロパティの要素を取得しようとすると出力される)
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"} // age(年齢)のプロパティがないので、出力するときに「undefined歳です」と出る
];

for (let i = 0; i < characters.length; i += 1) {
  console.log("--------------------");  
  const character = characters[i];  
  console.log(`名前は${character.name}です`);  
  // if文を追加してください
  if (character.age === undefined) {　
  // if文でundefinedの時の処理。「===」 →　a(character.age)が、b(undefined)になる時は(と一致する時は)
    console.log("年齢は秘密です");
  } else {　
  // if文に該当しない時の処理(character.ageの値が定義されている時の処理)
    console.log(character.age + "歳です");
  // →出力(名前はにんじゃわんこです　14歳です　名前はひつじ仙人です　100歳です　名前はベイビーわんこです　5歳です　名前はとりずきんです　年齢は秘密です)
  }
}


//オブジェクトを要素に持つオブジェクト
const cafe = {
  name: "Progateカフェ",
  //オブジェクトの中にオブジェクト
  businessHours: {
  // businessHoursの値に指定されたオブジェクトを代入してください
    opening:"10:00(AM)",
    closing:"8:00(PM)"
  },
};
// 「店名:〇〇」を出力してください
console.log("店名:" + cafe.name);
// 「営業時間:〇〇から△△」を出力してください
console.log("営業時間:" + cafe.businessHours.opening + "から" + cafe.businessHours.closing)
// オブジェクトの中のオブジェクトを出力する時は、大元のオブジェクト名.オブジェクト.オブジェクト
// →出力(店名:Progateカフェ　営業時間:10:00(AM)から8:00(PM))


//配列とオブジェクトを要素に持つオブジェクト
const cafe = {
  name: "Progateカフェ",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  // オブジェクトの中に配列
  menus:["コーヒー","紅茶","チョコレートケーキ"]
};
console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");
// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i < cafe.menus.length; i += 1) {
// cafe.menus.lengthになることに注意！
  console.log(cafe.menus[i]);　
}