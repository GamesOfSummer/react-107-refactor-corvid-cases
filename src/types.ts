export interface state {
    index: string, state: string; case: number; death: number; updated: string
}

export function defaultState(): state {
    return {
        index: '1', state: '', case: 0, death: 0, updated: Date.now().toLocaleString()
    }
}
