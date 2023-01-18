export const throttleWheelEvent = <Args extends unknown[]>(fn: (...args: Args) => void, interval: number) => {
    let shouldFire: boolean = true
    return (...args: Args) => {
        if (shouldFire) {
            fn.apply(this,args)
            shouldFire = false
            setTimeout(() => {
                shouldFire = true
            }, interval)
        }
    }
}
