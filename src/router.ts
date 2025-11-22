import { useEffect, useState } from 'react'

export type Route =
  | { name: 'home' }
  | { name: 'tutorial'; slug: string }

function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '')
  const parts = raw.split('/').filter(Boolean)
  if (parts.length >= 2 && parts[0] === 'tutorial') {
    return { name: 'tutorial', slug: parts[1] }
  }
  return { name: 'home' }
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash(window.location.hash))

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}