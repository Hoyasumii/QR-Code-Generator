import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { pickDictionary } from "@/services";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/ui/Navbar";
import Link from "next/link";
import { ClockHistory, Github } from "@/components/Svg";
import { HTML } from "@/components";

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
		keywords: ["Alan Reis", "Alan", "QRCode", "qr"],
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<HTML>
			<body
				className={`${GeistSans.className} data-[dark=true]:scheme-dark bg-stone-50 dark:bg-stone-950 text-stone-950 dark:text-stone-200 antialiased bg-[url("/dot-w.webp")] dark:bg-[url("/dot-d.webp")] bg-repeat bg-[length:32px] flex flex-col items-center min-h-svh max-w-svw relative`}
			>
				<Navbar.Root>
					<Navbar.Text>
						Made by{" "}
						<Link
							href={process.env.OWNER_SITE_URL}
							className="font-bold hover:underline"
							target="_blank"
						>
							Alan Reis
						</Link>
					</Navbar.Text>
					<div className="flex-1 flex flex-row-reverse items-center justify-start gap-4">
						<Link href={process.env.REPO_URL} target="_blank">
							<Github className="cursor-pointer transition duration-300 dark:text-stone-300 dark:hover:text-stone-200 size-6" />
						</Link>
						<Link href={`${process.env.BASE_URL}/index.html`} target="_blank">
							<ClockHistory className="cursor-pointer transition duration-300 dark:text-stone-300 dark:hover:text-stone-200 size-6" />
						</Link>
					</div>
				</Navbar.Root>
				{children}
			</body>
		</HTML>
	);
}
