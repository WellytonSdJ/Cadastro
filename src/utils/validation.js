let constraints = {
  newPassword: {
    format: {
      pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#$@!%&*?]).{8,12}$/gm,
      // message: function (){}
    }
  }
}

const validation = () => {
  // console.log('validation ok AAAAA')
  // validate({newPassword: "12"}, constraints)
  
}

export default validation;