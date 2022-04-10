import { Box, Button, Modal, Toolbar, AppBar, Typography } from "@mui/material";
import axios from 'axios';
import validation from '../../utils/validation'
import { useState } from "react";
import './styles.css'
import { Link as RouterLink } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 0, // padding top //PADRAO É 2 
  px: 0, // padding X // PADRAO É 4
  pb: 0, // padding bottom
  borderRadius: '4px',

  display: 'flex',
  direction: 'column'
};

function PasswordModal({
  togglePassword,
  handlePwd,
  id }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmedNewPassword, setConfirmedNewPassword] = useState('')
  // const [formData, setFormData] = useState({})

  const handleCurrentPassword = (e) => {
    let data = (e.target.value)
    setCurrentPassword(data)
  }
  const handleNewPassword = (e) => {
    let data = (e.target.value)
    setNewPassword(data)
  }



  //teste
  let userId = id; // por algum motivo, não resgata direto o ID enviado pelo componente PAI, quando eu tento chamar no axios, então encapsulei dentro de um variável


  const changePassword = async (e) => {
    //habilitar preventDefault
    // chamar validação
    // criar CONDICIONAL -> caso passe trycatch

    try {
      axios.post(`https://acme-cadastro.herokuapp.com/usuario/alterar-senha/${userId}`, null, {
        params: {
          senhaAtual: currentPassword,
          novaSenha: newPassword
        }
      })
      alert('Senha alterada com sucesso!')
      console.log('foi!')   // CRIAR ROTAS DE SUCESSO E FALHA
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Modal
        open={togglePassword}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        {/* NAVBAR - separando cima/baixo*/}
        <Box sx={{ ...style }}>
          {/* ORGANIZANDO LAYOUT */}
          {/* <div className="box"> */}
          {/* SEPARAR O HEADER DO CONTEUDO */}
          <div className="box-container">
            <div className="box-header">
              <span className="header-text">Alterando Senha</span>
              {/* criar rota de saída para página inicial */}
              <button onClick={validation}>TESTE VALIDACAO</button>
              <button className="exit-btn" onClick={handlePwd}>
                <span className="material-icons md-48">
                  clear
                </span>
              </button>
            </div>
            <div className="box-content">
              {/* SEPARAR CONTEUDO DIREITA / ESQUERDA */}
              <div className="box__left">
                <span className="material-icons md-lock">
                  lock
                </span>
              </div>
              <div className="box__right">
                <form>
                  <div className="box__right-item">
                    <label>Senha Atual</label>
                    <input
                      type="password"
                      name="currentPassword"
                      id="currentPassword"
                      className="inputPassword"
                      onChange={handleCurrentPassword}
                      placeholder="Insira sua senha"
                    />
                  </div>

                  <div className="box__right-item">
                    <label>Nova Senha</label>
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      className="inputPassword"
                      onChange={handleNewPassword}
                      placeholder="Insira sua nova senha"
                    />
                  </div>

                  <div className="box__right-item">
                    <label>Confirme a Nova Senha</label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      id="confirmNewPassword"
                      className="inputPassword"
                      placeholder="Confirme a nova Senha"
                    />
                  </div>
                  <div className="box__right-item">
                    <div className="box__right-buttons">
                      <Button color="inherit" variant="contained" type="button" component={RouterLink} to={"/"}>Cancelar</Button>
                      <Button color="inherit" variant="contained" type="button" >Confirmar</Button>
                    </div>
                  </div>
                </form>
                {/* TESTE */}
                <button onClick={
                  () => {
                    // console.log('current ->', currentPassword),
                      console.log('new ->', newPassword)
                  }}>
                  TESTE STATES
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* ORGANIZANDO LAYOUT */}
        </Box>
      </Modal>
    </>
  );
}

export default PasswordModal;