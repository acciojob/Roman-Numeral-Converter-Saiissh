function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	  if num == 0:
        return "N"
    
    roman_numeral = ''
    for value, symbol in roman_numerals.items():
        while num >= value:
            roman_numeral += symbol
            num -= value

	console.log(convertToRoman(36));
    return roman_numeral

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
