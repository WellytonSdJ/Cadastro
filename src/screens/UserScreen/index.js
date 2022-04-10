import { Box, Button, Container, Divider, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from 'react';
import PasswordModal from '../../components/PasswordModal';
import axios from 'axios';
import { useParams } from "react-router-dom";

function UserScreen() {
  const [togglePassword, setTogglePassword] = useState(false) //valida se vai abrir o modal ou não //PADRÃO É FALSE 
  const [userData, setUserData] = useState({});

  const {id} = useParams(); //resgatar id do URL

  const handlePwd = () => { // ABRE O TOGGLE -> ENVIAR O HANDLER PARA O CHILDREN MANIPULAR
    togglePassword === true ? setTogglePassword(false) : setTogglePassword(true)
  }

  const getUserData = async () => {
    try {
      let { data } = await axios.get(`https://acme-cadastro.herokuapp.com/Usuario/${id}`)
      setUserData(data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      <CssBaseline />
      <PasswordModal togglePassword={togglePassword} handlePwd={handlePwd} id={id} />
      <Container maxWidth="md">
        <Typography variant="h4">
          Meus Dados
        </Typography>
        {/* <button onClick={()=> console.log(userData)}>UserDataState</button> // valida state do datauser */}
        <Divider />
        <Box>
          <Paper elevation={5}>
            <Typography>
              Dados Básicos
              <Button
                variant="contained"
                onClick={handlePwd} // chama o modal enviando o ID do user
              >
                <span className="material-icons">
                  lock
                </span>
                Alterar Senha
              </Button>

            </Typography>
            <Typography>
              Configurações referentes aos dados do usuário
            </Typography>
            <Divider />
            <Typography>
              E-mail (utilizado como login)
            </Typography>
            <Typography>
              {userData.email}
            </Typography>
            <Divider />
            <Typography>
              Nome
            </Typography>
            <Typography>
              {userData.nome}
            </Typography>
            <Divider />
            <Typography>
              Senha
            </Typography>
            <Typography>
              **********
            </Typography>
            <Divider />
            <Typography>
              Telefone
            </Typography>
            <Typography>
              {userData.telefone}
            </Typography>
            <Divider />

          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default UserScreen;