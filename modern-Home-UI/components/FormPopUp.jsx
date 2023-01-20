import React from 'react'
import styles from "../styles/formPopup.module.css"

const FormPopUp = (props) => {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <button className={styles.close_btn} onClick={() => props.setTrigger(false)}><span class="material-symbols-outlined"> close</span></button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default FormPopUp
