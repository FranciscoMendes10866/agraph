import { useAtom } from 'jotai'

import { usernameAtomPersisted } from '../store/usernameAtom'

const Dashboard = () => {
    const [username] = useAtom(usernameAtomPersisted)
    return (
        <>
            <h1>Dashboard</h1>
            <h5>{username}</h5>
        </>
    );
}

export default Dashboard;
