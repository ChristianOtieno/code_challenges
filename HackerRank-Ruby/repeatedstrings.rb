def repeatedString(s, n)
    for letter in s
        counter = 0
        not_found = "'a' not found"
        if letter == 'a'
            counter += 1
        else
            return not_found
        end
    end
     return counter
end