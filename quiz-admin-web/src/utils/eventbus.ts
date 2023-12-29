import { EventEmitter } from 'events'
import { useEffect } from 'react'

export type EventHandler<E = any> = (e: E) => void

export function useEventBus<T = any>(event: string, cb: EventHandler<T>) {
    useEffect(() => {
        eventBus.on(event, cb)
        return () => {
            eventBus.off(event, cb)
        }
    })
}

const eventBus = new EventEmitter()
export default eventBus
