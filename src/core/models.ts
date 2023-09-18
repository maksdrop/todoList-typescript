
export type Task = {
  name: string;
  isChecked: boolean;
  id: number;
  onAdd?: {
    name: string
  }
}

export type CountType = {
  all: number,
  active: number,
  completed: number
}
