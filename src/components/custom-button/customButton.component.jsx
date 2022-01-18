import { Button,styled } from '@mui/material'
import React from 'react'


const StyledButton = styled(Button)(({theme})=>({
    width:'fit-content',
    height:'fit-content',
    borderRadius:5,
    padding: '5px 30px',
    border:`1px solid ${theme.palette.colors.secondary}`,
    ...theme.palette.textGradients.txtGrad1
}))

const CustomButton = ({children,...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default CustomButton
