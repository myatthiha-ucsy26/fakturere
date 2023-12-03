import React, { ReactNode } from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import Header from "../components/Header/Header";
import backgroundImage from "../assets/bg-image.png";

interface LayoutProps {
  children: ReactNode;
  isAuth: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isAuth }) => {
  const isPC = useMediaQuery("(min-width: 1260px)");
  const isPaddingNeed = useMediaQuery("(min-width: 1260px) and (max-width:1360px)");
  return (
    <Box
     
    >
        {isAuth ? (
        <Container sx={{ padding: isPaddingNeed ? '96px 0 0 170px !important' : isPC ? '96px 0 0 120px !important' :  '0px', paddingTop: 12}}>
          <Box sx={{ display: "flex", width: '100%' }}>
          <Header isAuth={isAuth} />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, width: isPC ? "calc(100% - 200px)" : '100%'}}
            >
              {children}
            </Box>
          </Box>
        </Container>
        ) : (
          <>
          <Container>
          <Header isAuth={isAuth} />
          <img src={backgroundImage} className="site"/>

            {children}
          </Container>
          </>
        )}
    </Box>
  );
};

export default Layout;
