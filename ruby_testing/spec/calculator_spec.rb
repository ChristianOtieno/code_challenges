# frozen_string_literal: true

# spec/calculator_spec.rb
require './lib/calculator'

RSpec.describe Calculator do
  describe '#add' do
    it 'returns the sum of more than two numbers' do
      calculator = Calculator.new
      expect(calculator.add(2, 5, 7)).to eql(14)
    end
  end
end

RSpec.describe Calculator do
  describe '#subtract' do
    it 'returns the difference between two numbers' do
      calculator = Calculator.new
      expect(calculator.subtract(7, 2)).to eql(5)
    end
  end
end

RSpec.describe Calculator do
  describe '#multiply' do
    it 'returns the product of two numbers' do
      calculator = Calculator.new
      expect(calculator.multiply(5, 7)).to eql(35)
    end
  end
end

RSpec.describe Calculator do
  describe '#divide' do
    it 'returns the quotient between two numbers' do
      calculator = Calculator.new
      expect(calculator.divide(10, 2)).to eql(5)
    end
  end
end
