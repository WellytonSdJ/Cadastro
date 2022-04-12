import './styles.css'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Modal } from "@mui/material";
import validation from '../../utils/validation'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';


const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  height: 400,
  bgcolor: 'background.paper',
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
  handleClose,
  id }) {
  let userId = id; // por algum motivo, não resgata direto o ID enviado pelo componente PAI, quando eu tento chamar no axios, então encapsulei dentro de um variável

  const [openSuccessModal, setOpenSuccessModal] = useState(0)
  /*logica do modal 
  0 = alterar senha;
  1 = sucesso
  2 = falha
  */


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    resolver: yupResolver(validation)
  });

  const changePassword = async (data) => {
    console.log('data ->', data)
    try {
      await axios({
        method: 'post',
        url: `https://acme-cadastro.herokuapp.com/usuario/alterar-senha/${userId}`,
        data: {
          senhaAtual: data.currentPassword,
          novaSenha: data.newPassword
        }
      })
      setOpenSuccessModal(1) // setOpen para o modal de sucesso!

    } catch (err) {
      console.error(err)
      setOpenSuccessModal(2) // setOpen para o modal de falha!
    } finally {
      reset(); // limpe os campos
    }

  }

  if (openSuccessModal === 0) {
    return (
      <>
        <Modal
          open={togglePassword}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          keepMounted
        >
          <Box sx={{ ...style }}>
            <div className="box-container">
              <div className="box-header">
                <span className="header-text">Alterando Senha</span>
                <button className="exit-btn" onClick={handleClose}>
                  <span className="material-icons md-48">
                    clear
                  </span>
                </button>
              </div>
              <div className="box-content">
                < div className="box__left">
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
                        required
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
                        required
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
                        required
                      />
                      <p className="error-message">{errors.confirmNewPassword?.message}</p>
                    </div>
                    <div className="fields">
                      <div className="box__right-buttons">
                        <Button color="inherit" variant="contained" type="button" component={RouterLink} to={"/"}>Cancelar</Button>
                        <Button className="confirm-btn" variant="contained" type="submit" style={{ marginLeft: '30px' }}>Confirmar</Button>
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
  } else if (openSuccessModal === 1) {
    return (
      <Modal
        open={togglePassword}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className="box-container">
            <div className="box-header">
              <span className="header-text">Alterando Senha</span>
              <button className="exit-btn" onClick={() => { handleClose(); setOpenSuccessModal(0) }}>
                <span className="material-icons md-48">clear</span>
              </button>
            </div>
            <div className="box-content-response">
              <div className="box-content-internal">
                <span class="material-icons md-48">
                  check_circle
                </span>
                <h1>Senha alterada com sucesso!</h1>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    )
  } else {
    return (
      <Modal
        open={togglePassword}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className="box-container">
            <div className="box-header">
              <span className="header-text">Alterando Senha</span>
              <button className="exit-btn" onClick={() => { handleClose(); setOpenSuccessModal(0) }}>
                <span className="material-icons md-48">clear</span>
              </button>
            </div>
            <div className="box-content-response">
              <div className="box-content-internal">
                <span class="material-icons md-48">
                  highlight_off
                </span>
                <h1>Senha incorreta!</h1>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    )
  }
}

export default PasswordModal;