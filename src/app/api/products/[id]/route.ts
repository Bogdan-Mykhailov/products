import {NextRequest, NextResponse} from "next/server";
import products from "@/data/Products";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const product = products.find((product) => product.id === parseInt(id));

  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}
