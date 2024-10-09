const formatAayOfWeek = dateStr => {
  const now = new Date()
  const year = now.getFullYear()
  const monthIndex = now.getMonth()
  const day = now.getDate()
  const referDate = new Date(year, monthIndex, day)
  const targetDate = new Date(dateStr + 'T00:00')
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  if (referDate.getDay() === targetDate.getDay()) return '今天'
  if (targetDate.getTime() - referDate.getTime() === 24 * 60 * 60 * 1000) return '明天'
  return days[targetDate.getDay()]
}

export { formatAayOfWeek }
