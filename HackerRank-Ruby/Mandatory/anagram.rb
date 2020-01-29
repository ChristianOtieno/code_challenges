# frozen_string_literal: true

# def anagram(s)
#   counter = 0

#   if s.length.even?
#     splitter = s.chars.each_slice(s.length / 2).map(&:join)
#     left = splitter[0]
#     right = splitter[1]

#     counter = left.length

#     leftchar = left.split
#     rightchar = right.split
#     return 0 if rightchar == leftchar
#     leftchar.each do |n|
#       rightchar.each do |m|
#         counter -= 1 while n == m
#       end
#       counter
#     end
#   else
#     return -1
#   end
#   counter
# end
def anagram(_s)
  return -1 unless str.size.even?

  half = s.size / 2
  str1 = s[0, half]
  str2 = s[half, half]
  h = str2.each_char.with_object(Hash.new(0)) { |c, h| h[c] += 1 }
  str1.each_char.count do |c|
    case h[c]
    when 0
      true
    else
      h[c] -= 1
      false
    end
  end
end
