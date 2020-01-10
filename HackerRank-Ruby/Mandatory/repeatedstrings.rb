# frozen_string_literal: true

def repeated_string(suna, nano)
  base_count = suna.count('a')
  repeats = nano / suna.size
  rem = nano % suna.size
  total_result = repeats * base_count + s.slice(0, rem).count('a')
  total_result
end
