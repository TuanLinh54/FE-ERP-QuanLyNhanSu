import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const response = await axios.post('http://localhost:8080/api/auth/register', {
                firstName,
                lastName,
                username,
                password,
            });

            localStorage.setItem('token', response.data.token);
            alert('Register successful!');
        } catch (error) {
            alert('Register failed!');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
