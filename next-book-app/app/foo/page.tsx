import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fooページ",
  openGraph: {
    title: "Fooページ(OGP)"
  }
};


export default function Foo() {
    return <h1>Fooページ</h1>;
}