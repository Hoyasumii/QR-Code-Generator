"use client";

import { generateQrCode, pickDictionary } from "@/services";
import { useState } from "react";
import { Link } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Home() {
	const language = usePathname().slice(1);

	const { placeholder, title } = pickDictionary(language).page;

	const [urlContent, setUrlContent] = useState<string>("");
	const [qrCode, setQrCode] = useState<[string, string]>(["", ""]);

	const handleUpdateUrlContent = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const value = e.target.value;

		setUrlContent(value);

		setQrCode(await generateQrCode(value));
	};

	return (
		<main className="flex-1 pt-12 sm:pt-16 w-11/12 sm:w-8/12 lg:w-4/12 flex flex-col gap-8 items-center">
			<div className="w-full pb-4 border-b-[0.5px] border-stone-700/50 relative flex justify-center">
				<h1 className="font-black uppercase text-center text-3xl sm:text-4xl">
					{title}
				</h1>
			</div>

			<div className="w-full border bg-stone-50 dark:bg-stone-950/20 backdrop-blur-xs border-stone-950/20 dark:border-stone-50/20 has-focus:border-stone-950/40 dark:has-focus:border-stone-50/40 has-focus:ring-2 ring-sky-200/60 dark:ring-sky-700/40 text-stone-800 dark:text-stone-200 p-2 rounded-md transition flex gap-2 divide-x divide-stone-950/20 dark:divide-stone-500 *:pe-2 items-center">
				<Link className="size-7 text-stone-500" />
				<input
					id="url"
					type="text"
					value={urlContent}
					onChange={handleUpdateUrlContent}
					autoComplete="off"
					className="outline-0 w-full placeholder-stone-400 dark:placeholder-stone-600"
					placeholder={placeholder}
				/>
			</div>

			{urlContent.length > 0 && qrCode[0].length > 0 && (
				<>
					<img
						src={qrCode[0]}
						alt="QR Code"
						className="not-dark:hidden size-80"
					/>
					<img src={qrCode[1]} alt="QR Code" className="dark:hidden size-80" />
				</>
			)}
		</main>
	);
}
