import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    label: string;
    rounded?: boolean;
    background?: string;
};

export const Button: FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ label, rounded = false, background, ...props }) => {
    return (
        <ButtonComponent rounded={rounded} {...props}>
            {label}
        </ButtonComponent>
    );
};

type StyleProps = {
    background?: string;
    rounded?: boolean;
};
const ButtonComponent = styled.button<StyleProps>`
    background: ${({ background }) => background && background};
    border-radius: ${(props) => props.rounded && '10px'};
    padding: 10px;
`;
