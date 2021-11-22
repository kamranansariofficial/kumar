import React from 'react';
import {
    Button,
    Table,
    Box,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField
} from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const rows = [
    {
        lot: "129902",
        bundle: 10,
        box: 80,
        size: "36-46",
        quantity: 400,
        amount: "2,40,000 INR"
    },
];
const dialogRow = [
    {
        lot: "129902",
        bundle: 10,
        box: 80,
        size: "36-46",
        quantity: 400,
        amount: "2,40,000 INR",
        type: "number"
    },
    {
        lot: "129902",
        bundle: 10,
        box: 80,
        size: "36-46",
        quantity: 400,
        amount: "2,40,000 INR",
        type: "text"
    },
];
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <Button
                    varaint="text"
                    color="secondary"
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        textTransform: "capitalize"
                    }}
                >
                    Close
                    <CloseIcon />
                </Button>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
export default function TableDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <Button variant="contained" color="secondary" size="small" onClick={handleClickOpen}>Add Details</Button>
              <BootstrapDialog
                sx={{ '& .MuiDialog-paper': { md: { maxWidth: 844, width: '100%' } } }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" sx={{ fontWeight: 600 }} onClose={handleClose}>
                    Lot No. 129902
                </BootstrapDialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead sx={{ borderBottom: "none" }}>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontWeight: 600 }}>Lot No</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} >Bundles#</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Boxes</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} >Size</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="center" >Quantity</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">Total Amount</TableCell>
                                <TableCell align="right" ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((v) => (
                                <TableRow
                                    key={Math.random()}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {v.lot}
                                    </TableCell>
                                    <TableCell >{v.bundle}</TableCell>
                                    <TableCell >{v.box}</TableCell>
                                    <TableCell >{v.size}</TableCell>
                                    <TableCell align="center" >{v.quantity}</TableCell>
                                    <TableCell align="right" >{v.amount}</TableCell>
                                    <TableCell align="right" ></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHead sx={{ bgcolor: "#5b6266" }}>
                            <TableRow >
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>Boxes</TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }} >Design code</TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>Size</TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }} >Rate/Price</TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }} align="center" >Quantity</TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }} align="right">Amount(INR)</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key={Math.random()}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <TextField
                                    size="small"
                                        defaultValue="129902"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                    size="small"
                                        defaultValue="10"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                    size="small"
                                        defaultValue="80"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                    size="small"
                                        defaultValue="30-46"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                    size="small"
                                        defaultValue="400"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                    size="small"
                                        defaultValue="240000 INR"
                                        fullWidth
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell sx={{ display: "flex", alignItems:"center" }}>
                                    <IconButton size="large"><SaveOutlinedIcon /></IconButton>
                                    <IconButton size="large"><CloseIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                            {dialogRow.map((v) => (
                                <TableRow
                                    key={Math.random()}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {v.lot}
                                    </TableCell>
                                    <TableCell >{v.bundle}</TableCell>
                                    <TableCell >{v.box}</TableCell>
                                    <TableCell >{v.size}</TableCell>
                                    <TableCell align="center" >{v.quantity}</TableCell>
                                    <TableCell align="right" >{v.amount}</TableCell>
                                    <TableCell align="center" >
                                        <IconButton>
                                            <ModeEditOutlineOutlinedIcon />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </DialogContent>
                <Box my={2} sx={{ textAlign: "center" }}>
                    <Button variant="text" color="secondary" sx={{ px: 5, mx: 1 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ px: 5 }}>
                        Save
                    </Button>
                </Box>
            </BootstrapDialog>
        </>
    )
}
