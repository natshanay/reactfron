import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';

export default function DashBoard() {
    const { http } = AuthUser();
    const [userdetail, setUserdetail] = useState(null);

    useEffect(() => {
        fetchUserDetail();
    }, []);

    const fetchUserDetail = () => {
        http.get('/me')
            .then((res) => {
                setUserdetail(res.data);
            })
            .catch((error) => {
                console.error('Error fetching user details:', error);
            });
    };

    function renderElement() {
        if (userdetail) {
            return (
                <div>
                    <h4>Name</h4>
                    <p>{userdetail.name}</p>
                    <h4>Email</h4>
                    <p>{userdetail.email}</p>
                </div>
            );
        } else {
            return <p>Loading.....</p>;
        }
    }

    return (
        <div>
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            {renderElement()}
        </div>
    );
}
