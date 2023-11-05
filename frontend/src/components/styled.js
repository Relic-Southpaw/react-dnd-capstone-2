import {
    Box,
    Button,
    alpha,
    TextField,
    ListItemIcon,
    Grid,
    Typography,
} from '@mui/material';
import styled from '@emotion/styled';
// ******************************************** App

export const Background = styled('div')({
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
});

// ******************************************** Navbar

export const StyledGrid = styled(Grid)(() => ({
    gridTemplateRows: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    fontSize: '1.2rem',
}));

export const Brand = styled(Typography)(() => ({
    marginLeft: '2rem',
    fontSize: '1.7rem',
}));

// ******************************************** Forms

export const FormBox = styled(Box)(() => ({
    maxWidth: '350px',
    margin: 'auto',
}));

export const FormTextField = styled(TextField)(() => ({
    '& label': {
        '&:required': 'false'
    },
    '& .MuiOutlinedInput-root': {
        transition: 'all 200ms'
    },
    '& .MuiFormHelperText-root': {
        margin: 0,
        paddingLeft: '.5rem'
    },
}));

export const ErrorSpan = styled('span')(() => ({
    position: 'absolute',
}));

// ******************************************** Buttons

export const PrimaryButton = styled(Button)(() => ({
}));

export const CancelButton = styled(Button)(() => ({
}));

export const DeleteButton = styled(Button)(() => ({
    backgroundColor: 'rgb(220,0,0)',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgb(100,100,100',
    },
}));

// ******************************************** Icons

export const StyledIcon = styled(ListItemIcon)(() => ({
}));