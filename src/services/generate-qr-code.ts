import QRCode from "qrcode";

export async function generateQrCode(
  content: string
): Promise<[string, string]> {
  const dark = "#0c0a09";
  const light = "#fafaf9";

  const theming = {
    dark: {
      dark: light,
      light: "#fff0",
    },
    light: {
      dark,
      light: "#fff0",
    },
  };

  const returnValue: Array<string> = [];

  if (!content) return ["", ""];

  for await (const theme of Object.keys(theming)) {
    returnValue.push(
      await QRCode.toDataURL(content, {
        type: "image/webp",
        margin: 1,
        rendererOpts: {
          quality: 1,
        },
        scale: 10,
        color: theming[theme as keyof typeof theming],
      })
    );
  }

  return returnValue as [string, string];
}
