import React from 'react';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
import { terms } from "../../constants/terms";
import '../css/Terms.css';
import xss from "xss";

const Terms: React.FC = () => {
  const isPC = useMediaQuery("(min-width: 1024px)");

  const renderHtmlSafely = (html: string) => {
    return { __html: xss(html) };
  };

  return (
    <Box style={{position: 'relative', zIndex: '500px'}}>
      <Box style={{ marginTop: '3rem' }}>
        <Typography
          variant="h5"
          className="mt-6"
          style={{ color: "#fff", fontWeight: 700, textAlign: "center" }}
        >
          Terms
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              '&:hover': {
                backgroundColor: '#089e1e',
              },
            }} variant="contained" className="back-btn">
            Close and Go Back
          </Button>
        </Box>
      </Box>

      <Paper elevation={0} sx={{ padding: 3, paddingBottom: '2.2rem' }} className="back-terms" style={{ width: isPC ? 750 : '100%' }}>
        <Box>
          <Typography
            variant="body1"
            className="terms"
            dangerouslySetInnerHTML={renderHtmlSafely(terms?.terms_text_1 || '')}
          />

          {Array.from({ length: 2 }, (_, index) => (
            <Typography key={index} variant="body1" className="terms">
              {terms?.[`terms_text_${index + 2}`]}
            </Typography>
          ))}

          <Typography variant="body1" className="mt-6 terms">
            {terms?.terms_text_4}
          </Typography>
          <Typography variant="body1" className="mb-6 terms">
            {terms?.terms_text_5}
          </Typography>

          {Array.from({ length: 14 }, (_, index) => (
            <Typography key={index} variant="body1" className="terms">
              {terms?.[`terms_text_${index + 6}`]}
            </Typography>
          ))}

          <Typography variant="body1" className="terms">
            {terms?.terms_text_20}
          </Typography>
          <Typography variant="body1" className="terms">
            {terms?.terms_text_21}
          </Typography>
          <Typography variant="body1" className="terms">
            {terms?.terms_text_22}
          </Typography>
          <Typography variant="body1" className="terms">
            {terms?.terms_text_23}
          </Typography>
          <Typography variant="body1" className="terms">
            {terms?.terms_text_24}
          </Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="btm-back-btn"
      >
        <Button
          sx={{
            '&:hover': {
              backgroundColor: '#089e1e',
            },
          }} variant="contained" className="back-btn">
          Close and Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default Terms;
