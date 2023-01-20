import Image from "next/image"
import onlyABlueLogo from "../public/onlyABlueLogo.png"
import styles from "../styles/Setting.module.css"

const Settings = () => {

  let name = "Gautam Kumar"
  let phone = "+91 95341980205"
  let email = "gautam@dunzo.com"
  let company = "Dunzo"


  return (
    <div className={styles.settings}>

      <div className={styles.firstBox}>
        <h1  className='text-[30px] text-center opacity-50 mb-[30px]'>Personal Information</h1>
        <div>
          <div>
            <div>
              <h3>Cardholder</h3>
              <h2>{name}</h2>
            </div>

            <div>
              <h3>Phone Number</h3>
              <h2>{phone}</h2>
            </div>

            <div>
              <h3>Email</h3>
              <h2>{email}</h2>
            </div>

            <div>
              <h3>Company Name</h3>
              <h2>{company}</h2>
            </div>
          </div>

          <Image src={onlyABlueLogo} alt="" width={"200px"} height={"200px"}/>

        </div>
      </div>


      <div className={styles.secondBox}>
        <h1  className='text-[30px] text-center opacity-50 mb-[30px]'>Supercash Card Statements</h1>

      </div>


    </div>
  )
}

export default Settings
