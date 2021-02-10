import React from 'react'
import {   useFormik } from 'formik'
import {addName} from '../../globalState/createSlice'
import {useDispatch,useSelector} from 'react-redux'
import * as yup from 'yup'
import './style.css'
import {functions} from '../../types/types'



const PersonalData:React.FC<functions> = ({nextFunc}) => {

  const selector = useSelector((state)=>{
       return state
  })
  
  const dispatch = useDispatch()
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    onSubmit: (values) => {
      // console.log(values)
      nextFunc()
      dispatch(addName(values))
      console.log(selector)
    },
    validationSchema:  yup.object().shape({
      firstName: yup.string()
      .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('This field is  required'),
            
            lastName: yup.string()
            .min(2,'Too short')
            .max(50,'Too long')
            .required('This field is  required')
          })
      })
      

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    id="firstName"
                    // name="email"
                    className='names'
                    placeholder='First Name'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName ? 
                <div className='error_msg'>{formik.errors.firstName}</div>
                 : null
                 }
                <input     
                    type="text"
                    id='lastName'
                    className='names'
                    placeholder='Last Name'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName ?
                 <div className='error_msg'>{formik.errors.lastName}</div> 
                 : null
                 }
                <input type="submit" className='btn' value="Next" />
            </form>
        </div>
    )
}

export default PersonalData