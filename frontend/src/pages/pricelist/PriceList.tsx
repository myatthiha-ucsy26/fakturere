import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SearchBox from '../../components/SearchBox/SearchBox';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PrintIcon from '@mui/icons-material/Print';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Table from '../../components/Table/Table';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getProducts } from '../../services/apiService';
import '../css/PriceList.css';

const PriceList: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1260px)');
  const isTablet = useMediaQuery('(min-width: 960px) and (max-width: 1259px)');
  const isPhoneLandscape = useMediaQuery('(min-width: 600px) and (max-width: 959px)');
  const isPhonePortrait = useMediaQuery('(max-width: 599px)');
  const [products, setProducts] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const handleAddClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  useEffect(() => {
      const fetchData = async () => {
          const result = await getProducts();
          setProducts(result);
      };

      fetchData();
  }, []);


  const renderButtons = () => {
    return (
      <Box style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', paddingTop: '10px' }}>
        <Button
          endIcon={<AddCircleIcon style={{ color: '#29f676', marginRight: isDesktop ? '' : '10px', width: !isDesktop ? '90px' : '' }} />}
          className="btn"
          onClick={handleAddClick}
        >
          {isDesktop ? 'New Product' : ''}
        </Button>
        <Button endIcon={<PrintIcon style={{ color: '#44dcff', marginRight: isDesktop ? '' : '10px', width: !isDesktop ? '90px' : '' }} />} className="btn">
          {isDesktop ? 'Print List' : ''}
        </Button>
        <Button endIcon={<ToggleOnIcon style={{ color: '#44dcff', marginRight: isDesktop ? '' : '10px', width: !isDesktop ? '90px' : '' }} />} className="btn">
          {isDesktop ? 'Advanced Mode' : ''}
        </Button>
      </Box>
    );
  };

  return (
    <>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box style={{ paddingTop: '10px', width: isTablet || isDesktop ? '50%' : '100%' }}>
            <SearchBox placeholder="Search Article No..." />
          </Box>
          {!isPhoneLandscape && !isPhonePortrait && renderButtons()}
        </Box>
        <Box style={{ paddingTop: '10px', width: '100%' }}>
          <Box style={{ paddingTop: '10px', width: isTablet ? '50%' : '' }}>
            <SearchBox placeholder="Search Product..." />
          </Box>
          {(isPhoneLandscape || isPhonePortrait) && renderButtons()}
        </Box>
        <Table products={products}/>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            {/* Your form fields go here */}
            <TextField label="Product Name" fullWidth margin="normal" />
            {/* Add more fields as needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleCloseDialog} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default PriceList;
