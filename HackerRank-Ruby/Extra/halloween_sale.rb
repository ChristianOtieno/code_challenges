# frozen_string_literal: true

def howManyGames(p, d, m, s)
  counter = 0
  while s >= p
    counter += 1
    s -= p
    p = (p - d) >= m ? p - d : m
  end
  counter
end
