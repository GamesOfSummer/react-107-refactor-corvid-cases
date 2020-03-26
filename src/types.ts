export interface state {
    state: string; case: number; death: number;
}

export function defaultState(): state {
    return {
        state: '', case: 0, death: 0
    }
}
