import React from 'react'
import Navbar from '#components/Navbar'
import Dock from '#components/Dock'
import Desktop from '#components/Desktop'
import Finder from '#components/Finder'
import Safari from '#components/Safari'
import Terminal from '#components/Terminal'
import Photos from '#components/Photos'
import Maps from '#components/Maps'
import TxtFile from '#components/TxtFile'
import ImgFile from '#components/ImgFile'
import Contact from '#components/Contact'
import Resume from '#components/Resume'
import { WindowProvider, useWindows } from '#context/WindowContext'

const AppContent = () => {
  const { windows, openWindow, closeWindow, focusWindow } = useWindows()

  const handleAppClick = (appId) => {
    openWindow(appId)
  }

  return (
    <main>
      <Navbar />
      <Desktop />
      
      {windows.finder.isOpen && (
        <div style={{ zIndex: windows.finder.zIndex }} onClick={() => focusWindow('finder')}>
          <Finder
            onClose={() => closeWindow('finder')}
            initialLocation={windows.finder.data?.location ?? 'projects'}
          />
        </div>
      )}
      
      {windows.safari.isOpen && (
        <div style={{ zIndex: windows.safari.zIndex }} onClick={() => focusWindow('safari')}>
          <Safari onClose={() => closeWindow('safari')} />
        </div>
      )}
      
      {windows.terminal.isOpen && (
        <div style={{ zIndex: windows.terminal.zIndex }} onClick={() => focusWindow('terminal')}>
          <Terminal onClose={() => closeWindow('terminal')} />
        </div>
      )}
      
      {windows.photos.isOpen && (
        <div style={{ zIndex: windows.photos.zIndex }} onClick={() => focusWindow('photos')}>
          <Photos onClose={() => closeWindow('photos')} initialAlbumId={windows.photos.data?.albumId} />
        </div>
      )}

      {windows.maps.isOpen && (
        <div style={{ zIndex: windows.maps.zIndex }} onClick={() => focusWindow('maps')}>
          <Maps onClose={() => closeWindow('maps')} />
        </div>
      )}
      
      {windows.contact.isOpen && (
        <div style={{ zIndex: windows.contact.zIndex }} onClick={() => focusWindow('contact')}>
          <Contact onClose={() => closeWindow('contact')} />
        </div>
      )}
      
      {windows.resume.isOpen && (
        <div style={{ zIndex: windows.resume.zIndex }} onClick={() => focusWindow('resume')}>
          <Resume onClose={() => closeWindow('resume')} />
        </div>
      )}

      {windows.txtfile.isOpen && (
        <div style={{ zIndex: windows.txtfile.zIndex }} onClick={() => focusWindow('txtfile')}>
          <TxtFile onClose={() => closeWindow('txtfile')} file={windows.txtfile.data} />
        </div>
      )}

      {windows.imgfile.isOpen && (
        <div style={{ zIndex: windows.imgfile.zIndex }} onClick={() => focusWindow('imgfile')}>
          <ImgFile onClose={() => closeWindow('imgfile')} file={windows.imgfile.data} />
        </div>
      )}

      <Dock onAppClick={handleAppClick} />
    </main>
  )
}

const App = () => {
  return (
    <WindowProvider>
      <AppContent />
    </WindowProvider>
  )
}

export default App