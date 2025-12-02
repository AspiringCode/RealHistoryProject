export function createPageUrl(pageName) {
    if (!pageName) return '/';
    return `/${pageName.toLowerCase().replace(/\s+/g, '-')}`;
}
