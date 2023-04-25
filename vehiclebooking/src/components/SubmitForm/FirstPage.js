import React from 'react'
import { TextField } from '@mui/material';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .required('First name is required'),
    lastName: yup
        .string('Enter your last name')
        .required('Last name is required'),
});

const SubmitForm = () => {
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            navigate('/Wheels', { state: values })
        },
    });
    return (
        <div class='container' style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} >
            <form onSubmit={formik.handleSubmit} style={{
                // height: '5vh',
                border: '2px solid grey',
                width: '50vw',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '50px'
            }}>
                <div className="mb-3" >
                    <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </div>
                <div className="mb-3">
                    <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </div>
                <Button variant="contained" endIcon={<SendIcon />} disabled={!formik.isValid} type='submit'>
                    Next
                </Button>
            </form>
        </div>
    )
}

export default SubmitForm