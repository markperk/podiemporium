const routeTitles = {
  '/apps': 'apps',
  '/apps/app-store': 'App Store',
  '/apps/reports': 'Reports',
  '/apps/guide': 'Guide',
}

export const getRouteTitles = path =>
  routeTitles[path]