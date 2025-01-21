import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from '../../constants';


const dressesSchema = Yup.object().shape({

image: Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
name: Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
price: Yup.number()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required')
});

const Add = () => {

const [dresses, setDresses] = useState([])

const getAllDresses = async () =>{
    const res = await axios.get(`${BASE_URL}`)
    setDresses(res.data)
    
}

    return (
        <>


  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        image: '',
        name: '',
        price: 0,
      }}
      validationSchema={dressesSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="image" />
          {errors.image && touched.image ? (
            <div>{errors.image}</div>
          ) : null}
          <Field name="name" />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <Field name="price" type="number" />
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>

    </>
  )
}

export default Add
