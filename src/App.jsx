import ClockLoader from 'react-spinners/ClockLoader';
import { useGetData } from '../hooks/useGetData';

import './App.css';

function App() {
  const { users, isLoading, error } = useGetData('https://65cd3bcddd519126b8404694.mockapi.io/users');

  if (isLoading) return <ClockLoader size={50} color={'red'} />;
  if (error) return <p>{error}</p>;
  return (
    <>
      <h2>Lista de Usuarios</h2>
      {users.map(usr => <p key={usr.id} >{usr.name}</p>)
      }
    </>
  );
}


export default App;
