function zipvalidate(post) {
  if (/[12346]/.test(post[0]) && post.length === 6) {
    return post.slice(1).split('').every(x => /\d/g.test(x))
  }
  return false
}