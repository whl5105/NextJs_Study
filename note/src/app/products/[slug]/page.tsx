import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import GoProductsButton from "../../../../components/GoProductsButton";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

//Dynamic metadata
export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

//generateStaticParams : 동적인 페이지 SSR -> 특정 페이지 SSG 변환
// export function generateStaticParams() {
//   const products = ["pants", "skirt"];
//   return products.map((product) => ({
//     slug: product,
//   }));
// }

export async function generateStaticParams() {
  // const products = ["pants", "skirt"];
  // return products.map((product) => ({
  //   slug: product,
  // }));

  //모든 제품의 페이지들을 미리 SSG 변환
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({ params: { slug } }: Props) {
  // if (params.slug === "nothing") {
  //   notFound();
  // }
  // return <h1>{params.slug} 제품 설명 페이지</h1>;

  //서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 보여줌
  const product = await getProduct(slug);
  if (!product) redirect("/products");
  // if (!product) notFound();
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
      <GoProductsButton />
    </>
  );
}
