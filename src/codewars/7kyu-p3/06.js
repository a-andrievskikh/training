function validSpacing(s) {
  return (s.match(/\b\w+\b/gi) || []).join(' ').length === s.length
}