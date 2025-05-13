"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function HTML({ children }: { children: React.ReactNode }) {
	const { lang } = useParams<{ lang: string }>();
	const searchParams = useSearchParams();
	const htmlElement = useRef<HTMLHtmlElement>(null);

	useEffect(() => {
		const theme = localStorage.getItem("theme");

		if (!theme) {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;

			if (!htmlElement.current) return;

			if (prefersDark) {
				htmlElement.current.classList.add("dark");
			} else {
				htmlElement.current.classList.remove("dark");
			}

			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", (e) => {
					if (!localStorage.getItem("theme")) {
						htmlElement.current?.classList.toggle("dark", e.matches);
					}
				});

			return;
		}

		htmlElement.current?.classList.toggle("dark", theme === "dark");
	}, []);

	return (
		<html ref={htmlElement} lang={lang} data-theme={searchParams.get("theme")}>
			{children}
		</html>
	);
}
