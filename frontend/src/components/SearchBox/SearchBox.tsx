import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import useMediaQuery from '@mui/material/useMediaQuery';

interface SearchBoxProps {
  placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder }) => {
  const isPC = useMediaQuery("(min-width: 1260px)");

  const desktopStyles = {
    width: '500px',
  };

  const commonStyles = {
    height: '35px',
    '&:hover': {
      '& fieldset': {
        borderColor: '#d2d2d2 !important',
      },
    },
    '& fieldset': {
      borderColor: '#d2d2d2 !important',
      '&:focus': {
        borderColor: '#d2d2d2 !important',
      },
    },
  };

  return (
    <TextField
      variant="outlined"
      autoComplete="off"
      sx={{
        width: isPC ? desktopStyles.width : '100%',
        ...commonStyles,
      }}
      placeholder={placeholder}
      InputProps={{
        sx: { borderRadius: '50px', height: '35px', fontSize: '12px' },
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ color: '#44dcff', cursor: 'pointer' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
