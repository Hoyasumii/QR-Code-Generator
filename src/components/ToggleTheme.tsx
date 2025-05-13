"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui";
import { useContext } from "react";
import { ThemeContext } from "./ui/ThemeContext";

export function ToggleTheme() {
	const themeContext = useContext(ThemeContext);

	return (
		<Button
			onClick={() => {
				const theme = localStorage.getItem("theme");

				localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
				themeContext?.setTheme(theme === "dark" ? undefined : "dark");
			}}
		>
			<Sun className="dark:hidden size-6" />
			<Moon className="not-dark:hidden size-6" />
		</Button>
	);
}
