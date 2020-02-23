module.exports = function createDreamTeam(members) {

  let teamName = "";
  if (!Array.isArray(members) || members.length == 0)
    return teamName;

  let realMembers = members.filter(name => {
    if (typeof (name) != "string" || name == "")
      return false;
    else
      return true;
  }).map(value => { return value.trim().toUpperCase(); }).sort();

  return realMembers.reduce((teamName, value) =>
    teamName + value[0], "");
};