import * as yup from "yup";

const validation = yup.object().shape({
  currentPassword: yup.string().required("Campo obrigatório"),
  newPassword: yup.string("Deve conter letras").required("Campo obrigatório")
    .min(8, "O minimo de caracteres é 8")
    .max(12, "O máximo de caracteres é 12")
    .matches( /^(?=.*[}{,$.\@!%&#^\](?)~[=+\-_*\-+.\|]).{1,}$/ ,"Deve conter um caractere especial")
    .matches( /^(?=.*[A-Z]).{1,}$/,"Uma letra deve ser maiúscula")
    .matches( /^(?=.*[0-9]).{1,}$/,"Deve conter números")
    // .matches( ,"Deve conter números")
  ,
  confirmNewPassword: yup.string().required("Campo obrigatório")
    .oneOf([yup.ref('newPassword'), null], 'Precisa ser igual a Nova Senha'),
})


export default validation;