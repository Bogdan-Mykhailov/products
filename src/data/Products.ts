import {Product} from "@/types/Product";

const products: Product[] = Array.from({length: 48}, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `Description for product ${i + 1}`,
  price: (i + 1) * 10,
}));

export default products;
