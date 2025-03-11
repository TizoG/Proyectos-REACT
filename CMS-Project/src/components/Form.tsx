import { useState } from 'react';

type Props = {
    handleUser: ({
        name,
        lastname,
        email,
        tips,
    }: {
        name: string;
        lastname: string;
        email: string;
        tips: string;
    }) => void;
};
export function Form({ handleUser }: Props) {
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        tips: '',
    });

    const submitForms = () => {
        handleUser(user);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Nombre
                </label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                    Apellido
                </label>
                <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    value={user.lastname}
                    onChange={(e) =>
                        setUser({ ...user, lastname: e.target.value })
                    }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Correo
                </label>
                <input
                    id="email"
                    type="email"
                    className="form-control"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tips" className="form-label">
                    Tipo
                </label>
                <select
                    name=""
                    id="tips"
                    className="form-select"
                    value={user.tips}
                    onChange={(e) => setUser({ ...user, tips: e.target.value })}
                >
                    <option>- Elige el tipo -</option>
                    <option value="familia">Familia</option>
                    <option value="trabajo">Trabajo</option>
                    <option value="empresa">Empresa</option>
                </select>
            </div>
            <button className="btn btn-primary" onClick={submitForms}>
                enviar
            </button>
            <button
                className="btn btn-secondary"
                onClick={() =>
                    setUser({ name: '', lastname: '', email: '', tips: '' })
                }
            >
                Limpiar
            </button>
        </form>
    );
}
