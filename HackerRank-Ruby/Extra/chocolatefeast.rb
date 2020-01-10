def chocolateFeast(n, c, m)
  count = 0
  num = n / c
  count += num
  another = num / m
  while another > 0 do
      count += another
      w = another * m
      num -= w
      num += another
      another = num / m
  end
  count
end