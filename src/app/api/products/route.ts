import {NextRequest, NextResponse} from "next/server";
import products from "@/data/Products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const start = (page - 1) * limit;
  const end = page * limit;
  const paginatedProducts = products.slice(start, end);

  return NextResponse.json({
    products: paginatedProducts,
    total: products.length,
    page,
    limit,
  });
}
