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
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  def add(number)
    # your code here
    new_node = Node.new(number)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      @tail.next_node = new_node
    end
  end

  def get(index)
    # your code here
    current_node = @head
    while index.positive? && current_node
      current_node = current_node.next_node
      index -= 1
    end
    current_node.value
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
puts list.get(1)
