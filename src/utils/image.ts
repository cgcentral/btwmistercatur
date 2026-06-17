/**
 * Highly efficient image proxy URL generator using images.weserv.nl.
 * Converts remote, heavy images into modern formats like WebP or AVIF,
 * allows resizing (width/height), and caches them on Cloudflare CDN for 1 year.
 */
export function getOptimizedImageUrl(
  url: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'png' | 'jpg';
    fit?: 'cover' | 'contain' | 'inside' | 'outside';
  }
): string {
  if (!url) return '';
  
  // Only proxy remote http/https images
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return url;
  }

  // Ensure url is securely sent as https to weserv
  const cleanUrl = url.replace('http://', 'https://');

  const params = new URLSearchParams();
  params.set('url', cleanUrl);
  
  if (options?.width) params.set('w', options.width.toString());
  if (options?.height) params.set('h', options.height.toString());
  
  // Default to a high performance, highly compressed webp format
  params.set('output', options?.format || 'webp');
  
  // Default quality list
  params.set('q', (options?.quality || 80).toString());

  if (options?.fit) {
    params.set('a', options.fit);
  }

  return `https://images.weserv.nl/?${params.toString()}`;
}
