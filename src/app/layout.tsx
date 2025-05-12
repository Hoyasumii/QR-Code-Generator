import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { pickDictionary } from "@/services";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
	const requestHeaders = await headers();

	const lang = requestHeaders.get("lang") || "en";

	const { title, description } = pickDictionary(lang).og;

	return {
		title,
		description,
		openGraph: {
			type: "website",
			locale: "pt-BR",
			title,
			description,
			images: {
				url: `${process.env.BASE_URL}/og-cover.webp`,
			},
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${GeistSans.className} bg-stone-50 dark:bg-stone-950 text-stone-950 dark:text-stone-200 antialiased bg-[url("/dot-w.webp")] dark:bg-[url("/dot-d.webp")] bg-repeat bg-[length:32px] flex flex-col min-h-svh max-w-svw relative`}
			>
				<Navbar.Root>
					<Navbar.Text>
						Made by <Link href={process.env.OWNER_SITE_URL} className="font-bold hover:underline" target="_blank">Alan Reis</Link>
					</Navbar.Text>
				</Navbar.Root>
				{children}
			</body>
		</html>
	);
}
