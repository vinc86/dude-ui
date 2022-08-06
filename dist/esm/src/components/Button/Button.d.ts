import React, { FC } from "react";
declare type Props = {
    label: string;
    rounded?: boolean;
    background?: string;
};
declare const Button: FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>>;
export default Button;
