
import sparkLogo from "../public/sparkLogo.png"
import Link from 'next/link'
import styles from "../styles/navbar.module.css"
import Image from "next/image"



const Navbar = () => {
    return (
        <div className={styles.navDiv}>


            <Link href="/">
                <Image src={sparkLogo} alt="SPARK_LOGO" className={styles.sparkLogo} />
            </Link>



            <div className={styles.menu}>

                <div style={{marginRight:"20px"}}>
                    <Link href="/">SparkCard</Link>
                    <Link href="/about">About Us</Link>
                    <a href="https://huip9wud888.typeform.com/to/bNQbwFMG" className={styles.signUp}>Join the Waitlist</a>
                </div>


            </div>





            {/* <div className={styles.buttonsDiv}>
                <button className={styles.signIn}>Log in</button>
                <button className={styles.signUp}>Register</button>
            </div> */}



        </div>
    )
}

export default Navbar
