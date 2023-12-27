export function setLocalStore(item: string, store: any) {
    try {
        localStorage.setItem(item, JSON.stringify(store || {}))
    } catch (e) {
        console.log('localStorage.setItem', e)
    }
}

export function remLocalStore(key: string) {
    try {
        localStorage.removeItem(key)
    } catch (e) {
        console.log('localStorage.removeItem', e)
    }
}

export function getLocalStore(item: string) {
    return JSON.parse(localStorage.getItem(item) as string) ?? undefined
}
