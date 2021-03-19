// 練習
// var age = 65;
// var isMember = true;
// var result = null;
// if (age >= 60 && isMember) {
//     result = 'シニア会員対象の割引です';
// } else {
//     result = 'シニア会員対象の割引ではありません';
// };
// document.write(result);

//課題
// var age = 16;
// var PMember = true;
// var result = null;
// if (age <= 15) {
//     result = '映画のチケットは800円です';
// } else if (PMember){
//     result = '映画のチケットは1000円です';
// } else {
//     result = '映画のチケットは1800円です';
// };
// document.write(result)

// Advance課題
var age = 16;
var PMember = true;
document.write(
  age >= 15 ? PMember === false ? '映画のチケットは1800円です。'
            : '映画のチケットは1000円です。'
            : '映画のチケットは800円です。'
);

// 条件１ ? 条件２ ? "条件１かつ条件２に当てはまる" 
    // : "条件１に当てはまり、条件２は当てはまらない" 
    // : "条件１に当てはまらない（２の該当にかかわらず）" ;



//作ってみよう　
var ages = 20;
var drinker = true;
var present = null;
if ( ages < 20 ) {
    present = 'ケーキ';
} else if( ages >= 20 && drinker ) {
    present = 'お酒';
} else {
    present = 'オリジナルコーヒー';
}
document.write( 'プレゼントには' + present + 'がおすすめです。')