type Props = {
    users: {
        name: string;
        lastname: string;
        email: string;
        tips: string;
    }[];
};

export function Tables({ users }: Props) {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">tipo</th>
                </tr>
            </thead>
            <tbody>
                {users.map((p, index) => (
                    <tr key={index}>
                        <td>{p.name}</td>
                        <td>{p.lastname}</td>
                        <td>{p.email}</td>
                        <td>{p.tips}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
