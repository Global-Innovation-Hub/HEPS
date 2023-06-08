import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/material/styles';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PersonIcon from '@mui/icons-material/Person';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../media/GHLUIH Final Logo-02.png';

const Sidebar = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#083c59',
    color: '#ffffff',
    width: '240px', // Set the width of the sidebar
    flexShrink: 0,
  },
}));

function SideBar({children}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#083c59' }}>
        <Toolbar>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <h1></h1>
          )}
          <div style={{ flexGrow: 1 }}></div>
          <Link to='/'>
            <Button color="inherit" startIcon={<LogoutIcon style={{ color: 'white' }} />} sx={{ height: '48px' }} />
          </Link>
          <Avatar sx={{ ml: 2, height: '40px', width: '40px' }}>A</Avatar>
        </Toolbar>
      </AppBar>

      <Sidebar
        variant={isMobile ? 'temporary' : 'permanent'}
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <img src={logo} style={{ objectFit: 'contain', height: '120px', }} alt="Logo" />
        <Typography variant="body5" sx={{ color: 'white', fontSize:"10px" }}>
          Empowering Precision: Eliminate Human Error with Confidence.
        </Typography>
        <Toolbar />
        <List>
          <ListItem button  component={Link} to="/tasks" sx={{ '&:hover': { backgroundColor: '#1976d2', color: 'white' } }}>
            <ListItemIcon style={{ color: 'white' }}>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
          <ListItem button  component={Link} to="/tasks" sx={{ '&:hover': { backgroundColor: '#1976d2', color: 'white' } }}>
            <ListItemIcon style={{ color: 'white' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button  component={Link} to="/tasks" sx={{ '&:hover': { backgroundColor: '#1976d2', color: 'white' } }}>
            <ListItemIcon style={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button  component={Link} to="/analytics" sx={{ '&:hover': { backgroundColor: '#1976d2', color: 'white' } }}>
            <ListItemIcon style={{ color: 'white' }}>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          {/* <ListItem button  component={Link} to="/tasks" sx={{ '&:hover': { backgroundColor: '#1976d2', color: 'white' } }}>
            <ListItemIcon style={{ color: 'white' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem> */}
        </List>

      </Sidebar>
      <div style={{ marginLeft: isMobile ? '0' : '240px', marginTop: '64px' }}>
      </div>
    </div>
  );
}

export default SideBar;
