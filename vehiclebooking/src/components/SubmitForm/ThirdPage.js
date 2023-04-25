import * as React from 'react';
import dayjs from 'dayjs';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';

const schema = yup.object().shape({
    vehicletype: yup.string().required('Please select the number of wheels'),
});

export default function BookingDate() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [Vehicles, setVehicles] = React.useState({});
    console.log('me', Vehicles)
    const params = useLocation()
    let navigate = useNavigate()
    console.log('hello', params.state.values.wheels)
    return (
        <div>
            <div class='container' style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Formik
                    initialValues={{
                        vehicletype: '',
                    }}
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        const selectedVeh = values.vehicletype
                        const vehicledata = await axios.get(`http://127.0.0.1:2700/vehicleList/${params.state.values.wheels}/${values.vehicletype}`).catch(error => {
                            console.log(error);
                        });
                        let vehdata = vehicledata?.data
                        navigate('/VehicleDetails', { state: { ...params, vehdata,selectedVeh } })
                    }}
                >
                    {({ values, errors, touched, isValid, handleChange, handleBlur, handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <RadioGroup
                                name="vehicletype"
                                value={values.vehicletype}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                {params.state.data.map((item) => {
                                    return (<FormControlLabel
                                        value={item}
                                        control={<Radio />}
                                        label={item}
                                        labelPlacement="end"
                                    />)
                                })}
                            </RadioGroup>
                            {touched.vehicletype && errors.vehicletype ? (
                                <div style={{ color: 'red' }}>{errors.vehicletype}</div>
                            ) : null}
                            <Button variant="contained" endIcon={<SendIcon />} disabled={!isValid} type='submit'>
                                Next
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div>
            </div>

        </div>
    );
}