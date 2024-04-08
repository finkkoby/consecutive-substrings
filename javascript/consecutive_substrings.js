function consecutiveSubstrings(string) {
  let answer = []
  for (let index in string) {
    for (let i = 1; i + parseInt(index) <= string.length; i++) {
      let substring = string.slice(index, i + parseInt(index))
      answer.push(substring)
    }
  }
  return answer
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// let answer = []
// for index in string
//    for let i
//        string.slice(index, i)
// And a written explanation of your solution
