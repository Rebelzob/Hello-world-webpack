require 'faker'

5.times do
  Message.create(text: Faker::Quotes::Shakespeare.sentence)
end
