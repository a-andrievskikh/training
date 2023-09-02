function solution(fullText, searchText) {
  return (fullText.replaceAll(searchText, '1').match(/1/g) || []).length
}