# frozen_string_literal: true

def repeated_string(s, n)
  base_count = s.count('a')
  repeats = n / s.size
  rem = n % s.size
  total_result = repeats * base_count + s.slice(0, rem).count('a')
  total_result
end
