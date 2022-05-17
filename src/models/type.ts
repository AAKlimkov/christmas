type Toys = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  getLove?: (e: React.MouseEvent<HTMLElement>) => void;
};

export default Toys;
