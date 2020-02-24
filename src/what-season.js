module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.constructor !== Date) {
    throw new Error();
  }

  try {
    date.valueOf();
  }
  catch{
    throw new Error();
  };


  let month = date.getMonth();

  if (month < 2 || month == 11)
    return "winter";
  if (month >= 2 && month < 5)
    return "spring";
  if (month >= 5 && month < 8)
    return "summer";
  if (month >= 8 && month <= 10)
    return "autumn";
};
