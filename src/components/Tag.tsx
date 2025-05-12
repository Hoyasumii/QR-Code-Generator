export function Tag({
	className,
	children,
}: { className?: string; children: React.ReactNode }) {
	return (
		<div
			className={`rounded-full py-0.5 px-2 text-xs w-fit font-black bg-stone-950 select-none ${className}`}
		>
			{children}
		</div>
	);
}
