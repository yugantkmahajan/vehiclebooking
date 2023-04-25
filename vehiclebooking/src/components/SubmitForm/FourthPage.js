import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const schema = yup.object().shape({
    vehicles: yup.string().required('Please select the vehicle'),
    startDate: yup.date().required('Please select date'),
    endDate: yup.date().required('Please select date')
});

export default function VehicleDetails() {
    // const [startDate, setValueStartDate] = React.useState();
    // const [endDate, setValueEndDate] = React.useState();
    const params = useLocation();
    const fname = params?.state?.state?.state?.firstName
  
    const lname = params?.state?.state?.state?.lastName
 
    const wheels = params?.state?.state?.values?.wheels
    
    const vehicletype = params?.state?.selectedVeh
 

    let navigate = useNavigate()
    return (
        <div class='container' style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} >
            <Formik
                initialValues={{
                    vehicles: '',
                    startDate:'',
                    endDate:'',
                }}
                validationSchema={schema}
                onSubmit={async (values) => {
                    console.log(values)
                      const body ={
                        firstname:fname,
                        lastname:lname,
                        wheels:wheels,
                        vehicaltype:vehicletype,
                        vehicalmodel:values.vehicles,
                        Startdate:values.startDate,
                        Enddate:values.endDate
                      }
                      try {
                        await axios.post(`http://127.0.0.1:2700/submitform/`,
                         body
                        ).catch(error => {
                            console.log(error);
                        });
                        alert("Booking Confirm")
                      } catch (error) {
                        console.log(error)
                      }
                      
                
                  //</div>  navigate('/Bookings',{state:{...params,values,data}})
                }}
            >
                {({ values, errors, touched, isValid, handleChange, handleBlur, handleSubmit,setFieldValue }) => (
                    <>
                    <Form onSubmit={handleSubmit}>
                        <div style={{display:'flex'}}>
                        <RadioGroup
                            name="vehicles"
                            value={values.vehicles}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            {params.state.vehdata.map((item) => {
                                return (<FormControlLabel
                                    value={item ? item?.CarName : item?.BikeName}
                                    control={<Radio />}
                                    label={item ? item?.CarName : item?.BikeName}
                                    labelPlacement="end"
                                />)
                            })}
                        </RadioGroup>
                        {touched.vehicles && errors.vehicles ? (
                            <div style={{ color: 'red' }}>{errors.vehicles}</div>
                        ) : null}
                  
                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DemoContainer  components={['DatePicker', 'DatePicker']}>
                        <DatePicker label="Start Date"
                            value={values.startDate}
                            onChange={(value)=>setFieldValue("startDate", value, true)}
                        />
                        <DatePicker
                            label="End Date"
                            value={values.endDate}
                            onChange={(value)=>setFieldValue("endDate", value, true)}
                           
                        />
                    </DemoContainer>
                </LocalizationProvider>
              
              
                        </div>
                        <Button variant="contained" type='submit' fullWidth>
                            Submit
                        </Button>
                </Form>
                </>
              )}
            </Formik>
        </div>
    );
}