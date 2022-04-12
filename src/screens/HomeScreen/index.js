import { useState, useEffect } from 'react';
import axios from 'axios';

//components
import ListComponent from '../../components/ListComponent';


function HomeScreen() {
  const [users, setUsers] = useState([{}])

  const getUsers = async () => {
    try {
      let { data } = await axios.get('https://acme-cadastro.herokuapp.com/Usuario')
      setUsers(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    {console.log(users)}
    { users === [{}] ? <h1>Não foram encontrados usuários</h1> :
      <ListComponent users={users}/>}
    </>
  )


}

export default HomeScreen;
