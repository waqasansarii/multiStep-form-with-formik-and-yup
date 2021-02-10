import React from 'react'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import {addGender} from '../../globalState/createSlice'
import {useFormik} from 'formik'
import {functions} from '../../types/types'


const FormThree:React.FC<functions> = ({nextFunc})=> {

    const dispatch = useDispatch()

  const formik = useFormik({
      initialValues:{
          num:'' ,
          gender:'' 
      },
      onSubmit:(value)=>{
          nextFunc()
          setTimeout(()=>{
              dispatch(addGender(value))
              
          },1000)
      },
      validationSchema:yup.object().shape({
         gender : yup.string().required('required')
      })
  })

    return(
        <div>
            <form onSubmit={formik.handleSubmit} >
                <input 
                type="number" 
                className='names' 
                placeholder='Phone number (optional)' 
                name="num" 
                id="num"
                value={formik.values.num}
                onChange={formik.handleChange}
                />
                <select name="gender" id="gender" className='gender' onChange={formik.handleChange}>
                    <option value="">Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                {formik.errors.gender && formik.touched.gender ?
                <div className='error_msg'>{formik.errors.gender}</div>
                : null    
            }
                <input type="submit" className='btn' value="Finish" />

            </form>
        </div>
    );
}

export default FormThree ;