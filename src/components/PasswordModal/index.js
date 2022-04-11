import './styles.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Modal, Toolbar, AppBar, Typography } from "@mui/material";
import validation from '../../utils/validation'
import { yupResolver } from '@hookform/resolvers/yup';


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
  let userId = id; // por algum motivo, não resgata direto o ID enviado pelo componente PAI, quando eu tento chamar no axios, então encapsulei dentro de um variável

  //react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validation)
  });

  const changePassword = async (data) => {    
    console.log('dados changePassword -> ', data)
    try {
      let response = await axios({
        method: 'post',
        url: `https://acme-cadastro.herokuapp.com/usuario/alterar-senha/${userId}`,
        data: {
          senhaAtual: data.currentPassword,
          novaSenha: data.newPassword
        }
      })
      console.log('foi! -> ', response)   // CRIAR ROTAS DE SUCESSO E FALHA
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
        <Box sx={{ ...style }}>
          <div className="box-container">
            <div className="box-header">
              <span className="header-text">Alterando Senha</span>
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
                <form onSubmit={handleSubmit(changePassword)}>
                  <div className="fields">
                    <label>Senha Atual</label>
                    <input
                      type="password"
                      name="currentPassword"
                      {...register("currentPassword")}
                      id="currentPassword"
                      className="inputPassword"
                      placeholder="Insira sua senha"
                    />
                    <p className="error-message">{errors.currentPassword?.message}</p>
                  </div>

                  <div className="fields">
                    <label>Nova Senha</label>
                    <input
                      type="password"
                      name="newPassword"
                      {...register("newPassword")}
                      id="newPassword"
                      className="inputPassword"
                      placeholder="Insira sua nova senha"
                    />
                    <p className="error-message">{errors.newPassword?.message}</p>
                  </div>

                  <div className="fields">
                    <label>Confirme a Nova Senha</label>
                    <input
                      type="password"
                      name="confirmNewPassword"
                      {...register("confirmNewPassword")}
                      id="confirmNewPassword"
                      className="inputPassword"
                      placeholder="Confirme a nova Senha"
                    />
                    <p className="error-message">{errors.confirmNewPassword?.message}</p>
                  </div>
                  <div className="fields">
                    <div className="box__right-buttons">
                      <Button color="inherit" variant="contained" type="button" component={RouterLink} to={"/"}>Cancelar</Button>
                      <Button color="inherit" variant="contained" type="submit" >Confirmar</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default PasswordModal;