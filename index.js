// Write your solution in this file!
const employee = {
    name: "Parker",
    streetAddress: "12 Broadway",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
 return  {
        ...obj,
        [key]:value,
 }
}

const updatedKeyAndValue = updateEmployeeWithKeyAndValue(employee, "zip", "06897")
console.log(updatedKeyAndValue)

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj
}
const destructive = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Macus", "somewhere")

function  deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}

console.log(deleteFromEmployeeByKey(employee, key))

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}


console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'))