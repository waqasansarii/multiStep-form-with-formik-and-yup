import React from 'react'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import {addEmail} from '../../globalState/createSlice'
import {functions} from '../../types/types'


const FormTwo:React.FC<functions> = ({nextFunc})=> {

    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:(value)=>{
            console.log(value)
            nextFunc()
            dispatch(addEmail(value))
        },
        validationSchema:yup.object().shape({
            email:yup.string()
            .email('Invalid Email')
            .required('Email is required'),

            password:yup.string()
            .uppercase('one latter should be uppercase')
            .min(6,'password is too Short!')
            .max(20,'password is too Long!')
            .required('password is required')
        })
        
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                 type="email"
                  name="email" 
                  id="email"
                  className='names'
                  placeholder='Email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ?
                   <div className='error_msg'>{formik.errors.email}</div>
                   :null
                   }
                <input 
                type="password"
                 name="password"
                  id="password"
                  className='names'
                  placeholder='Password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ?
                   <div className='error_msg'>{formik.errors.password}</div>
                   :null
                   }
                <input type="submit" className='btn' value="Next" />

            </form>
        </div>
    )
}

export default FormTwo 