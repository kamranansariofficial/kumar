import React from "react";
import {
    Button,
    Table,
    Box,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));
const rows = [
    {
        code: 2727,
        rate: 500,
        quantity: 400,
        amount: "2,40,000 INR",
    },
];
const dialogRow = [
    {
        box: 1,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 2,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 3,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 4,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 5,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    }, {
        box: 6,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 7,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 8,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 9,
        code: 10,
        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
    },
    {
        box: 10,
        code: 10,

        size42: 10,
        size44: 80,
        size46: 46,
        damaged: 500,
        quantity: 400,
        rate: "400INR",
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
                        position: "absolute",
                        right: 8,
                        top: 8,
                        textTransform: "capitalize",
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
export default function TableDialog({ row }) {
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Typography variant="body2" onClick={handleClickOpen}>
                {row.boxes}
            </Typography>

            <BootstrapDialog
                sx={{ "& .MuiDialog-paper": { md: { maxWidth: 944, width: "100%" } } }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    sx={{ fontWeight: 600 }}
                    onClose={handleClose}
                >
                    Detailed Inventory Check/Update
                </BootstrapDialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead sx={{ borderBottom: "none" }}>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell sx={{ fontWeight: 600 }}>Boxes</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Design code</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Rate/price</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Quantity</TableCell>
                                <TableCell sx={{ fontWeight: 600 }} align="right">
                                    Total Amount
                                </TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((v) => (
                                <TableRow
                                    key={Math.random()}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.boxes}
                                    </TableCell>
                                    <TableCell>{v.code}</TableCell>
                                    <TableCell>{v.rate}</TableCell>
                                    <TableCell align="center">{v.quantity}</TableCell>
                                    <TableCell align="right">{v.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHead sx={{ bgcolor: "#5b6266" }}>
                            <TableRow>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                                    Boxes
                                </TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                                    Size42
                                </TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                                    Size44
                                </TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}>
                                    Size46
                                </TableCell>
                                <TableCell sx={{ color: "#ffff", fontWeight: 600 }}
                                align="center"
                                >
                                    Damaged
                                </TableCell>
                                <TableCell
                                    sx={{ color: "#ffff", fontWeight: 600 }}
                                    align="left"
                                >
                                    Quantity
                                </TableCell>
                                <TableCell
                                    sx={{ color: "#ffff", fontWeight: 600 }}
                                    align="left"
                                >
                                    Rate
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dialogRow.map((v) => (
                                <TableRow
                                    key={Math.random()}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {v.box}
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            defaultValue={v.size42}
                                            fullWidth
                                            variant="outlined"
                                        /></TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            defaultValue={v.size44}
                                            fullWidth
                                            variant="outlined"
                                        /></TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            defaultValue={v.size46}
                                            fullWidth
                                            variant="outlined"
                                        /></TableCell>
                                    <TableCell align="center">
                                        <TextField
                                            size="small"
                                            defaultValue={v.damaged}
                                            fullWidth
                                            variant="outlined"
                                        /></TableCell>
                                    <TableCell align="left">
                                        <TextField
                                            size="small"
                                            defaultValue={v.quantity}
                                            fullWidth
                                            variant="outlined"
                                        /></TableCell>
                                    <TableCell align="left">
                                        <TextField
                                            size="small"
                                            defaultValue={v.rate}
                                            fullWidth
                                            variant="outlined"
                                        />
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
    );
}
