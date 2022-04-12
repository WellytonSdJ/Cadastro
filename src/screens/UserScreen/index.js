import './styles.css'
import { useState, useEffect } from 'react';
import PasswordModal from '../../components/PasswordModal';
import axios from 'axios';
import { useParams } from "react-router-dom";

function UserScreen() {
  const [togglePassword, setTogglePassword] = useState(false) //valida se vai abrir o MODAL ou não //PADRÃO É FALSE 
  const [userData, setUserData] = useState({}); // dados que serão carregados

  const { id } = useParams(); //resgatar id do URL

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
      <PasswordModal togglePassword={togglePassword} handleClose={handlePwd} id={id} />
      <main>
        <div className="container">
          <h1>Meus Dados</h1>
          <hr />
          <div className="box">
            <div className="container-first-item">
              <div className="container-item">
                <h2>Dados Básicos</h2>
                <div className="container-item-text">Configurações referentes aos dados do usuário</div>
              </div>
              <button className="alter-btn" onClick={handlePwd}>
                <span className="material-icons">
                  lock
                </span>
                Alterar Senha
              </button>
            </div>
            <hr />
            <div className="container-item">
              <h4 className="container-item-title">E-mail (utilizado como login)</h4>
              <div className="container-item-text">{userData.email}</div>
            </div>
            <hr />
            <div className="container-item">
              <h4 className="container-item-title">Nome</h4>
              <div className="container-item-text">{userData.nome}</div>
            </div>
            <hr />
            <div className="container-item">
              <h4 className="container-item-title">Senha</h4>
              <div className="container-item-text">**********</div>
            </div>
            <hr />
            <div className="container-item">
              <h4 className="container-item-title">Telefone</h4>
              <div className="container-item-text">{userData.telefone}</div>
            </div>
            <hr />
          </div>
        </div>
      </main>
    </>
  );
}

export default UserScreen;