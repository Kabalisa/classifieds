export type InputProps = {
  name: string;
  label: string;
  error: string | undefined;
  type?: INPUT_TYPE;
  mb?: number;

  [key: string]: any;
};

export enum INPUT_TYPE {
  TEXT = "text",
  PASSWORD = "password",
}
