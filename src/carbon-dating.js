const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG2 = 0.693;

module.exports = function dateSample(sampleAct) {

  if (typeof (sampleAct) != "string")
    return false;

  let numSampleAct = parseFloat(sampleAct);

  if (isNaN(numSampleAct) || numSampleAct <= 0 || numSampleAct > 15)
    return false;

  let ageStr = Math.ceil(Math.log(MODERN_ACTIVITY / numSampleAct) * HALF_LIFE_PERIOD /LOG2 );
  return ageStr;
};
