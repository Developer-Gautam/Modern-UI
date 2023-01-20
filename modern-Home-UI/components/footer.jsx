

import Image from "next/image"
import footerSparkCardLogo from "../public/footerSparkCardLogo.png"
import sparkLogo from "../public/sparkLogo.png"

import styles from "../styles/footer.module.css"



const Footer = () => {
    return (
        <div className={styles.main}>



            <div>
                <Image src={sparkLogo} alt="" />

                {/* 
                <div className={styles.footerMenu}>
                    <a href="">Terms and Condition</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Help</a>
                </div> */}

                <p className={styles.address}>G-1, No.4/608, V.O.C Street, Kottivakkam, <br /> Perungudi, Chennai-600 041</p>
                <br />

                <p><b>@2023 spark</b></p>
                <br />
                <p>Disclosure of information about the Bank as a professional participant in the securities market</p>
            </div>




            <Image src={footerSparkCardLogo} alt="" className={styles.sparkCard} />

        </div>
    )
}

export default Footer
