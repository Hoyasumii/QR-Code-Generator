"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { getInitialTheme } from "@/services/get-initial-theme";

export function HTML({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<"dark" | undefined>(() => undefined);
	const { lang } = useParams<{ lang: string }>();

	useEffect(() => {
		setTheme(getInitialTheme());
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<html lang={lang} className={theme === "dark" ? "dark" : ""}>
				{children}
			</html>
		</ThemeContext.Provider>
	);
}
