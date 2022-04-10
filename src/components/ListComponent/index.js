import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

//teste
const clientes = [
  {
    nome: "fulano 1"
  },
  {
    nome: "fulano 2"
  },
  {
    nome: "fulano 3"
  },
  {
    nome: "fulano 4"
  },
  {
    nome: "fulano 5"
  },
]

export default function ListComponent({ users }) {
  return (
    <Box 
    sx={{ 
      width: '100%',
      maxWidth: 720, 
      display:'flex', 
      justifyContent:'center',
      alignItems: 'center',
      bgcolor: 'red' }}>
      <nav aria-label="main mailbox folders">
      <List>          
        { users === [] ? (
          <h2>Carregando...</h2>
        ) : users.map( item => 
        (
          <ListItem disablePadding key={item.id}>
            <ListItemButton>
              <ListItemText primary={item.nome} >
              <Link to={`/user/${item.id}`}/>
              </ ListItemText>
            </ListItemButton>
          </ListItem>
        )
        )}
        <Divider/>
        </List>
      </nav>
    </Box>
  );
}
