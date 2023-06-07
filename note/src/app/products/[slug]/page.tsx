import { Metadata } from "next";
import { notFound } from "next/navigation";

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

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}
