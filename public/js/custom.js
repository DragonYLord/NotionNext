// 这里编写自定义js脚本；将被静态引入到页面中

/*
 * Append this script to public/js/custom.js in the deployed NotionNext repository.
 * Scope: the uploaded MP4 block on /EP7 only.
 * Uses the existing Notion video URL; does not re-encode or replace the upload.
 */
;(() => {
  const installedKey = '__ep7VideoAutoplayInstalledV1'
  if (window[installedKey]) return
  window[installedKey] = true

  const selector =
    '#notion-article .notion-block-3e9ab4a7455080cd9838cb0d7a31ca73 video'
  const initialized = new WeakSet()
  let scheduled = false

  function enableVideoLoop() {
    scheduled = false
    if (window.location.pathname.replace(/\/+$/, '') !== '/EP7') return

    document.querySelectorAll(selector).forEach(video => {
      if (!(video instanceof HTMLVideoElement) || initialized.has(video)) return
      initialized.add(video)

      video.defaultMuted = true
      video.muted = true
      video.loop = true
      video.autoplay = true
      video.playsInline = true
      video.controls = false

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
