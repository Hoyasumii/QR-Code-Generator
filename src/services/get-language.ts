import { languagesByCountry } from "@/contants";

export function getLanguage(countryCode: string): string {
  for (const [language, countries] of Object.entries(languagesByCountry)) {
    if (countries.find(country => country === countryCode)) return language;
  }

  return "en";
}
