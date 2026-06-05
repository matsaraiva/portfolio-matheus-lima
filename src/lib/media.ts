export function withBasePath(src: string) {
  if (
    !src ||
    src.startsWith("http") ||
    src.startsWith("data:") ||
    src.startsWith("#") ||
    src.startsWith("mailto:")
  ) {
    return src;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${src}`;
}

export function getExternalVideoEmbed(src: string) {
  if (!src) {
    return "";
  }

  try {
    const url = new URL(src);

    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : src;
    }

    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    }

    if (url.hostname.includes("vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}` : src;
    }
  } catch {
    return src;
  }

  return src;
}

export function isExternalUrl(src: string) {
  return /^https?:\/\//.test(src);
}
