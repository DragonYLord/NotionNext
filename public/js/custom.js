// 这里编写自定义js脚本；将被静态引入到页面中

/*
 * Append this script to public/js/custom.js in the deployed NotionNext repository.
 * Scope: native Notion video blocks in every blog article.
 * Uses the original uploads; does not re-encode or replace the videos.
 */
;(() => {
  const installedKey = '__notionVideoAutoplayInstalledV1'
  if (window[installedKey]) return
  window[installedKey] = true

  const selector = '#notion-article .notion-asset-wrapper-video video'
  const initialized = new WeakSet()
  let scheduled = false

  function enableVideoLoop() {
    scheduled = false

    document.querySelectorAll(selector).forEach(video => {
      if (!(video instanceof HTMLVideoElement) || initialized.has(video)) return
      initialized.add(video)

      video.defaultMuted = true
      video.muted = true
      video.loop = true
      video.autoplay = true
      video.playsInline = true
      // Native controls provide sound, volume, seeking and fullscreen.
      video.controls = true

      // If the browser refuses autoplay, keep a usable manual play control.
      const playback = video.play()
      if (playback && typeof playback.catch === 'function') {
        playback.catch(() => {
          if (video.isConnected) video.controls = true
        })
      }
    })
  }

  // NotionNext renders article media asynchronously, including client navigation.
  const observer = new MutationObserver(() => {
    if (scheduled) return
    scheduled = true
    window.requestAnimationFrame(enableVideoLoop)
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
  enableVideoLoop()
})()
