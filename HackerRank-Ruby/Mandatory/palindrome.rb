# frozen_string_literal: true

def palindromeIndex(s)
  return -1 if s.reverse == s

  n = s.reverse
  splt = s.split('')

  if n != s
    splt.each_with_index do |_, p|
      next unless splt[p] != splt[-(p + 1)]

      before = splt[0...p]
      after = splt[p + 1...splt.length]
      return p if (before + after) == (before + after).reverse

      before = splt[0...-(p + 1)]
      after = splt[(splt.length - p)...splt.length]
      return splt.length - p - 1 if (before + after) == (before + after).reverse
    end
  end
end
