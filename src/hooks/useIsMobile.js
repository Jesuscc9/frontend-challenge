import { useState, useEffect } from 'react'
import { useWindowSize } from "./useWindowSize"

export const useIsMobile = () => {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState(size.width < 960)

  useEffect(() => {
    setIsMobile(size.width < 960)
  }, [size])

  return isMobile
}