module.exports = function repeater(str, options) {

    if (typeof (str) != "string") {
        str = String(str);
    }
    let separator = options.separator ? options.separator : "+";
    let additionSeparator = options.additionSeparator ? options.additionSeparator : "|";
    let addition = typeof(options.addition) != "undefined" ? String(options.addition) : "";
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;

    let strAdd = "";
    let newStr="";
    if(additionRepeatTimes==1)
      strAdd = addition;
    else
    {
      for(let j=1; j<additionRepeatTimes;j++){
        strAdd += additionSeparator+addition;
      }
      strAdd = addition+strAdd;
    }
    if (repeatTimes>1) {
        for (let i = 1; i < repeatTimes; i++) {
            newStr += separator + str + strAdd;
        }
    }

    return str + strAdd + newStr; 
};
