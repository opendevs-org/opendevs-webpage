function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;

  if (reg.test(email) == false) return false;
  return true;
}

function validateMobile(mobile) {
  if (mobile.length === 0) return true;
  if (mobile.length !== 10 || isNaN(mobile)) return false;
  return true;
}

function validateName(name) {
  if (!name || name.length < 3 || name.length > 20) return false;
  return true;
}

function validateSubject(subject) {
  if (!subject || subject.length < 7 || subject.length > 200) return false;
  return true;
}

function validateDescription(Description) {
  if (Description.length === 0) return true;
  if (
    !Description ||
    Description.split(" ").length < 10 ||
    Description.split(" ").length > 1024
  )
    return false;

  return true;
}

module.exports = {
  validateEmail,
  validateMobile,
  validateName,
  validateDescription,
  validateSubject
};
