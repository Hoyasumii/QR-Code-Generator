import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

import "./globals.css";
import { pickDictionary } from "@/services";

import { ToggleTheme } from "@/components";
import { Body, Button, HTML, Navbar } from "@/components/asdjbakjdb";
import { ClockHistory, Github } from "@/components/asdkjba";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
	const requestHeaders = await headers();

	const lang = requestHeaders.get("lang") || "en";

	const { title, description } = pickDictionary(lang).og;

	return {
		title,
		metadataBase: new URL(process.env.BASE_URL),
		description,
		openGraph: {
			type: "website",
			siteName: title,
			url: new URL(process.env.BASE_URL),
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
		<Suspense>
			<HTML>
				<Body>
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
						<div className="flex-1 flex flex-row-reverse items-center justify-start gap-2">
							<Button>
								<Link href={process.env.REPO_URL} target="_blank">
									<Github className="cursor-pointer transition duration-300 dark:text-stone-300 dark:hover:text-stone-200 size-6" />
								</Link>
							</Button>
							<Button>
								<Link
									href={`${process.env.BASE_URL}/index.html`}
									target="_blank"
								>
									<ClockHistory className="cursor-pointer transition duration-300 dark:text-stone-300 dark:hover:text-stone-200 size-6" />
								</Link>
							</Button>
							<ToggleTheme />
						</div>
					</Navbar.Root>
					{children}
				</Body>
			</HTML>
		</Suspense>
	);
}
