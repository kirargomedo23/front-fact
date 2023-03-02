export interface TableColumn<T> {
  label: string;
  property: string;
  type: 'text' |  'badge' | 'button';
}
