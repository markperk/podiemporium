const routeTitles = {
  '/apps': 'apps',
  '/apps/guides': 'Guides',
  '/apps/reports': 'Reports',
  '/apps/guide': 'Guide',
}

export const getRouteTitles = path =>
  routeTitles[path]