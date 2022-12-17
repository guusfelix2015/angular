export interface Moment {
  id?: number;
  title: string;
  descriptiom: string;
  image: string;
  created_at?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];
}
