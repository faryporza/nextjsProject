export function getImagePath(path: string): string {
  // Check if we're in production and need to use the basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/nextjsProject' : '';
  
  // Make sure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return the path with the basePath prepended
  return `${basePath}${normalizedPath}`;
}
