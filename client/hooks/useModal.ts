import { useState } from 'react'

export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return {
    isVisible,
    close: () => setIsVisible(false),
    open: () => setIsVisible(true),
  }
}
