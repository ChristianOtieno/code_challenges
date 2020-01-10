# frozen_string_literal: true

def birthday_cake_candles(arr)
  sorted_ar = arr.sort
  max_val = sorted_ar[-1]
  counter = 0
  index = sorted_ar.size - 1
  while index >= 0
    break unless sorted_ar[index] == max_val

    counter += 1
    index -= 1
  end
  counter
end
