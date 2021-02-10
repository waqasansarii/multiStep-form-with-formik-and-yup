import React from 'react'
import {useSelector} from 'react-redux'
import './style.css'
import {RootState} from '../../store/store'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
        // margin:'0rem auto'
      },
    },
  }));

const UserInfo = () => {

    const selector = useSelector((state:RootState)=>{
        return state
    })

    console.log(selector.FormReducer)

    let {firstName, lastName , gender , email} = selector.FormReducer

    console.log(firstName , gender)

    const classes = useStyles();
    if(!gender){

        return (
          <div className={classes.root}>
            <CircularProgress className='circle' />
          </div>
        );
      
    }

    return(
        <div>
            <div className='user_info_div' >
                <p className='info'>Name : {firstName + ' ' + lastName}  </p>
                <p className='info'>Email : {email} </p>
                <p className='info'>Gender : {gender}</p>
            </div>
        </div>
    )
}

export default UserInfo