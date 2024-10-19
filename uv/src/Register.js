import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const { http } = AuthUser(); // Access the HTTP instance from AuthUser
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const submitForm = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await http.post('reactregister', { email, password, name });
            navigate('/login'); // Redirect to login page
        } catch (error) {
            // Extract and handle error message
            const errorMessage = error.response?.data?.message || 'Registration failed';
            setError(errorMessage);
        }
    };

    return (
        <div className="row justify-content-left pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter name"
                            onChange={e => setName(e.target.value)}
                            value={name} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            value={email} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            value={password} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Confirm password"
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword} 
                        />
                    </div>
                    <button 
                        type="button" 
                        onClick={submitForm} 
                        className="btn btn-primary mt-4"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
