class ElectricalAppliances {
    constructor(name, status, energy_consumption) {
        this.name = name;
        this.status = status;
        this.energy_consumption = energy_consumption;
    }

    isOff () {
        if (this.status === "off") {
            return `Electrical appliances is off`;
        }else {
            return `Electrical appliances is on`;
        }
    }

    getEnergyCons () {
        if (this.status === "off") {
            return `${this.name} does not consume energy`;
        }else {
            return `${this.name} consumes ${this.energy_consumption / 1000} kW of energy per hour.`
        }
    }
}


class Fridge extends ElectricalAppliances {
    constructor(capacity, name, status, energy_consumption) {
        super(name, status, energy_consumption);
        this.capacity = capacity;
    }
}


class WashingMachine extends ElectricalAppliances {
    constructor(max_load, name, status, energy_consumption) {
        super(name, status, energy_consumption);
        this.max_load = max_load;
    }
}


class TV extends ElectricalAppliances {
    constructor(screen_size, name, status, energy_consumption) {
        super(name, status, energy_consumption);
        this.screen_size = screen_size;
    }
}


class Flatiron extends ElectricalAppliances {
    constructor(type, name, status, energy_consumption) {
        super(name, status, energy_consumption);
        this.type = type;
    }
}


const fridge = new Fridge(10, "fridge", "on", 150);
const washing = new WashingMachine(7, "w.machine", "off", 500);
const tv = new TV(40, "tv", "on", 120);
const iron = new Flatiron("steam", "iron", "on", 200);

console.log(fridge.getEnergyCons());
console.log(washing.getEnergyCons());
console.log(tv.getEnergyCons());
console.log(iron.getEnergyCons());