// types.ts

import { Buffer } from 'buffer';

export enum DataFormat {
  CSV = 'csv',
  JSON = 'json',
  XLSX = 'xlsx',
  XLS = 'xls',
  XML = 'xml',
  TXT = 'txt',
}

export type Record = {
  [key: string]: string | number | boolean | Date | Buffer;
};

export type Records = Record[];

export type FieldNames = string[];

export type FieldTypes = string[];

export type ColumnTypes = {
  [key: string]: string;
};

export type Options = {
  dataFormat: DataFormat;
  columnTypes?: ColumnTypes;
  fieldNames?: FieldNames;
  fieldTypes?: FieldTypes;
};