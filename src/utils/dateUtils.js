// src/utils/dateUtils.js
// Calendar date helpers normalized to the student's local timezone

/**
 * Returns the local date in YYYY-MM-DD format
 * @param {Date} [d=new Date()]
 * @returns {string} e.g. "2026-09-28"
 */
export function getTodayDateString(d = new Date()) {
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * Returns difference in whole days between two YYYY-MM-DD strings (date2 - date1)
 * @param {string} dateStr1 - Earlier date string "YYYY-MM-DD"
 * @param {string} dateStr2 - Later date string "YYYY-MM-DD"
 * @returns {number} Difference in days
 */
export function getDaysDifference(dateStr1, dateStr2) {
  if (!dateStr1 || !dateStr2) return 999

  // Split into components to avoid any timezone/DST shift issues
  const [y1, m1, d1] = dateStr1.split('-').map(Number)
  const [y2, m2, d2] = dateStr2.split('-').map(Number)

  const utc1 = Date.UTC(y1, m1 - 1, d1)
  const utc2 = Date.UTC(y2, m2 - 1, d2)

  const msPerDay = 1000 * 60 * 60 * 24
  return Math.round((utc2 - utc1) / msPerDay)
}
