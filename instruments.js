export const instrumentOptions=['Piano','Violin','Voice','Guitar'];
export function instrumentsFor(person){const values=Array.isArray(person?.instruments)?person.instruments:(person?.instrument||'').split(',');return [...new Set(values.map(x=>x.trim()).filter(Boolean))]}
export function instrumentLabel(person){return instrumentsFor(person).join(', ')}

export function lessonTitle(student,instrument){return [instrument,student?.level&&student.level!=='Not set'?student.level:''].filter(Boolean).join(' · ')}
