import React, { useState, useEffect } from "react";
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
  { label: "Home" },
  { label: "President" },
  { label: "Principal" },
  { label: "Formation" },
  { label: "Services" },
  { label: "Finance" },
  { label: "More" },
];

function DropdownNav() {
  const [anchorEls, setAnchorEls] = React.useState<(null | HTMLElement)[]>(
    Array(navItems.length).fill(null)
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        background: isScrolled
          ? "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)"
          : "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%)",
        boxShadow: "none",
        zIndex: 10,
        transition: "background 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-start", minHeight: "64px" }}>
        {/* Left: Logo and ADI Intranet */}
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 220 }}>
          <Logo
            style={{
              height: 40,
              width: 40,
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
              fontSize: "1.25rem",
              fontWeight: 400,
            }}
          >
            ADI Intranet
          </Typography>
        </Box>
        {/* Right: Nav Items */}
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          {navItems.map((item, idx) => (
            <Box key={item.label} sx={{ ml: idx === 0 ? 4 : 2 }}>
              <Button
                endIcon={
                  <span
                    style={{
                      display: "inline-block",
                      transform: "translateY(2px)",
                    }}
                  >
                    ▼
                  </span>
                }
                sx={{
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  minWidth: 80,
                  px: 1.5,
                }}
                onClick={(e) => handleMenuOpen(idx, e)}
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
                    background: "#fff",
                    boxShadow: 2,
                    minWidth: 160,
                  },
                }}
              >
                <MenuItem onClick={() => handleMenuClose(idx)}>
                  {item.label} Page
                </MenuItem>
              </Menu>
            </Box>
          ))}
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
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
