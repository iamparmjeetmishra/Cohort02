import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { notificationsAtom, networkAtom, jobsAtom, msgAtom, totalCountSelector } from '../store/atoms/networkAtom'
import { useMemo } from 'react'

export default function RecoilV1() {
   return (
      <div className="flex flex-col gap-2 items-center justify-center">
         <h2 className="p-4 underline text-2xl font-semibold">Advanced Recoil</h2>
         <RecoilRoot>
            <DynamicBox />
         </RecoilRoot>
      </div>
   )
}


function DynamicBox() {
   const networkCount = useRecoilValue(networkAtom)
   const notificationsCount = useRecoilValue(notificationsAtom)
   const jobsCount = useRecoilValue(jobsAtom)
   const msgCount = useRecoilValue(msgAtom)

   const totalCount = useRecoilValue(totalCountSelector)

   // const totalCount = useMemo(() => {
   //    console.log('render from memo')
   //    return networkCount + notificationsCount + jobsCount + msgCount
   // }, [networkCount , notificationsCount , jobsCount , msgCount])

   return (
      <>
      <div className="flex gap-2 border p-4">
         <button>Home</button>
         <button>My Network({networkCount >= 100 ? '99+' : networkCount})</button>
         <button>Jobs ({jobsCount >= 100 ? '99+' : jobsCount})</button>
         <button>Messaging ({msgCount >= 100 ? '99+' : msgCount})</button>
            <button>Notifications ({notificationsCount >= 100 ? '99+' : notificationsCount})</button>
         <button>Me ({totalCount})</button>
         </div>
         <BtnUpdater />
      </>
   )
}

function BtnUpdater() {
   const setMsgCount = useSetRecoilState(msgAtom)
   return <button
            onClick={() => setMsgCount(msgCount => msgCount + 1)}
         >Msg</button>
}