export function generatePageTitle(params: {
  title?: string;
  titleTemplate?: string;
  defaultTitle?: string;
} = {}) {
  const { title = '', titleTemplate = '', defaultTitle = '' } = params;
  if (!title) {
    return defaultTitle;
  }

  if (titleTemplate) {
    return titleTemplate.replaceAll('%s', title);
  }

  return title || defaultTitle;
}
