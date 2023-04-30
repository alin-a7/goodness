import { FC, ReactNode } from 'react'

import styles from './Modal.module.scss'

type ModalProps = {
  content: ReactNode
  close: () => void
}

const Modal: FC<ModalProps> = ({ content, close }) => {
  return (
    <>
      <div className={styles.childrenBlock}>{content}</div>
      <div className={styles.blackout} onClick={() => close()}></div>
    </>
  )
}

export default Modal
