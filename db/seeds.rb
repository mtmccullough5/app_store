# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports'] 

100.times do  App.create(    
  name: Faker::App.name,    
  description: Faker::Lorem.paragraph(4),    
  version: Faker::App.version,    
  category: categories.sample,    
  price: Faker::Commerce.price.to_f,    
  logo: Faker::Company.logo,  
  ) 
end

