import * as yup from 'yup';

const loginSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Senha deve ter no mínimo 6 caracteres.')
    .required('Senha obrigatória!'),
  email: yup
    .string()
    .email('Formato de e-mail inválido!')
    .required('E-mail obrigatório!'),
});
export default loginSchema;
