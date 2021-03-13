
const validateEmail = email => (/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,10})$/).test(email)


const validateMobile = mobile =>  (/^[6-9]\d{9}$/).test(mobile)


const validateName = name => !(!name || name.length < 3 || name.length > 20)

const validateSubject = subject => !(!subject || subject.length < 7 || subject.length > 200)


const validateDescription = description => !(!description || description.split(" ").length < 10 ||  description.split(" ").length > 1024)

module.exports = {
  validateEmail,
  validateMobile,
  validateName,
  validateDescription,
  validateSubject
}
