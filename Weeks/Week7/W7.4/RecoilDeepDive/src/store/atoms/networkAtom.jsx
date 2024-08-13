import { atom, selector } from 'recoil'

export const networkAtom = atom({
   key: 'networkAtom',
   default: 98
})

export const jobsAtom = atom({
   key: 'jobsAtom',
   default: 102
})

export const notificationsAtom = atom({
   key: 'notificationsAtom',
   default: 15
})

export const msgAtom = atom({
   key: 'msgAtom',
   default: 5
})


export const totalCountSelector = selector({
   key: 'totalCountSelector',
   get: ({ get }) => {
      const networkCount = get(networkAtom)
      const jobsCount = get(jobsAtom)
      const notificationsCount = get(notificationsAtom)
      const msgCount = get(msgAtom)
      return networkCount + jobsCount + notificationsCount + msgCount
   }
})