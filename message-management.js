export function conversationKey(a,b){return [Number(a),Number(b)].sort((x,y)=>x-y).join(':')}
export function messagePreview(message,conversation){if(conversation?.status==='deleted')return 'Conversation removed by admin';return message?.deletedAt?'Message removed by admin':message?.text||''}
