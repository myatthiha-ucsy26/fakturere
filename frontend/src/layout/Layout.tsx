// react
import React, { ReactNode } from "react";
// mui
import { Box, Container, useMediaQuery } from "@mui/material";
// components
import Header from "../components/Header/Header";
// assets
import backgroundImage from "../assets/bg-image.png";

interface LayoutProps {
  children: ReactNode;
  isAuth: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isAuth }) => {
  const isPC = useMediaQuery("(min-width: 1260px)");
  const isPaddingNeed = useMediaQuery("(min-width: 1260px) and (max-width:1360px)");
  return (
    <Box>
        {isAuth ? (
        <Container sx={{ margin: 0, padding: isPaddingNeed ? '96px 0 0 200px !important' : isPC ? '96px 0 0 200px !important' :  '0px', paddingTop: 12}}>
          <Box sx={{ display: "flex", width: '100%' }}>
          <Header isAuth={isAuth} />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: isPC ? "calc(100% - 200px)" : '100%', paddingRight: isPC ? 0 : ''}}
            >
              {children}
            </Box>
          </Box>
        </Container>
        ) : (
          <>
          <Container>
          <Header isAuth={isAuth} />
          <img alt="site" src={backgroundImage} className="site"/>

            {children}
          </Container>
          </>
        )}
    </Box>
  );
};

export default Layout;
