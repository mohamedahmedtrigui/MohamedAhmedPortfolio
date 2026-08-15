export function assetUrl(path) {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  if (path.startsWith(normalizedBase)) {
    return path;
  }

  return `${normalizedBase}${normalizedPath}`;
}
