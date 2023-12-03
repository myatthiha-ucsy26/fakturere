import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { us } from "../../constants/us";
import xss from "xss";


import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../css/Us.css';

const Us: React.FC = () => {
  const isPC = useMediaQuery("(min-width: 1024px)");

  const renderHtmlSafely = (html: string) => {
    return { __html: xss(html) };
  };

  const handleCloseButtonClick = () => {
    // Add logic to handle the close button click
  };

  return (
    <Box style={{position: 'relative', zIndex: '500px'}}>
      <Box style={{ marginTop: "3rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#089e1e",
              },
            }}
            variant="contained"
            className="back-btn"
            onClick={handleCloseButtonClick}
          >
            Close and Go Back
          </Button>
        </Box>
      </Box>

      <Paper
        elevation={0}
        sx={{ padding: 3, paddingBottom: "2.2rem" }}
        className="back-us"
        style={{ width: isPC ? 750 : "100%" }}
      >
        <Box>
          <Typography
            variant="body1"
            className="us"
            dangerouslySetInnerHTML={renderHtmlSafely(us?.us_text_1 || "")}
          />

          <Typography variant="body1" className="mt-6 us">
            {us?.us_text_2}
          </Typography>
          <Typography variant="body1" className="mb-6 us">
            {us?.us_text_3}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Us;
