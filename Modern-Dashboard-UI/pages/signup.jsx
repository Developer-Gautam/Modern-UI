import * as React from 'react';
import styles from "../styles/Signup.module.css"
import A from "../public/A.png"
import TextField from '@mui/material/TextField';
import Image from 'next/image';

// For password 
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


const Signup = () => {


    // for password input 

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (




        <main className={styles.main}>


            <div className={styles.topSection}>
                <Image src={A} alt="" className={styles.logo} width={"100px"} height={"35px"} />
                <div>
                    <h4 className='text-sm'>Have account?<span><a href='./login' className='cursor-pointer'>Log in</a></span></h4>
                </div>
            </div>



            <div className={styles.headings}>
                <h1 className='text-3xl font-bold mb-[10px]'>Signup for the Best Corporate Card!</h1>

                <h3 >Takes less than 5 minutes to signup</h3>
            </div>



            <div className={styles.formDiv}>

                <TextField id="standard-basic" label="First name" variant="standard" />
                <TextField id="standard-basic" label="Last name" variant="standard" />
                <TextField id="standard-basic" label="Mobile number" variant="standard" />
                <TextField id="standard-basic" label="Work email" variant="standard" />


                {/* set a password  */}

                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Set a passcode</InputLabel>
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

                {/* confotm you password*/}

                <FormControl variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">confirm your passcode</InputLabel>
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

            <button className={styles.button} onClick={() => window.location.href = "/"}>Get started</button>








        </main>

    )
}

export default Signup
