import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Co2Icon from '@mui/icons-material/Co2';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TungstenIcon from '@mui/icons-material/Tungsten';
import CreateIcon from '@mui/icons-material/Create';
import CategoryIcon from '@mui/icons-material/Category';
import GroupsIcon from '@mui/icons-material/Groups';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import Energyinfo from '../Energyconservation/Energyinfo';
import Activities from '../activity/Activities';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  
  const icons = [<Co2Icon />, <TungstenIcon />, <CategoryIcon />, <CreateIcon />, <GroupsIcon />];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Carbon Emission', 'Energy Conservation', 'Product Impact', 'Blogs', 'Activities'].map((text, index) => (
          <ListItem button key={text} onClick={() => navigate(`/energy`)}>
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
    <div>
      <Button className='absolute' onClick={toggleDrawer(true)}><ViewSidebarIcon sx={{ color: 'black' }} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
