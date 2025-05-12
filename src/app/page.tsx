import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
	const requestHeaders = await headers();

	const lang = requestHeaders.get("lang") || "en";

	return redirect(`/${lang}`);
}
