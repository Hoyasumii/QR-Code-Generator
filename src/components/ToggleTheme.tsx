"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui";

export function ToggleTheme() {
	return (
		<Button
			onClick={() => {
				const theme = localStorage.getItem("theme");

				if (!theme) {
					const prefersDark = window.matchMedia(
						"(prefers-color-scheme: dark)",
					).matches;

					localStorage.setItem("theme", prefersDark ? "dark" : "light");
					window.location.reload();
				}

				localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
				window.location.reload();
			}}
		>
			<Sun className="dark:hidden size-6" />
			<Moon className="not-dark:hidden size-6" />
		</Button>
	);
}
