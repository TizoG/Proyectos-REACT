import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Tables } from './components/Tables';

function App() {
    const [users, setUsers] = useState<
        {
            name: string;
            lastname: string;
            email: string;
            tips: string;
        }[]
    >([]);
    const handleUser = ({
        name,
        lastname,
        email,
        tips,
    }: {
        name: string;
        lastname: string;
        email: string;
        tips: string;
    }) => {
        setUsers([...users, { name, lastname, email, tips }]);
    };
    return (
        <>
            <h1>Proyectos</h1>
            <Form handleUser={handleUser} />
            <Tables users={users} />
        </>
    );
}

export default App;
