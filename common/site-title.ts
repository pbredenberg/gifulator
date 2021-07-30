/*
 * Function to generate page title for HTML meta tags.
 */
export function siteTitle(pageTitle?: string) {
  const siteName = 'Gifulator';
  return pageTitle ? `${pageTitle} - ${siteName}` :  siteName;
}
