function have_same_property(str, obj) {
    for (let i in obj) {
        if (i === str) {
            return true;
        }
    }

    return false;
}

const ojb_1 = {
    1: "one"
}

console.log(have_same_property("2", ojb_1));