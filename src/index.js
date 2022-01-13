module.exports = function toReadable (number) {
    let doubleDigits = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let dozenDigits = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let hundreds = Math.floor(number/100);
    let dozens = Math.floor((number-hundreds*100)/10);
    let single = number - hundreds * 100 - dozens * 10;
    console.log('-'+ dozens + '-' + single);

    let hundredText='';
    let finalText='';

    if (hundreds > 0) {
        hundredText = doubleDigits[hundreds] + ' hundred';
        if((number-hundreds*100) > 0 ) {
            hundredText = hundredText + ' ';
        }
    }
    else {
        hundredText = '';
    }

    if((dozens*10+single) > 0 ) {
        if (dozens < 2) {
            finalText = doubleDigits[dozens*10 + single];
        }
        else {
            finalText=dozenDigits[dozens];
            if(single!==0) {
                finalText +=  ' ' + doubleDigits[single];
            }
        }
    }
    

  if(number !== 0) {
    return hundredText+finalText;
  }
  else{
    return 'zero';
  }  
  
}
