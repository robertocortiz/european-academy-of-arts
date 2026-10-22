import{useState}from'react';
export function pageHistoryReducer(state,action){if(action.type==='back')return state.length>1?state.slice(0,-1):state;if(action.type==='visit'&&action.page!==state.at(-1))return [...state,action.page];return state}
export default function usePageHistory(initial='Overview'){const[history,SetHistory]=useState([initial]);return[history.at(-1),page=>SetHistory(h=>pageHistoryReducer(h,{type:'visit',page})),()=>SetHistory(h=>pageHistoryReducer(h,{type:'back'})),history.length>1]}
