import { GeistSans } from "geist/font/sans";

export function Body({
	children,
	className,
	...props
}: React.ComponentProps<"body">) {
	return (
		<body
			className={`${GeistSans.className} data-[dark=true]:scheme-dark bg-stone-50 dark:bg-stone-950 text-stone-950 dark:text-stone-200 antialiased bg-[url("/dot-w.webp")] dark:bg-[url("/dot-d.webp")] bg-repeat bg-[length:32px] flex flex-col items-center min-h-svh max-w-svw relative transition duration-300 ${className}`}
			{...props}
		>
			{children}
		</body>
	);
}
