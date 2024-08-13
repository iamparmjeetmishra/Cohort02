import { atom, selector } from "recoil";
import axios from 'axios'

// V1
// export const notifications = atom({
//    key: "networkAtom",
//    default: {
//       network: 4,
//       jobs: 6,
//       messaging: 3,
//       notifications: 3
//    }
// });


// Async Nature
export const notifications = atom({
   key: "networkAtom",
   default: selector({
      key: 'networkAtomSelector',
      get: async () => {
         // await new Promise(r => setTimeout(r, 2000))
         const res = await axios.get('https://sum-server.100xdevs.com/notifications')
         return res.data
      }
   })
});


export const totalNotificationSelector = selector({
   key: "totalNotificationSelector",
   get: ({ get }) => {
      const allNotifications = get(notifications);
      return allNotifications.network +
         allNotifications.jobs +
         allNotifications.notifications +
         allNotifications.messaging
   }
})