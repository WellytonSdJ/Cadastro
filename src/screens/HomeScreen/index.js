import { useState, useEffect } from 'react';
import axios from 'axios';

//components
import ListComponent from '../../components/ListComponent';


function HomeScreen() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      console.log('try') //TESTE
      let {data} = await axios.get('https://acme-cadastro.herokuapp.com/Usuario')      
      setUsers(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(()=> {
    getUsers();
    console.log('useEffect Users ->',users)// TESTE
  }, []);

  return (
    <>

    <ListComponent users={users}/>
    </>
  )


}

export default HomeScreen;
