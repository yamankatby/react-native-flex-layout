import React from "react";

// <div className="mt-4 -mb-3">
//   <div
//     className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"
//     style={{ marginRight: "0px" }}
//   >
//     <div
//       className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
//       style={{ backgroundPosition: "10px 10px" }}
//     />
//     <div className="relative rounded-xl overflow-auto p-8">
//       <div className="mt-2 flex gap-4 text-white text-sm font-bold font-mono leading-6 bg-stripes-blue rounded-lg">
//         {children}
//       </div>
//     </div>
//     <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5" />
//   </div>
// </div>

const Container: React.FC = ({ children }) => {
  return (
    <div className="not-prose p-4 flex gap-4 bg-slate-50 dark:bg-slate-800/25 border border-black/5 dark:border-white/5 rounded-lg font-mono text-white">
      {children}
    </div>
  )
}

export const Flex = () => {
  return (
    <Container>
      <div
        className="p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
        01
      </div>
      <div
        className="p-4 flex-initial w-24 sm:w-64 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
        02
      </div>
      <div
        className="p-4 flex-initial w-14 sm:w-32 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">
        03
      </div>
    </Container>
  )
}
