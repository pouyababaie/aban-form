export interface ISharedModel {
  name: string;
  code: number;
  inactive?: boolean;
}
export interface IGender extends ISharedModel {}

export interface IMiliteryStatus extends ISharedModel {}

export interface IGrade extends ISharedModel {}

export interface IWorkExp extends ISharedModel {}

export interface IConsentLetter extends ISharedModel {}

export interface IEnglishKnowledge extends ISharedModel {}

export interface ICertifChecks {
  description: string;
  value: boolean;
}
