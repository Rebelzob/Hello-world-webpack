require 'faker'

5.times do
  Message.create(greetings: Faker::Quotes::Shakespeare.as_you_like_it)
end
