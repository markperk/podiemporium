const routeTitles = {
  '/home': 'Home',
  '/home/reviews': 'Reviews',
  '/home/reports': 'Reports',
  '/home/standards': 'Standards',
}

export const getRouteTitles = path =>
  routeTitles[path]