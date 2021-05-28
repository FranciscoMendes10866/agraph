import { atom } from 'jotai'

const usernameAtom = atom(localStorage.getItem('usernameAtom') ?? '')

export const usernameAtomPersisted = atom(
  (get) => get(usernameAtom),
  (get, set, newUsernameAtom) => {
    set(usernameAtom, newUsernameAtom)
    localStorage.setItem('usernameAtom', newUsernameAtom)
  }
)
