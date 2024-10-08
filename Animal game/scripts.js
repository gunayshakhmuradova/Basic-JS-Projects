class Animal {
    constructor (color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0){
            this.energy -=20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor (sound="purr", canJumpHigh= true, canClimbTrees= true, color, energy) {
        super(color,energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound () {
        console.log (this.sound);
    }
}

class Bird extends Animal {
    constructor (sound="chirp" , canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound)
    }
}

class HouseCat extends Cat {
    constructor (houseCatSound="meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

document.getElementById("runButton").addEventListener("click", function() {
    var polly = new Parrot(true);
    var fiji = new Parrot(false);
    polly.makeSound(true);
    fiji.makeSound(false);
    polly.color = "yellow";
    polly.energy = 100;
    polly.isActive();
    
    var leo = new HouseCat();
    leo.makeSound(false);
});
document.getElementById("parrotBtn").addEventListener("click", function() {
    var polly = new Parrot(true);
    polly.makeSound(true);
});

document.getElementById("houseCatBtn").addEventListener("click", function() {
    var leo = new HouseCat();
    leo.makeSound(false);
});

document.getElementById("tigerBtn").addEventListener("click", function() {
    var tiger = new Tiger();
    tiger.makeSound(true);
});