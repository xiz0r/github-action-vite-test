import React, { useEffect, ReactElement } from 'react'
import { browser } from 'webextension-polyfill-ts'
const image = browser.runtime.getURL('/assets/icons/icon48.png')

function App (): ReactElement {
  const matchUrl = 'opensea.io/assets'
  const [isExtensionEnabled, setIsExtensionEnabled] = React.useState(false)
  // execute handle history on mount
  useEffect(() => {
    browser.runtime.onMessage.addListener(handleHistoryChanged)

    if (document.location.href.includes(matchUrl)) {
      setIsExtensionEnabled(true)
      console.log('extension enabled')
    }

    return () => {
      browser.runtime.onMessage.removeListener(handleHistoryChanged)
    }
  }, [])

  function handleHistoryChanged (message: {type: string, payload: {url: string}}): void {
    switch (message.type) {
      case 'HISTORY_STATE_UPDATE': {
        if (message.payload.url.includes(matchUrl)) {
          setIsExtensionEnabled(true)
        } else {
          setIsExtensionEnabled(false)
        }
      }
    }
  }

  if (!isExtensionEnabled) {
    return <div />
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        right: 30
      }}
    >
      <img src={image} alt='icon' />
    </div>
  )
}

export default App
