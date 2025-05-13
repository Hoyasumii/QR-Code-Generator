import type { LocationInterface } from "./types";

export async function getLocation(): Promise<LocationInterface> {
  const locationRequest = await fetch(process.env.LOCATION_API_URL, {
    cache: "force-cache",
  });

  if (!locationRequest.ok) throw new Error();

  return await locationRequest.json();
}
