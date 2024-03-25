import React from 'react';
import { SIGN_UP_SCHEMA } from '../../schemas';

import { Formik, Form, Field } from 'formik';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

function SignUpForm(props) {
    const handleSubmitToFormik = (values, actions) => {
        console.log(values);
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialState} onSubmit={handleSubmitToFormik}>
            {(formikProps) => {
                return (
                    <Form>
                        <Field name='firstName' placeholder='Type your firstName' />
                        <Field name='lastName' placeholder='Type your lastName' />
                        <Field name='email' placeholder='Type your email' />
                        <Field name='password' placeholder='Type your password' />
                        <button type='submit'>Send</button>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default SignUpForm;