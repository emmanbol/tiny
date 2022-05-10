console.log('my fish is 10cm long')

const fish = (first, second) => {
    console.log(`The first is: ${first} and the second is: ${second}`)
    return first*second;
}

this.output = fish(15, 20)

class NewKlass{

    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    ayy = (d) => {
        return this.a * this.b * d;
    }

    bay = (a, b, c) => {
        console.log(`the three input is: ${this.a}, ${this.b}, ${this.c}`)
    }
}

let kk = new NewKlass(2, 4, 8)//

kk.bay()
console.log(`output is: ${kk.ayy(5)}`)
