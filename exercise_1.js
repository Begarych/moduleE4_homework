function get_value (obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(`key: ${i}, value: ${obj[i]}`);
        }
    }
}

const obj = {
    key1: "a"
}

let obj2 = Object.create(obj);
obj2.key2 = "b";

get_value(obj2);