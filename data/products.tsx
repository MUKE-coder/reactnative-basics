import { ItemProps } from "@/components/Product";

export async function fetchProducts(): Promise<ItemProps[]> {
  const response = await fetch(
    "https://inventory-app-ten-gilt.vercel.app/api/v1/products"
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch Products");
  }
  const result = await response.json();
  const products = result.data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      price: item.productPrice,
      color: "text-blue-600",
      image: item.productThumbnail,
    };
  });
  return products;
}
