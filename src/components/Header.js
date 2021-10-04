import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { makeStyles } from '@mui/styles'
import { NavLink } from 'react-router-dom'
const UseStyles=makeStyles(
    {
        header:{
            backgroundColor:'#000000',
            '& > *' :{
                paddingRight:'15px',
                textDecoration:'none',
                color:'#FFFFFF'
            }
        },

    }
);

export default function Header() {

    const classes=UseStyles();
    return (
       <>
        <AppBar position="static">
            <Toolbar className={classes.header} >
                <NavLink to='/' exact>UserData</NavLink> 
                {/* <NavLink to='/users' >All Users</NavLink> 
                <NavLink to='/add' exact>Add users</NavLink>  */}
            
            </Toolbar>
        </AppBar>
       </>
    )
}
