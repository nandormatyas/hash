function hash(string) {
  let nr = 13;
  let chars = string.split('');
  for (let i = 0; i < string.length; i++) {
    nr = nr * 43 + 'acdegijmnoprstuw'.indexOf(string.charAt(i));
  }
  return nr;
}

function decode(number) {
  const leftovers = [];
  while (number !== 13) {
    const leftover = number % 43;
    leftovers.push(leftover);
    var number = (number - leftover) / 43;
  }
  return leftovers;
}

function wordmaker(indices) {
  const characterPool = 'acdegijmnoprstuw';
  const chars = [];
  for (let i = 0; i < indices.length; i++) {
    chars.push(characterPool[indices[i]]);
  }
  const word = chars.reverse().join('');
  return word;
}

module.exports = { decode, wordmaker } ;

//console.log(wordmaker(decode('3552907293224')))
//wordmaker(decode('3552907293224'));

