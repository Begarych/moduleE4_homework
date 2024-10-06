function ElectricalAppliances (name, status, energy_consumption) {
    this.name = name;
    this.status = status;
    this.energy_consumption = energy_consumption;
}

function Fridge (name, status, energy_consumption, capacity) {
    ElectricalAppliances.call(this, name, status, energy_consumption);
    this.capacity = capacity;
}

function WashingMachine (name, status, energy_consumption, max_load) {
    ElectricalAppliances.call(this, name, status, energy_consumption);
    this.max_load = max_load;
}

function TV (name, status, energy_consumption, screen_size) {
    ElectricalAppliances.call(this, name, status, energy_consumption);
    this.screen_size = screen_size;
}

function Flatiron (name, status, energy_consumption, type) {
    ElectricalAppliances.call(this, name, status, energy_consumption);
    this.type = type;
}

Fridge.prototype = new ElectricalAppliances();
WashingMachine.prototype = new ElectricalAppliances();
TV.prototype = new ElectricalAppliances();
Flatiron.prototype = new ElectricalAppliances();

ElectricalAppliances.prototype.isOff = function () {
    if (this.status === "off") {
        console.log(`Electrical appliances is off`);
    }else {
        console.log(`Electrical appliances is on`);
    }
}

ElectricalAppliances.prototype.getEnergyCons = function () {
    if (this.status === "off") {
        console.log(`The electrical appliance does not consume energy`)
    }else {
        console.log(`The electrical appliance consumes ${this.energy_consumption / 1000} kW of energy per hour.`)
    }
}

const fridge = new Fridge("fridge", "on", 150, 10);
const washing = new WashingMachine("w.machine", "off", 500, 7);
const tv = new TV("tv", "on", 120, 40);
const iron = new Flatiron("iron", "on", 200, "steam");

fridge.getEnergyCons();
washing.getEnergyCons()
tv.getEnergyCons();
iron.getEnergyCons();
