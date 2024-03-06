import type { SEOProps } from '../types';

function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

export function generateRobotsContent(params: SEOProps['robots']) {
  if (isBoolean(params)) {
    return params;
  }

  if (!params) {
    return 'index, follow';
  }

  const {
    noindex = false,
    nofollow = false,
    nosnippet = false,
    noarchive = false,
    maxSnippet,
    maxImagePreview,
    maxVideoPreview,
    unavailableAfter,
    noimageindex = false,
    notranslate = false,
  } = params;
  const content = [];

  content.push(noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow');

  if (nosnippet) {
    content.push('nosnippet');
  }

  if (isNumber(maxSnippet)) {
    content.push(`max-snippet:${maxSnippet}`);
  }

  if (maxImagePreview) {
    content.push(`max-image-preview:${maxImagePreview}`);
  }

  if (noarchive) {
    content.push('noarchive');
  }

  if (unavailableAfter) {
    content.push(`unavailable_after:${unavailableAfter}`);
  }

  if (noimageindex) {
    content.push('noimageindex');
  }

  if (isNumber(maxVideoPreview)) {
    content.push(`max-video-preview:${maxVideoPreview}`);
  }

  if (notranslate) {
    content.push('notranslate');
  }

  return content.join(', ');
}
