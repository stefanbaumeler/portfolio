import { ReactNode, TouchEvent, useEffect, useRef, useState } from 'react'
import { TQMap } from '~/schema'
import { useBodyContext } from '@/context/body'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js'

type Props = {
    activeObject?: TQMap['place'][number] | TQMap['transportation'][number]
    onClose: () => void
    title: string
    subtitle?: string
    children: ReactNode
    type?: 'place' | 'transportation'
}

export const Drawer = ({
    activeObject, title, subtitle, onClose, children, type = 'place'
}: Props) => {
    const [active, setActive] = useState(false)
    const [big, setBig] = useState(false)
    const [startDrag, setStartDrag] = useState(0)
    const [offset, setOffset] = useState(0)
    const [animated, setAnimated] = useState(false)
    const drawerEl = useRef<HTMLDivElement>(null)
    const [drawerActiveHeight, setDrawerActiveHeight] = useState(0)
    const [translate, setTranslate] = useState('')
    const { setFixed } = useBodyContext()
    const { isMobile } = useBodyContext()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (activeObject) {
            if (isMobile) {
                setFixed(true)
            }

            setTimeout(() => {
                setAnimated(true)
                setActive(true)
            }, 10)

            setTimeout(() => {
                setAnimated(false)
            }, 260)
        }
    }, [activeObject])

    useEffect(() => {
        if (active) {
            const naturalHeight = drawerEl.current?.clientHeight ?? 0
            const maxHeight = type === 'place' ? window.innerHeight / 2 : Infinity
            let height = naturalHeight

            if (naturalHeight > maxHeight) {
                height = maxHeight
            }
            setDrawerActiveHeight(height)
            setVisible(true)
        }
    }, [active, activeObject])

    useEffect(() => {
        setTranslate(`${isMobile ? `0 calc(100svh - ${active ? drawerActiveHeight : 0}px + ${big ? -50 : 0}svh + ${big ? 100 : 0}px + ${!big || offset > 0 ? offset : 0}px)` : `${active ? '-10px' : ''}`}`)
    }, [isMobile, active, drawerActiveHeight, big, offset])

    useEffect(() => {
        setTranslate(`${isMobile ? `0 calc(100svh - ${active ? drawerActiveHeight : 0}px + ${big ? -50 : 0}svh + ${big ? 100 : 0}px + ${!big || offset > 0 ? offset : 0}px)` : ''}`)
    }, [])

    const close = () => {
        setActive(false)
        setBig(false)
        setAnimated(true)
        setTranslate(isMobile ? '0 100svh' : '')

        if (isMobile) {
            setFixed(false)
        }

        setTimeout(() => {
            setAnimated(false)
            setVisible(false)
            onClose()
        }, 250)
    }

    const onTouchStart = (event: TouchEvent) => {
        if (isMobile) {
            setStartDrag(event.touches[0]?.clientY ?? 0)
        }
    }

    const onTouchMove = (event: TouchEvent) => {
        if (isMobile) {
            const newOffset = (event.touches[0]?.clientY ?? 0) - startDrag
            if (drawerEl.current?.scrollTop === 0) {
                if ((drawerEl.current?.getBoundingClientRect().bottom ?? 0) - 100 > window.innerHeight) {
                    setOffset(newOffset)
                } else {
                    setOffset(Math.max(0, newOffset))
                }
            }
        }
    }

    const onTouchEnd = () => {
        if (!isMobile) {
            return
        }

        if (offset > 10) {
            close()

            setTimeout(() => {
                setOffset(0)
            }, 250)
        }

        if (offset < -10 && drawerEl.current?.scrollTop === 0) {
            setAnimated(true)
            setOffset(0)
            setBig(type === 'place')

            setTimeout(() => {
                setAnimated(false)
                setOffset(0)
            }, 250)
        }
    }

    return <div
        className={`drawer drawer--${type}${active ? ' drawer--active' : ''}drawer--${type}${visible ? ' drawer--visible' : ''}${big ? ' drawer--big' : ''}${animated ? ' drawer--animated' : ''}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={drawerEl}
        style={{
            translate
        }}
    >
        <div className="drawer__header">
            <button
                className="drawer__close"
                onClick={close}
            >
                <Icon path={mdiClose} />
            </button>
            <h2 className="drawer__title">
                {title ?? ''}
            </h2>
            {subtitle ? <span className="drawer__subtitle">
                {subtitle}
            </span> : null}
        </div>
        {children}
    </div>
}
