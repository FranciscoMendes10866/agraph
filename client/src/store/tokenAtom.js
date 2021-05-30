import { atom } from 'jotai'

const tokenAtom = atom(localStorage.getItem('tokenAtom') ?? '')

export const tokenAtomPersisted = atom(
  (get) => get(tokenAtom),
  (get, set, newTokenAtom) => {
    set(tokenAtom, newTokenAtom)
    localStorage.setItem('tokenAtom', newTokenAtom)
  }
)
