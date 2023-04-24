import React from 'react'

const ChatBody = () => {

    const aiStyle = "bg-white bg-opacity-40 backdrop-blue-lg dropshadow-md mr-auto"

  return (
    <div className="flex flex-col gap-4">
{/* 
cleient message */}
<div className='border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
    <pre className='whitespaces-pre-wrap'>
        <span>Hy Chat GPT, Can you help me?</span>
    </pre>
</div>

{/* 
ai message */}
<div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aiStyle}`}>
    <pre className='whitespaces-pre-wrap'>
        <span>Yeah, I can help you with anything</span>
    </pre>
</div>
    </div>
  )
}

export default ChatBody