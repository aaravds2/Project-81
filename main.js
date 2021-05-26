var name_of_the_guest_in_array = []
function submit() {

var name_of_the_guest = document.getElementById("name_guest").value;
name_of_the_guest_in_array.push(name_of_the_guest);

console.log(name_of_the_guest);

console.log(name_of_the_guest_in_array);
var length_of_guests_of_array = name_of_the_guest_in_array.length;
console.log(length_of_guests_of_array);
document.getElementById("guest_list").innerHTML = name_of_the_guest_in_array.toString

}
function sort() {

name_of_the_guest_in_array.sort();
var a = name_of_the_guest_in_array.join("<br>"); 
console.log(name_of_the_guest_in_array);
document.getElementById("sort").innerHTML = i.toString();

}
function show() {

var a = name_of_the_guest_in_array.join("<br>");
console.log(name_of_the_guest_in_array);
document.getElementById("guest_name_in_array").innerHTML = i.toString();
document.getElementById("sort_button").style.display = "block";

}
function search() {

var b = document.getElementById("guest_name_found").value;
var guest_found = 0
for (c=0; c<name_of_the_guest_in_array; c++) {
if (b = name_of_the_guest_in_array[b]) {
found = found + 1;
}
}
document.getElementById("guest_name_found").innerHTML = "name found" + found + "time/s";
console.log("name found" + found + "time/s");
}