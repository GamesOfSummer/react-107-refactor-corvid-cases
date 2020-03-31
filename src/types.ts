export interface state {
    state: string; case: number; death: number; updated: string
}

export function defaultState(): state {
    return {
        state: '', case: 0, death: 0, updated: Date.now().toLocaleString()
    }
}
