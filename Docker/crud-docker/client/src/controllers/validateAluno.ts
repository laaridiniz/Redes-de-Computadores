import * as Yup from 'yup'

const registrationSchema = Yup.object().shape({
    nome: Yup.string()
      .required('O nome  é obrigatório'),

    email: Yup.string()
      .required('O e-mail é obrigatório'),

    curso: Yup.string()
      .required('O curso é obrigatório'),

  })
  
  export default registrationSchema;
