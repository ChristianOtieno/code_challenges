# frozen_string_literal: true

class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class LinkedList
  # setup head and tail
  def initialize
    @head = nil
    node = @head
  end

  def find_tail
    node = @head
    return node unless node.next_node
    return node unless node.next_node while (node = node.next_node)
  end

  def add(number)
    if @head
      find_tail.next_node = Node.new(number)
    else
      @head = Node.new(number)
    end
  end

  def get(index)
    node = @head
    return false unless node.next_node
    return node if node.value == index

    while (node = node.next_node)
      return node if node.value == index
    end
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
puts list.get(1)
