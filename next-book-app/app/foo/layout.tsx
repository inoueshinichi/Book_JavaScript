import Link from "next/link";

export default function FooLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <nav>
                <a href="/foo">foo</a>/<a href="/foo/bar">bar</a>
            </nav>
            <nav>
              <Link href="/foo" prefetch={false}>fooLink</Link>/<Link href="/foo/bar" prefetch={false}>barLink</Link>
            </nav>
            {children}
        </>
    );
}