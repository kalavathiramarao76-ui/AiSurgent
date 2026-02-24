import { useEffect, useState } from 'react'

const YT_CHANNEL_ID = 'UCjfTDoriZMoXlAeQ5oebRhw'
const YT_API_KEY = 'AIzaSyCfdxxo4ya-KBvkw0wJzZxMEggZ7P2k_Ys'
const YT_API_URL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YT_CHANNEL_ID}&key=${YT_API_KEY}`

export function formatCount(num) {
  if (!num) return null
  const n = parseInt(num, 10)
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M+'
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K+'
  return n.toString()
}

export function useYouTubeStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch(YT_API_URL)
      .then(res => res.json())
      .then(data => {
        const s = data?.items?.[0]?.statistics
        if (s) setStats(s)
      })
      .catch(() => {})
  }, [])

  return stats
}
