// perimeter = 4s
// area = s^2
// diagonal = v/ 2s^2

class Square {
    consturctor(side) {
        this.side = side;
        this.perimeter = this.side*4;
        this.area = this.side**2;
        this.diagonal = Math.sqrt((2*(this.side)**2))
    }

describe() {
    return `Square with side ${this.side} has a perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.diagonal}`;
}
}

const square_1 = new Square(2);
const square_2 = new Square(5);
const square_3 = new Square(6);

square_1.side = 2
square_1.perimeter = (square_1.side)*4
square_1.area = (square_1.side)**2
square_1.diagonal = Math.sqrt((2*(square_1.side)**2))

square_2.side = 5
square_2.perimeter = (square_2.side)*4
square_2.area = (square_2.side)**2
square_2.diagonal = Math.sqrt((2*(square_2.side)**2))

square_3.side = 6
square_3.perimeter = (square_3.side)*4
square_3.area = (square_3.side)**2
square_3.diagonal = Math.sqrt((2*(square_3.side)**2))

console.log(square_1.describe());
console.log(square_2.describe());
console.log(square_3.describe());

