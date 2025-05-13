import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";
import type React from "react";

type Props = {
	children: React.ReactNode;
};

export function Text({ children }: Props) {
	return (
		<span
			className={`${GeistSans.className} h-full duration-300 transition-all flex items-center brightness-90 hover:brightness-100 active:brightness-75 font-light gap-2 text-xs xs:text-base`}
		>
			{children}
		</span>
	);
}
