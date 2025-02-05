
the front-end is PS C:\Users\tshid\Documents\MLAB\REACT-NATIVE\native-recipe-front> 


curl -X POST http://localhost:3003/api/user \
-H "Content-Type: application/json" \
-d '{
    "name": "juju",
    "surname": "monada",
    "idNumber": "34457768890154",
    "email": "monada@gmail.com",
    "password": "123456",
    "role": "user",
    "designation": "Developer",
    "joining_date": "2024-11-29",
    "salary": 76000,
    "phone": "1234567890",
    "address": "123 Main Street, Pretoria",
    "active": true
}'

curl -X POST http://localhost:3003/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "athur@gmail.com",
    "password": "123456"
   
}'

//getrude is admin

curl -X POST http://localhost:3001/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "marks@gmail.com",
    "password": "123456"
   
}'
 //user
curl -X POST http://localhost:3003/api/login \
-H "Content-Type: application/json" \
-d '{
    
    "email": "makau@gmail.com",
    "password": "123456"
   
}'

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ5YmE5OTQxZWZmNTc3OWVjZDk0NDIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzI4ODY3NDIsImV4cCI6MTczMjg5MDM0Mn0.FNhDA2tmXIb0PSCkk76O6Ley1Xf-ME-01OFALP0xmjI

// login with herader do not forgert

curl -X POST http://localhost:3001/api/user \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ5YmE5OTQxZWZmNTc3OWVjZDk0NDIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzI4ODY3NDIsImV4cCI6MTczMjg5MDM0Mn0.FNhDA2tmXIb0PSCkk76O6Ley1Xf-ME-01OFALP0xmjI" \
-d '{
    "name": "zack",
    "surname": "monga",
    "idNumber": "34456668890154",
    "email": "monga@gmail.com",
    "password": "123456",
    "role": "user",
    "designation": "Developer",
    "joining_date": "2024-11-29",
    "salary": 76000,
    "phone": "1234567890",
    "address": "123 Main Street, Pretoria",
    "active": true
}'


eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ5YzA5OTM5ODZiYWQxZTY3NGRiZDUiLCJyb2xlIjoidXNlciIsImlhdCI6MTczMzIwOTY5MCwiZXhwIjoxNzMzMjEzMjkwfQ.41FEgpl08WYxLiBQavfWwhcAY0WCp2k4vhv1Ddj9RjU

curl -X POST http://localhost:3003/api/recipes \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDljMDk5Mzk4NmJhZDFlNjc0ZGJkNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMzMjI3Mzk5LCJleHAiOjE3MzMyMzA5OTl9.iDBfbJUfloBXS3bq0IT1EagKAWvdBpG1mcs_ETm64b8" \
     -d '{
           "name": "Chocolate Cake",
           "ingredients": ["flour", "sugar", "cocoa powder", "baking powder", "eggs"],
           "instructions": "Mix all ingredients and bake at 350°F for 30 minutes.",
           "category": "Dessert",
           "preparationTime": "15 minutes",
           "cookingTime": "30 minutes",
           "servings": 8
         }'


curl -X GET http://localhost:3003/api/recipes \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDljMDk5Mzk4NmJhZDFlNjc0ZGJkNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMzMjI3Mzk5LCJleHAiOjE3MzMyMzA5OTl9.iDBfbJUfloBXS3bq0IT1EagKAWvdBpG1mcs_ETm64b8"




curl -X PUT http://localhost:3003/api/recipes/674eee6bb3a5c04a0e8c294f \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDljMDk5Mzk4NmJhZDFlNjc0ZGJkNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMzMjMyNDk1LCJleHAiOjE3MzMyMzYwOTV9.KZYotaJ8QlhtVTid5NIpOn_aHLCmNYxofYa2Suvfc4Q" \
-H "Content-Type: application/json" \
-d '{
    "name": "Updated Recipe Name",
    "ingredients": ["Updated ingredient 1", "Updated ingredient 2"],
    "instructions": "Updated instructions for the recipe.",
    "category": "Updated Category",
    "preparationTime": 20,
    "cookingTime": 30,
    "servings": 4
}'

///