export type ButtonProps = {
  name: string;
  disabled?: boolean;
  type?: string;
  mb?: number;
  mt?: number;
  buttonType?: BUTTON_TYPE;
  showIcon?: boolean;

  [key: string]: any;
};

export enum BUTTON_TYPE {
  LIGHT = "light",
  OUTLINED = "outlined",
  DEFAULT = "default",
}
