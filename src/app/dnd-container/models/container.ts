import {Item} from './item';

export interface Container {
  id: number;
  disabled?: boolean;
  label?: string;
  name: string;
  items: Item[];
}
