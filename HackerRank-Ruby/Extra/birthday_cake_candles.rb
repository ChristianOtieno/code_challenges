def birthdayCakeCandles(ar)
    sorted_ar = ar.sort
    max_val = sorted_ar[-1]
    counter = 0
    index = sorted_ar.size - 1
    while index >= 0
        if sorted_ar[index] == max_val
            counter += 1
            index -= 1
        else
            break
        end
    end
    counter
end