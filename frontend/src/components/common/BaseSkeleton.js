import React from 'react';
import { Skeleton } from '@mui/material';
import styled from '@emotion/styled';

const StyledSkel = styled(Skeleton)(() => ({
    '& .MuiSkeleton-root': {
        animationDuration: '.3sec',
    },
}));

export default function BaseSkeleton({
    variant = 'rounded',
    width = '100%',
    height = '2rem',
    shadow,
}) {
    const boxShadow = shadow ? shadow : 'none';
    return (
        <StyledSkel
            variant={variant}
            animation='wave'
            sx={{
                width: width,
                height: height,
                boxShadow: boxShadow,
            }}
        />
    );
}