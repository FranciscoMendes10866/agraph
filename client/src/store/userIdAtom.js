import { atom } from 'jotai'

const userIdAtom = atom(localStorage.getItem('userIdAtom') ?? '')

export const userIdAtomPersisted = atom(
  (get) => get(userIdAtom),
  (get, set, newUserIdAtom) => {
    set(userIdAtom, newUserIdAtom)
    localStorage.setItem('userIdAtom', newUserIdAtom)
  }
)
