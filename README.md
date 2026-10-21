# European Academy of Arts demo

Run `npm ci --cache /tmp/npm-cache` then `npm run dev -- --port 3000`.
Use `npm run build` to create the production bundle.

Switch Admin, Teacher, and Student using the selector at the bottom of the sidebar. The student persona is Sophie Williams; the teacher persona is Isabella Rossi. Sample lessons recur weekly. Admins can manage members, schedule lessons, review all message history, and approve requests. Approval changes the recurring lesson weekday and hour; it does not implement date-specific exceptions. Teachers can record attendance and message students. Students can request schedule changes and save notification preferences.

Demo data persists in localStorage on the current browser. This is not authentication or authorization; all data is accessible to the browser. Messaging is local, not live across devices. Notification preferences are saved but emails and reminders are not delivered. Real deployment needs a backend, role enforcement, accounts, database, scheduling conflict checks, and notification delivery. Excel column mapping is pending the academy's source fields. No credentials required for the demo.

## Academy records

Admin directory rows now open detailed member records. Student records include DOB, address, both parent contacts, instrument, teacher/schedule links, recital registration, a tuition payment ledger with date and covered period, annual tuition totals, and request statuses. Teachers include contact details, immigration/citizenship status, hourly rate, calendars, dated attendance hours, estimated monthly earned/due pay, payment history, dated feedback/commendations, warning levels 1–3, and 1099 metadata. Teachers can view their own record, including feedback; admin edits are exposed only in the admin demo view. This is UI behavior, not backend authorization.

Attendance is now recorded per lesson/date and only lessons for the selected weekday appear. Present attendance contributes lesson duration to hours taught, excluding future records. Legacy undated attendance is intentionally excluded. Pay estimates use the current hourly rate for all included records and subtract payments assigned to that calendar month; they are not payroll or historical rate accounting. Lessons support 30/45/60/90 minute lengths. Recurring weekly lessons are not a historical calendar or cancellation ledger.

Do not enter real sensitive data. SSNs are deliberately not collected or persisted. The tax records tab stores metadata only; actual 1099 upload/download is not connected. Real parent/student data, immigration status, employment records, and tax documents require secure storage, retention policies, and enforced backend permissions before production use.

## Mockup layouts

The admin landing page now uses the supplied purple EAA design: full-width header, collapsible navigation, month grid, student/teacher filters, day agenda, and faculty lesson load. Student and teacher tabs offer persistent Cards/Table switches and search. Student details include username, ID, level, and enrollment month; existing records show unset fields rather than invented information. Teacher cards show assigned students, monthly recurring lesson counts, subjects, start month, and editable weekly availability. Availability is informational and does not enforce booking conflicts; the editor supports one window per weekday, Monday–Saturday, between 9 and 18.

Student Overview and Calendar use the supplied month calendar, lesson selection, monthly lesson list, upcoming lessons, and request access. The messaging layout uses contact and conversation panels with purple outgoing bubbles. Admins can inspect student–teacher threads and send separately as admin, without impersonating participants. Students and teachers can message Academy Admin. Presence is not simulated as a real online status. Existing calendar recurrence, browser-only persistence, and backend limitations still apply.

## Demo login

The EAA sign-in screen uses these public, fictional accounts:

| Role | Name | Username | Password |
| --- | --- | --- | --- |
| Admin | Alex Morgan | admin | Admin123! |
| Student | Sophie Williams | student | Student123! |
| Teacher | Isabella Rossi | teacher | Teacher123! |

Sign out in the top bar or navigation drawer to try another account. Session selection persists across refreshes in the same tab via sessionStorage; passwords are not written to browser storage. The former role switcher is removed. These accounts map to existing demo personas and records. Login is a client-side simulation, with public credentials in the source, not secure authentication or authorization. Do not enter real passwords or personal data. Production requires server-side accounts, password hashing, session management, and permission enforcement.
