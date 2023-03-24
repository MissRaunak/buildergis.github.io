import { ButtonGroupProps, TextAlignValue, ButtonType } from 'jimu-ui';
declare type TextAlignmentProps = Omit<ButtonGroupProps, 'onChange'> & {
    buttonType?: ButtonType;
    textAlign?: TextAlignValue;
    onChange?: (value: TextAlignValue) => void;
    showJustify?: boolean;
    autoFlip?: boolean;
};
export declare const TextAlignment: (props: TextAlignmentProps) => JSX.Element;
export {};
