import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import styles from "../styles/Mycard.module.css"
import cardSample_1 from "../public/cardSample_5.png"

const Mycard = () => {


    const currentBalance = "₹ 90.02"
    const cardNumber = "**** **** **** 1234"





    return (
        <>

            <h1 className='text-[30px] text-center opacity-50 mb-[30px]'>My Cards</h1>

            <div className={styles.myCard}>



                <div className={styles.supercashCard}>
                    <h1>Supercash card</h1>
                    <p style={{ color: "green" }}>Current Balance</p>
                    <p className={styles.currentBalance}>{currentBalance}</p>
                    <button className={styles.addMoneyButton}>Add Money</button>
                </div>

                {/* <div className={styles.card}>
                    <div className={styles.logoDiv}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" className={styles.visaLogo} />
                        <img src={logo} alt="" />
                    </div>

                    <div className={styles.balanceAndCardNumber}>
                        <p>{currentBalance}</p>
                        <p>{cardNumber}</p>
                    </div>

                    <h2 className={styles.fetchButton}>321</h2>

                </div> */}

                <div>
                    <Image src={cardSample_1} width={"400px"} height={"250px"}/>
                </div>



            </div>
        </>
    )
}

export default Mycard
