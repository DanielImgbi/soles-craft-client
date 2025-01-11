export type Product = {
  id: number;
  description: string;
  images: string[];
};

export type LoginT = {
  email: string;
  password: string;
};

export type AddProductT = {
  name: string;
  description: string;
  images: File | File[] | string | null;
};
