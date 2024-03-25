import * as yup from 'yup';

export const LOGIN_SCHEME = yup.object ({
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
});

export const SIGN_UP_SCHEMA = yup.object({
    firstName: yup.string().required().min(1).max(50),
    lastName: yup.string().required().min(1).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
});


export default SIGN_UP_SCHEMA;