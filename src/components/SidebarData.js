export const SidebarData = () => {
  const data = []

  for (let i = 0; i < window.env.PAGE_SIZE; i++) {
    if (i === 0) {
      data.push({
        title: i + 1,
        path: '/',
        className: 'nav-text'
      })
    } else {
      data.push({
        title: i + 1,
        path: `/${i}`,
        className: 'nav-text'
      })
    }
  }

  return data
}
