// let users = [
// 	{
// 	  name: "John Doe",
// 	  gender: "Male",
// 	  email: "john.doe@example.com",
// 	  address: "123 Main Street, Cityville, Country"
// 	},
// 	{
// 	  name: "Jane Doe",
// 	  gender: "Female",
// 	  email: "jane.doe@example.com",
// 	  address: "456 Park Avenue, Townsville, Country"
// 	},
// 	{
// 	  name: "Bob Smith",
// 	  gender: "Male",
// 	  email: "bob.smith@example.com",
// 	  address: "789 Oak Lane, Villagetown, Country"
// 	},
// 	{
// 	  name: "Alice Johnson",
// 	  gender: "Female",
// 	  email: "alice.johnson@example.com",
// 	  address: "101 Pine Road, Hamletville, Country"
// 	},
// 	{
// 	  name: "Chris Wilson",
// 	  gender: "Non-Binary",
// 	  email: "chris.wilson@example.com",
// 	  address: "202 Cedar Street, Boroughburg, Country"
// 	},
// 	{
// 	  name: "Emma Brown",
// 	  gender: "Female",
// 	  email: "emma.brown@example.com",
// 	  address: "303 Maple Avenue, District City, Country"
// 	},
// 	{
// 	  name: "David Taylor",
// 	  gender: "Male",
// 	  email: "david.taylor@example.com",
// 	  address: "404 Birch Boulevard, Metropolis, Country"
// 	},
// 	{
// 	  name: "Sophia Martinez",
// 	  gender: "Female",
// 	  email: "sophia.martinez@example.com",
// 	  address: "505 Redwood Drive, Megatown, Country"
// 	},
// 	{
// 	  name: "Michael White",
// 	  gender: "Male",
// 	  email: "michael.white@example.com",
// 	  address: "606 Elm Street, Suburbia, Country"
// 	},
// 	{
// 	  name: "Olivia Lee",
// 	  gender: "Female",
// 	  email: "olivia.lee@example.com",
// 	  address: "707 Walnut Court, City Center, Country"
// 	},
  
//   ];
// let randomuser =Math.floor(Math.random()*users.length)
// // let randomuser =Math.random()*100
// // console.log(randomuser)
// console.log(users[randomuser].name, users[randomuser].email)




// function bill() {
// 	let amount = document.getElementbyId('amount')
// 	let persons = document.getElementbyId('persons')
// 	let total = (amount.value / persons.value).toFixed(2)
// 	document.getElementbyId('result').innerText = total
//   }


  function bill() {
	let amount = document.getElementById('amount');
	let persons = document.getElementById('persons');
	let total = (amount.value / persons.value).toFixed(2);
	document.getElementById('result').innerText = total;
}