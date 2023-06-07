import { getProducts } from "@/service/products";
import MeowArticle from "../../../components/MeowArticle";
import Image from "next/image";
import Link from "next/link";
import clothesImage from "../../../public/images/clothes.jpg";
// const products = ["shirt", "pants", "skirt", "shoes"];

// export const revalidate = 3;

export default async function ProductsPage() {
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 , 보여주기
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
      <Image src={clothesImage} alt="clothes" priority />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="clothes"
        width={400}
        height={400}
      />
    </>
  );
}
