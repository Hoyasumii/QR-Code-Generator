import dictionary from "@/dictionaries";

export function pickDictionary(lang: string): typeof dictionary.en {
  return dictionary[lang as keyof typeof dictionary] || dictionary.en;
}
