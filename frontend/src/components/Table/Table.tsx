import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import "../css/Table.css";

interface Product {
  article: number;
  product: string;
  inprice: number;
  price: number;
  unit: string;
  stock: number;
  description: string;
}

interface TableProps {
  products: Product[]; // Make sure the type matches the expected Product type
}

const headCells = [
  { id: "article", label: "Article No." },
  { id: "product", label: "Product / Service" },
  { id: "inprice", label: "In Price" },
  { id: "price", label: "Price" },
  { id: "unit", label: "Unit" },
  { id: "stock", label: "In Stock" },
  { id: "description", label: "Description" },
];

const PriceTable:React.FC<TableProps> = ({ products }) => {
  const [orderBy, setOrderBy] = useState<string>("article");
  const [order, setOrder] = useState<"asc" | "desc" | undefined>(undefined);


  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleDeleteProduct = () => {
    // Handle delete product action
    handleMenuClose();
  };

  const handleEditProduct = () => {
    // Handle edit product action
    handleMenuClose();
  };

  const handleClose = () => {
    // Handle close action
    handleMenuClose();
  };

  const sortedProducts = Array.isArray(products)
  ? [...products].sort((a, b) => {
      const aValue = a[orderBy as keyof Product];
      const bValue = b[orderBy as keyof Product];

      if (order === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    })
  : undefined;


  const isDesktop = useMediaQuery("(min-width: 1260px)");
  const isTablet = useMediaQuery("(min-width: 960px) and (max-width: 1259px)");
  const isPhoneLandscape = useMediaQuery(
    "(min-width: 600px) and (max-width: 959px)"
  );
  const isPhonePortrait = useMediaQuery("(max-width: 599px)");

  const shouldHideHeader = (headCellId: string) => {
    if (
      (!isDesktop &&
        (headCellId === "inprice" || headCellId === "description")) ||
      ((isPhoneLandscape || isPhonePortrait) &&
        headCellId !== "product" &&
        headCellId !== "price")
    ) {
      return true;
    }
    return false;
  };

  return (
    <TableContainer>
      <Table
        sx={{ borderCollapse: "unset", borderSpacing: "10px" }}
        size="small"
        aria-label="table"
      >
        <TableHead>
          <TableRow>
            {headCells.map((headCell, index: number) => (
              <TableCell
                key={`${headCell.id}_${index}`}
                style={{
                  display: shouldHideHeader(headCell.id) ? "none" : "",
                  padding: !isDesktop || !isTablet ? "0px" : "",
                }}
              >
                <TableSortLabel
                  sx={{
                    "& .MuiTableSortLabel-icon": {
                      color:
                        headCell.id === "product"
                          ? "#29f676 !important"
                          : "#44dcff !important",
                    },
                  }}
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => handleSort(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedProducts?.map((product: Product, index: number) => (
            <TableRow key={`${product.article}_${index}`} sx={{ height: "10px !important" }}>
              <TableCell
                style={{
                  width: isDesktop ? "13%" : "16%",
                  padding: 0,
                  paddingLeft: "4px !important",
                  display: isDesktop || isTablet ? "" : "none",
                  maxWidth: isDesktop ? '' : '50px'
                }}
              >
                <Tooltip title={product.article.toString()}>
                  <span>{product.article}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                style={{
                  width: isDesktop ? "25%" : isTablet ? "35%" : "53%",
                  maxWidth: isDesktop ? '' : '50px',
                  padding: 0,
                  paddingLeft: "4px !important",
                }}
              >
                <Tooltip title={product.product}>
                  <span>{product?.product}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                style={{
                  width: "11%",
                  maxWidth: isDesktop ? '' : '50px',
                  padding: 0,
                  paddingLeft: "4px !important",
                  display: isDesktop ? "" : "none",
                }}
              >
                <Tooltip title={product.inprice.toString()}>
                  <span>{product?.inprice}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                style={{
                  width: isDesktop ? "" : isTablet ? "10%" : "35%",
                  maxWidth: isDesktop ? '' : '50px',
                  padding: 0,
                  paddingLeft: "4px !important",
                }}
              >
                <Tooltip title={product.price.toString()}>
                  <span>{product?.price}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                style={{
                  width: isDesktop ? "10%" : "15%",
                  maxWidth: isDesktop ? '' : '50px',
                  padding: 0,
                  paddingLeft: "4px !important",
                  display: isDesktop || isTablet ? "" : "none",
                }}
              >
                <Tooltip title={product.unit}>
                  <span>{product?.unit}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                style={{
                  width: isDesktop ? "12%" : "15%",
                  maxWidth: isDesktop ? '' : '50px',
                  padding: 0,
                  paddingLeft: "4px !important",
                  display: isDesktop || isTablet ? "" : "none",
                }}
              >
                <Tooltip title={product.stock.toString()}>
                  <span>{product?.stock}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                style={{
                  width: "24%",
                  maxWidth: isDesktop ? '' : '50px',
                  padding: 0,
                  paddingLeft: "4px !important",
                  display: isDesktop ? "" : "none",
                }}
              >
                <Tooltip title={product.description}>
                  <span>{product?.description}</span>
                </Tooltip>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  border: "none !important",
                  cursor: "pointer",
                  display: isDesktop || isTablet ? "" : "flex",
                }}
              >
                <IconButton onClick={handleMenuClick} style={{padding: 0}}>
                <MoreHorizIcon />
                </IconButton>
                <Popover
                  open={isMenuOpen}
                  anchorEl={anchorEl}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  PaperProps={{
                    style: {
                      boxShadow: '0px 0px 0px 1px #ffffff',
                      border: '1px solid #e4dede'
                    },
                  }}
                >
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <MenuList>
                      <MenuItem onClick={handleDeleteProduct}>
                        <DeleteIcon style={{color: '#d80128'}}/>
                         <Typography style={{fontSize: '12px'}}>Delete Product</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleEditProduct}>
                        <EditIcon style={{color: '#3ca3da'}}/>
                         <Typography style={{fontSize: '12px'}}>Edit Product</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <CloseIcon /> <Typography style={{fontSize: '12px'}}>Close</Typography>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
