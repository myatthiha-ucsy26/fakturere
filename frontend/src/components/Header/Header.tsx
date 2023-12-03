import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import english from "../../assets/british.png";
import logo from "../../assets/logo.png";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { sideMenu, pages, languages } from "../../constants/header";
import {
  InsertDriveFile as InsertDriveFileIcon,
  Settings as SettingsIcon,
  ImportContacts as ImportContactsIcon,
  Person as PersonIcon,
  Sell as SellIcon,
  Description as DescriptionIcon,
  Cancel as CancelIcon,
  Task as TaskIcon,
  ContentPaste as ContentPasteIcon,
  ContactMail as ContactMailIcon,
  CloudUpload as CloudUploadIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { user } from "../../constants/user";
import "../css/Header.css";

interface HeaderProps {
  isAuth: boolean;
  window?: () => Window;
}

const Header: React.FC<HeaderProps> = ({ isAuth, window }) => {
  const icons = [
    { icon: InsertDriveFileIcon, color: "#a7f9ff" },
    { icon: PersonIcon, color: "#28ffc0" },
    { icon: SettingsIcon, color: "#b8ecf4" },
    { icon: ImportContactsIcon, color: "#59dffa" },
    { icon: SellIcon, color: "#fda54c" },
    { icon: DescriptionIcon, color: "#92e9ef" },
    { icon: CancelIcon, color: "#fa4e93" },
    { icon: TaskIcon, color: "#feea80" },
    { icon: ContentPasteIcon, color: "#c5ffff" },
    { icon: ContactMailIcon, color: "#1099ff" },
    { icon: CloudUploadIcon, color: "#92befd" },
    { icon: ExitToAppIcon, color: "#b5eedc" },
  ];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [,setcurrentLanguage] = useState("English");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isPC = useMediaQuery("(min-width: 1260px)");
  const drawerWidth = 200;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSelectLanguage = (language: string) => {
    setcurrentLanguage(language);
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box>
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="body1">Menu</Typography>
      </Toolbar>
      <Divider
        flexItem
        sx={{
          marginX: 2,
          alignSelf: "center",
          borderColor: "#81bee2",
          borderWidth: 0.5,
        }}
      />
      <List>
        {sideMenu.map((text, index) => (
          <ListItemButton
            key={text}
            component={Link}
            to={`/dashboard/${text.replace(" ", "").toLowerCase()}`}
          >
            <ListItemIcon>
              {React.createElement(icons[index].icon, {
                style: { color: icons[index].color },
              })}
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{ fontSize: "13px" }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return isAuth ? (
    <AppBar
      position="fixed"
      style={{ height: 90, zIndex: 500 }}
      sx={{
        width: { sm: "100%" },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        disableGutters
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 45,
        }}
      >
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            style={{ display: isPC ? "none" : "inline-block" }}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            style={{
              display: isPC ? "flex" : "none",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <IconButton sx={{ p: 0 }} component={Link} to="/dashboard">
              <img
                src={user.profile_pic}
                alt="Profile"
                className="user-profile"
              />
            </IconButton>
            <Box>
              <Typography variant="body1" style={{ fontSize: 17 }}>
                {user.name}
              </Typography>
              <Typography variant="body2" style={{ fontSize: 12 }}>
                {user.address}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ paddingTop: 0 }}>
          <Tooltip title="Open Languages">
            <Button
              onClick={handleOpenLanguageMenu}
              style={{
                color: "white",
                textTransform: "none",
                marginRight: 1,
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginRight: 2, fontWeight: 550 }}
              >
                {languages}
              </Typography>
              <img
                alt="Remy Sharp"
                src={english}
                style={{
                  display: isPC ? "flex" : "block",
                  width: 30,
                  height: 20,
                  paddingRight: 2,
                }}
              />
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseLanguageMenu}
          >
            {languages.map((language) => (
              <MenuItem
                key={language}
                onClick={() => handleSelectLanguage(language)}
              >
                <Typography
                  textAlign="center"
                  style={{
                    display: isPC ? "flex" : "block",
                    textTransform: "none",
                    paddingRight: '5px'
                  }}
                >
                  {language}
                </Typography>
                <img
                  alt="Remy Sharp"
                  src={english}
                  style={{
                    display: isPC ? "flex" : "block",
                    width: 30,
                    height: 20,
                    paddingRight: 2,
                  }}
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          style={{ display: isPC ? "none" : "block" }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          BackdropProps={{ invisible: true }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          style={{ display: isPC ? "block" : "none" }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: 11.2,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  ) : (
    <AppBar
      position="relative"
      elevation={0}
      style={{ backgroundColor: "transparent", zIndex: 500 }}
    >
      <Toolbar
        disableGutters
        style={{
          display: "flex",
          justifyContent: isPC ? "center" : "space-between",
          paddingTop: "1rem",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          style={{ margin: isPC ? "0 250px 0 0" : '' }}
          sx={{
            textTransform: "none",
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            style={{
              display: isPC ? "flex" : "none",
              marginRight: 50,
              width: 60,
              height: 30,
            }}
          />
        </Typography>

        <Box
          style={{ display: isPC ? "none" : "flex", flexGrow: isPC ? 0 : 1 }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            style={{
              display: isPC ? "none" : "block",
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                style={{ width: isPC ? "" : "300px", borderRadius: "0" }}
              >
                <Typography
                  variant="h6"
                  textAlign="center"
                  sx={{ textTransform: "none" }}
                  style={{
                    padding: "8px",
                    marginRight: 2,
                    fontWeight: 900,
                    fontSize: 15,
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* PC */}
        <Box style={{ display: isPC ? "flex" : "none" }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                color: "white",
                display: "block",
                textTransform: "none",
                marginRight: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginRight: 1, fontWeight: 550, fontSize: 15 }}
              >
                {page}
              </Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ paddingTop: 0 }}>
          <Tooltip title="Open Languages">
            <Button
              onClick={handleOpenLanguageMenu}
              style={{
                color: "white",
                textTransform: "none",
                marginRight: 1,
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="body2"
                sx={{ marginRight: 2, fontWeight: 550 }}
              >
                {languages}
              </Typography>
              <img
                alt="Remy Sharp"
                src={english}
                style={{
                  display: isPC ? "flex" : "block",
                  width: 30,
                  height: 20,
                  paddingRight: 2,
                }}
              />
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseLanguageMenu}
          >
            {languages.map((language) => (
              <MenuItem
                key={language}
                onClick={() => handleSelectLanguage(language)}
              >
                <Typography
                  textAlign="center"
                  style={{
                    display: isPC ? "flex" : "block",
                    textTransform: "none",
                    paddingRight: '1',
                  }}
                >
                  {language}
                </Typography>
                <img
                  alt="Remy Sharp"
                  src={english}
                  style={{
                    display: isPC ? "flex" : "block",
                    width: 30,
                    height: 20,
                    paddingRight: 2,
                  }}
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
