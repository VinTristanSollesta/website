import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Routes, Route } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./pages/Home";
import President from "./pages/President";
import Principal from "./pages/Principal";
import Formation from "./pages/Formation";
import AdministrationAndFinance from "./pages/AdministrationAndFinance";
import More from "./pages/More";
import { ReactComponent as Logo } from "./assets/logo.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const navItems = [
  { label: "Home", path: "/" },
  { label: "President", path: "/president" },
  { label: "Principal", path: "/principal" },
  { label: "Formation", path: "/formation" },
  { label: "Administration and Finance", path: "/administration-and-finance" },
  { label: "Human Resource", path: "/human-resource" },
  { label: "Reservations", path: "/reservations" },
];

function DropdownNav() {
  const [anchorEls, setAnchorEls] = React.useState<(null | HTMLElement)[]>(
    Array(navItems.length).fill(null)
  );

  const handleMenuOpen = (
    index: number,
    event: React.MouseEvent<HTMLElement>
  ) => {
    const newAnchors = [...anchorEls];
    newAnchors[index] = event.currentTarget;
    setAnchorEls(newAnchors);
  };

  const handleMenuClose = (index: number) => {
    const newAnchors = [...anchorEls];
    newAnchors[index] = null;
    setAnchorEls(newAnchors);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.6) 100%)",
        boxShadow: "none",
        backdropFilter: "blur(8px)",
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "80px" }}>
        {/* Left: Logo and ADI Intranet */}
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 220 }}>
          <Logo
            style={{
              height: 48,
              width: 48,
              marginRight: 16,
              borderRadius: "50%",
              padding: 4,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              letterSpacing: 1,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.15rem",
            }}
          >
            ADI Intranet
          </Typography>
        </Box>
        {/* Right: Nav Items */}
        <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
          {navItems.map((item, idx) => (
            <Box
              key={item.label}
              sx={{
                animation: `${fadeIn} 0.5s ease-out ${idx * 0.1}s`,
                "& .MuiButton-root": {
                  transition: "all 0.3s ease",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "1rem",
                  letterSpacing: 1,
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  textTransform: "none",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                },
              }}
            >
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(idx, e)}
                sx={{
                  fontSize: "1rem",
                  letterSpacing: 1,
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
              <Menu
                anchorEl={anchorEls[idx]}
                open={Boolean(anchorEls[idx])}
                onClose={() => handleMenuClose(idx)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    background:
                      "linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(0,0,0,0.85) 100%)",
                    backdropFilter: "blur(8px)",
                    "& .MuiMenuItem-root": {
                      transition: "all 0.2s ease",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "1.15rem",
                      letterSpacing: 1,
                      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transform: "translateX(5px)",
                        color: "#FFFFFF",
                      },
                    },
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to={item.path}
                  onClick={() => handleMenuClose(idx)}
                  sx={{
                    fontSize: "1.15rem",
                    letterSpacing: 1,
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    textTransform: "none",
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {item.label}
                </MenuItem>
              </Menu>
            </Box>
          ))}
        </Box>
        {/* Right: Search Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minWidth: 60,
            justifyContent: "flex-end",
          }}
        >
          <IconButton sx={{ color: "#fff" }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: "100px",
        pb: 6,
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
        color: "#fff",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Times New Roman, Times, serif",
          fontWeight: 600,
          letterSpacing: 2,
          mb: 2,
          fontSize: { xs: "2.5rem", md: "6rem" },
        }}
      >
        ATENEO DE ILOILO
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          fontWeight: 100,
          letterSpacing: 4,
          mb: 2,
          fontSize: { xs: "1.1rem", md: "1.5rem" },
        }}
      >
        SANTA MARIA CATHOLIC SCHOOL
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <DropdownNav />
        <HeroSection />
        <Box
          sx={{
            p: 2,
            mt: 2,
            minHeight: "100vh",
            background: "#FFFFFF",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/president" element={<President />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/formation" element={<Formation />} />
            <Route
              path="/administration-and-finance"
              element={<AdministrationAndFinance />}
            />
            <Route path="/more" element={<More />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
