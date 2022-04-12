import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';

export default function ListComponent({ users }) {
  return (
    <Box 
    sx={{ 
      width: '100%',
      maxWidth: 720, 
      display:'flex', 
      justifyContent:'center',
      alignItems: 'center',
      // bgcolor: 'red'
       }}>
      <nav aria-label="main mailbox folders">
      <List>          
        { users === [] ? (
          <h2>Carregando...</h2>
        ) : users.map( item => 
        (
          <ListItem disablePadding key={item.id}>
            <ListItemButton component={RouterLink} to={`/user/${item.id}`}> {/*ao clicar no item direciona para userlist*/}
              <ListItemText primary={item.nome} >
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
