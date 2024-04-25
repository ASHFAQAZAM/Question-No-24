// Question number # 24
// String equality and inequality

let name_1 : string = "ashfaq"
let name_2 : string = "ashfaq azam"
let name_3 : string = " MR.ashfaq azam"

if (name_1 == name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}
// Numerical comparisons 

let age_1 : number = 18
let age_2 : number = 22

if ( age_1 == 18) {
    console.log("eligible for vote")

}
if (age_1 != 22) {
    console.log("eligible for vote in older category")
}
if (age_1 <= age_2){
    console.log("younger")
}
if (age_2 >= age_1){
    console.log("older")
}
// logical operators

if (age_1 == 18 || age_2 == 22){
    console.log("person is not  eligible for vote")

} 

if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}
// checking items in an array

let country : string [] = ["paris", "indian", "japan", "china"]
if (country.includes("paris")){
    console.log("paris is in country list")
} 
// checking items not in an array
if (!country.includes ("pakistan")){
    console.log("pakistan is not include in an array")
}
