
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from '../store/atoms/networkAsync'

export default function RecoilAsync() {
   return (
      <div className="flex flex-col gap-2 items-center justify-center">
         <h2 className="p-4 underline text-2xl font-semibold">Advanced Recoil Async Nature</h2>
         <RecoilRoot>
            <DynamicBox />
         </RecoilRoot>
      </div>
   )
}


function DynamicBox() {
   const [networkCount] = useRecoilState(notifications)
   const totaNotificationsCount = useRecoilValue(totalNotificationSelector)

   // let url = 'https://sum-server.100xdevs.com/notifications'

   // useEffect(() => {
   //    axios.get('https://sum-server.100xdevs.com/notifications')
   //       .then(res => {
   //          setNetworkCount(res.data)
   //          console.log(res.data)
   //    })
   // }, [])
   console.log(networkCount)


   return (
      <>
      <div className="flex gap-2 border p-4">
         <button>Home</button>
         <button>My Network({networkCount.network >= 100 ? '99+' : networkCount.network})</button>
         <button>Jobs ({networkCount.jobs >= 100 ? '99+' : networkCount.jobs})</button>
         <button>Messaging ({networkCount.msg >= 100 ? '99+' : networkCount.msg})</button>
            <button>Notifications ({networkCount.notifications >= 100 ? '99+' : networkCount.notifications})</button>
         <button>Me ({totaNotificationsCount})</button>
         </div>
         {/* <BtnUpdater /> */}
      </>
   )
}

// function BtnUpdater() {
//    const setNetworkCount = useSetRecoilState(notifications)

   
//    return <button
//             onClick={() => setNetworkCount(msgCount => msgCount + 1)}
//          >Msg</button>
// }