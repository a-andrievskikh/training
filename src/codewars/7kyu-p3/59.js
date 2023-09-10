function Node(data, next = null) {
  this.data = data
  this.next = next
}

function indexOf(head, value) {
  let index = 0
  let currentNode = head

  while (currentNode !== null) {
    if (currentNode.data === value) {
      return index
    }

    currentNode = currentNode.next
    index++
  }

  return -1
}