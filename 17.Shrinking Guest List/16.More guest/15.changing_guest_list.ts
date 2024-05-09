let guest_list: string []=['Amir' , 'Anwar' , 'kashaan'];

//for(let i=0; i<guest_list.length; i++ ){

 //  console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')

//}

let absent_Guest :string= "Anwar" ;
let new_Guest :string = "kashif" ;

guest_list[1] = new_Guest ;

for(let i=0; i<guest_list.length; i++ ){

    console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')
}
console.log(`${absent_Guest} is not coming to the party`);

console.log("Good news! we find big table so we are inviting 3 more guest.");

guest_list.unshift("Zia ali") ;
guest_list.splice(2 , 0 ,"areeba ali") ;
guest_list.push("bilal syeed") ;

for(let i=0; i<guest_list.length; i++ ){

    console.log('Dear Mr. ' + guest_list[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank you!')
}

