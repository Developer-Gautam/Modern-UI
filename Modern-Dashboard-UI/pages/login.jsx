import * as React from 'react';
import styles from "../styles/Login.module.css"
import A from "../public/onlyABlueLogo.png"
import TextField from '@mui/material/TextField';
import Image from 'next/image';


// For password 
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    return (
        <main className={styles.main}>


            <div className={styles.topSection}>
                <Image src={A} alt="" className={styles.logo} width={"40px"} height={"50px"} />
                <div>
                    <h4 className='text-sm'>Don't have a account? <span><a href='./signup' className='cursor-pointer'>Click here</a></span></h4>
                </div>
            </div>



            <div className={styles.formDiv}>

                <TextField id="standard-basic" label="Work Email" variant="standard" />
                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Passcode</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    className="text-sm"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>


            </div>

            <button className={styles.button} onClick={()=>window.location.href="/"}>Login</button>




        </main>
    )
}

export default Login
