import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';


const schema = yup.object().shape({
    wheels: yup.string().required('Please select the number of wheels'),
});

const WheelType = () => {
    const params = useLocation()
    let navigate = useNavigate()

    return (
        <div class='container' style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Formik
                initialValues={{
                    wheels: '',
                }}
                validationSchema={schema}
                onSubmit={async (values) => {

                    const { data } = await axios.get(`http://127.0.0.1:2700/vehicletype/${values.wheels}`).catch(error => {
                        console.log(error);
                    });
                    navigate('/Bookings', { state: { ...params, values, data } })
                }}
            >
                {({ values, errors, touched, isValid, handleChange, handleBlur, handleSubmit }) => (

                    <Form onSubmit={handleSubmit} >
                        <RadioGroup
                            name="wheels"
                            value={values.wheels}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="2 Wheels"
                                labelPlacement="end"
                            // icon={<Motorcycle />}
                            />
                            <FormControlLabel
                                value="4"
                                control={<Radio />}
                                label="4 Wheels"
                                labelPlacement="end"
                            // icon={<Car />}
                            />
                        </RadioGroup>
                        {touched.wheels && errors.wheels ? (
                            <div style={{ color: 'red' }}>{errors.wheels}</div>
                        ) : null}
                        <Button variant="contained" endIcon={<SendIcon />} disabled={!isValid} type='submit'>
                            Next
                        </Button>
                    </Form>

                )}
            </Formik>
        </div>
    );
};

export default WheelType;
