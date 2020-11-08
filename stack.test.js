class Node {
  constructor(nextNode, data) {
    this.next = nextNode
    this.data = data
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if (!this.top) {
      this.top = new Node(null, data)
    }

    this.top = new Node(this.top, data)
  }

  pop() {
    const popped = this.top
    this.top = this.top.next
    return popped
  }
}

describe('pop method', () => {
  test('calling pop returns the last pushed node to the top', () => {
    const testData = 4
    const stack = new Stack()
    stack.push(3)
    stack.push(testData)
    expect(stack.pop().data).toBe(testData)
  })

  test('calling pop moves the second to last node to the top', () => {
    const testData = 4
    const stack = new Stack()
    stack.push(testData)
    stack.push(3)
    stack.pop()
    expect(stack.top.data).toBe(testData)
  })
})

describe('push method', () => {
  test('calling push twice results in a node linked to another node', () => {
    const testData = 3
    const stack = new Stack()
    stack.push(testData)
    stack.push(5)
    console.log(stack)
    expect(stack.top.next.data).toBe(testData)
  })
})
