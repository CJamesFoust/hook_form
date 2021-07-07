import React, { useState } from "react";
import styles from './UserForm.module.css';
import Form from 'react-bootstrap/Form';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <div className={ styles.center }>
            <form onSubmit={ createUser }>

                <div className={styles.formGroup}>
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName }/>
                </div>

                <div className={styles.formGroup}>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName }/>
                </div>
                
                <div className={styles.formGroup}>
                    <label>Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                
                <div className={styles.formGroup}>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                
                <div className={styles.formGroup}>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }/>
                </div>

            </form>
            <h3>Your Form Data</h3>
            <div className={ styles.data }>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </div>

    )
}

export default UserForm;