export interface IGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: number;
  freatures: Array<string>;
  permission_new: string;
}
