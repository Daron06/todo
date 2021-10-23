// let str = 'Г0р0д0к как к0р0б0к';
// let str1 = 'Ск0льк0 лет, ск0льк0 зим';
// let str2 = 'Чт0 эт0 за п0кем0н?';
// let str3 = '0ле 0ле 0ле 0ле, Р0ссия, вперёд';
// let str4 = 'С0лнце м0ё, я тв0й зайчик';
// let str5 = '7еперь 7ебе 7рындец';

// let changeZeroToO = (text, num, letter) => {
//   let writeStr = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === String(num)) {
//       writeStr += letter;
//     } else {
//       writeStr += text[i];
//     }
//   }
//   return writeStr;
// };

// console.log(changeZeroToO(str, 0, 'о'));
// console.log(changeZeroToO(str1, 0, 'о'));
// console.log(changeZeroToO(str2, 0, 'о'));
// console.log(changeZeroToO(str3, 0, 'о'));
// console.log(changeZeroToO(str4, 0, 'о'));
// console.log(changeZeroToO(str5, 7, 'т'));

// let str = 'its-my-live-its-my-world';
// let strCamelCase = '';

// for (let i = 0; i < str.length; i++) {
// 	if(str[i] === '-') {
//     strCamelCase += str[i+1].toUpperCase()
//     i++;
//   } else {
//     strCamelCase += str[i]
//   }
// }

// console.log(strCamelCase);

// let func = (text) => {
//   let strCamelCase = '';

//   for (let i = 0; i < text.length; i++) {
//     if(text[i] === '-') {
//       strCamelCase += text[++i].toUpperCase()
//     } else {
//       strCamelCase += text[i]
//     }
//   }
//   return strCamelCase;
// }

// console.log(func('и-снится-нам-не-рокот-космодрома'))
// console.log(func('не-эта-ледяная-синева'))
// console.log(func('а-снится-нам-трава-трава-у-дома'))
// console.log(func('зелёная-зелёная-трава'))
