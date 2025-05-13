export function Button({
	children,
	type,
	className,
  ...props
}: React.ComponentProps<"button">) {
	return (
		<button
			type={type || "button"}
			className={`border p-[3px] rounded border-transparent hover:border-stone-300/60 hover:dark:border-stone-600/20 transition duration-300 cursor-pointer hover:dark:bg-stone-900 hover:bg-stone-50 active:dark:bg-stone-800 active:bg-stone-100 hover:shadow-xs ${className}`}
      {...props}
		>
			{children}
		</button>
	);
}
