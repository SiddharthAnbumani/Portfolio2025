// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // Peace Icon

// // Drawer width for mobile
// const drawerWidth = 240;

// // Navigation items for the right side
// const navItems = [
//   { name: 'Resume', path: '/resume' },
//   { name: 'Project', path: '/project' },
//   { name: 'Contact Me', path: '/contact' }
// ];

// export default function AppBarMui(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle the mobile drawer
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Mobile Drawer Component
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <List>
//         {/* ✅ Mobile Home Link with Peace Icon */}
//         <ListItem disablePadding>
//           <Button
//             sx={{ color: '#000', width: '100%' }}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'blue' : '#000',
//             })}
//           >
//             <EmojiEmotionsIcon sx={{ mr: 1 }} />
//             <ListItemText primary="Home" />
//           </Button>
//         </ListItem>

//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <Button
//               sx={{ color: '#000', width: '100%' }}
//               component={NavLink}
//               to={item.path}
//               style={({ isActive }) => ({
//                 color: isActive ? 'blue' : '#000',
//               })}
//             >
//               <ListItemText primary={item.name} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* AppBar Section */}
//       <AppBar component="nav">
//         <Toolbar>
//           {/* Mobile Menu Icon for Drawer */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           {/* ✅ Home Link with Peace Icon on the Left Side */}
//           <Button
//             component={NavLink}
//             to="/"
//             sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}
//             style={({ isActive }) => ({
//               color: isActive ? 'yellow' : '#fff',
//             })}
//           >
//             <EmojiEmotionsIcon sx={{ mr: 1 }} />
//             Home
//           </Button>

//           {/* ✅ Right Side Navigation Items (Desktop Only) */}
//           <Box sx={{ display: { xs: 'none', sm: 'block', ml: 'auto' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 sx={{ color: '#fff' }}
//                 component={NavLink}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'yellow' : '#fff',
//                 })}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer Section */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//       {/* Content Section */}
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </>
//   );
// }



// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // Peace Icon

// // Drawer width for mobile
// const drawerWidth = 240;

// // Navigation items for the right side
// const navItems = [
//   { name: 'Resume', path: '/resume' },
//   { name: 'Project', path: '/project' },
//   { name: 'Contact Me', path: '/contact' }
// ];

// export default function AppBarMui(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle the mobile drawer
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Mobile Drawer Component
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <List>
//         {/* ✅ Mobile Home Link with Peace Icon */}
//         <ListItem disablePadding>
//           <Button
//             sx={{ color: '#000', width: '100%' }}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'blue' : '#000',
//             })}
//           >
//             <EmojiEmotionsIcon sx={{ mr: 1 }} />
//             <ListItemText primary="Home" />
//           </Button>
//         </ListItem>

//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <Button
//               sx={{ color: '#000', width: '100%' }}
//               component={NavLink}
//               to={item.path}
//               style={({ isActive }) => ({
//                 color: isActive ? 'blue' : '#000',
//               })}
//             >
//               <ListItemText primary={item.name} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* AppBar Section */}
//       <AppBar component="nav">
//         <Toolbar>
//           {/* Mobile Menu Icon for Drawer */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           {/* ✅ Home Link with Peace Icon on the Left Side */}
//           <Button
//             component={NavLink}
//             to="/"
//             sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}
//             style={({ isActive }) => ({
//               color: isActive ? 'yellow' : '#fff',
//             })}
//           >
//             <EmojiEmotionsIcon sx={{ mr: 1 }} />
//             Home
//           </Button>

//           {/* ✅ Right Side Navigation Items (Desktop Only) */}
//           <Box sx={{ display: { xs: 'none', sm: 'block', ml: 'auto' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 sx={{ color: '#fff' }}
//                 component={NavLink}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'yellow' : '#fff',
//                 })}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer Section */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//       {/* Content Section */}
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </>
//   );
// }



// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'; // ✅ Peace Icon

// // Drawer width
// const drawerWidth = 240;

// // Navigation Items
// const navItems = [
//   { name: 'Resume', path: '/resume' },
//   { name: 'Project', path: '/project' },
//   { name: 'Contact Me', path: '/contact' }
// ];

// export default function AppBarMui(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle the mobile drawer
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Mobile Drawer Component
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <List>
//         {/* ✅ Mobile Home Link with Peace Icon */}
//         <ListItem disablePadding>
//           <Button
//             sx={{ color: '#000', width: '100%' }}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'blue' : '#000',
//             })}
//           >
//             <EmojiEmotionsIcon sx={{ mr: 1 }} />
//             <ListItemText primary="Home" />
//           </Button>
//         </ListItem>

//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <Button
//               sx={{ color: '#000', width: '100%' }}
//               component={NavLink}
//               to={item.path}
//               style={({ isActive }) => ({
//                 color: isActive ? 'blue' : '#000',
//               })}
//             >
//               <ListItemText primary={item.name} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* AppBar Section */}
//       <AppBar component="nav">
//         <Toolbar>
//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           {/* ✅ Home Link with Peace Icon on the Left Side */}
//           <Button
//             component={NavLink}
//             to="/"
//             sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}
//             style={({ isActive }) => ({
//               color: isActive ? 'yellow' : '#fff',
//             })}
//           >
//             <EmojiEmotionsIcon sx={{ mr: 1 }} />
//             Home
//           </Button>

//           {/* Desktop Navigation Items */}
//           <Box sx={{ display: { xs: 'none', sm: 'block', ml: 'auto' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 sx={{ color: '#fff' }}
//                 component={NavLink}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'yellow' : '#fff',
//                 })}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer Section */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//       {/* Content Section */}
//       <Box component="main" sx={{ p: 3 }}>
//         <Toolbar />
//       </Box>
//     </>
//   );
// }



import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

// Drawer width configuration
const drawerWidth = 240;

// Your updated navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Project', path: '/project' },
  { name: 'Contact', path: '/contact' }
];

export default function AppBarMui(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle Drawer Function
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer Component
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI Navbar
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            {/* ✅ Mobile NavLink Integration */}
            <Button
              sx={{ color: '#000', width: '100%' }}
              component={NavLink}
              to={item.path}
              style={({ isActive }) => ({
                color: isActive ? 'blue' : '#000',
              })}
            >
              <ListItemText primary={item.name} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* AppBar Section */}
      <AppBar component="nav" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* App Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>

          {/* Desktop Navigation Items with NavLinks */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: '#fff' }}
                component={NavLink}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : '#fff',
                })}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Section */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Improves mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>     
    </>
  );
}

