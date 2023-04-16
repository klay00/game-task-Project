import * as Yup from 'yup';

export  const useSchema = Yup.object().shape({
    email: Yup.string().email().max(20, 'most be less then 20 charecter').min(6, 'most be large then 6 charecter').required(),
    password: Yup.string().max(20, 'most be less then 20 charecter').min(6, 'most be large then 6 charecter').required(),
})