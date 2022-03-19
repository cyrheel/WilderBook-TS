export interface ISkill {
  _id?: string;
  id?: number;
  title: string;
  votes: number;
}

interface IWilder {
  _id?: string;
  name: string;
  city: string;
  skills: ISkill[];
}

export default IWilder;