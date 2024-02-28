import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Co2Icon from '@mui/icons-material/Co2';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TungstenIcon from '@mui/icons-material/Tungsten';
import CreateIcon from '@mui/icons-material/Create';
import CategoryIcon from '@mui/icons-material/Category';

import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const icons = [<Co2Icon />, <TungstenIcon />, <CategoryIcon />, <CreateIcon />];
  const links = ['/carbon', '/energy', '/products', '/blogs'];
  const DrawerList = (
    <Box sx={{ width: 250, height: '100vh', backgroundColor: '#f0f0f0', paddingTop: '64px' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Carbon Emission', 'Energy Conservation', 'Product Impact', 'Blogs'].map((text, index) => (
          <ListItem button key={text} onClick={() => navigate(links[index])}>
            <ListItemIcon>
              {icons[index % icons.length]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0 }}>
      <Button onClick={toggleDrawer(true)}><ViewSidebarIcon sx={{ color: 'black' }} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <p className='p-2 flex items-center justify-center font-bold text-xl'> Carbonar</p>
        {DrawerList}
      </Drawer>
    </div>
  );
}  