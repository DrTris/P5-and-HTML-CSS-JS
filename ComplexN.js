/* Complex number class by TWG Dec 2022 */

class ComplexN {

  static fromPolar(modulus, argument) {
    return new ComplexN(modulus * Math.cos(argument), modulus * Math.sin(argument));
  }

  constructor(Re, Im) {
    this.Re = Re;
    this.Im = Im;
  }

  toPolar() {
    return [this.modulus(), this.argument()];
  }

  to$() {
    t
    let a$ = this.Re.toFixed(2) + " ";
    let b$ = this.Im ? this.Im.toFixed(2) + "i" : "0i";
    return (a$ + (this.Im < 0 ? "- " + b$.substring(1) : "+ " + b$));
  }

  add(cNum) {
    return new ComplexN(this.Re + cNum.Re, this.Im + cNum.Im);
  }

  sub(cNum) {
    return new ComplexN(this.Re - cNum.Re, this.Im - cNum.Im);
  }

  toPower(power) {
    let theta = this.argument() * power;
    let R = Math.pow(this.modulus(), power);
    return new ComplexN(R * Math.cos(theta), R * Math.sin(theta));
  }

  mult(cNum) {
    let re = (this.Re * cNum.Re) - (this.Im * cNum.Im);
    let im = (this.Im * cNum.Re) + (this.Re * cNum.Im);
    return new ComplexN(re, im);
  }

  div(cNum) {
    let divisor = cNum.modulusSq();
    let re = ((this.Re * cNum.Re) + (this.Im * cNum.Im)) / divisor;
    let im = ((this.Im * cNum.Re) - (this.Re * cNum.Im)) / divisor;
    return new ComplexN(re, im);
  }

  conjugate() {
    return new ComplexN(this.Re, -this.Im);
  }

  modulus() {
    return Math.sqrt(this.Re ** 2 + this.Im ** 2);
  }

  modulusSq() {
    return this.Re ** 2 + this.Im ** 2;
  }

  copy() {
    return new ComplexN(this.Re, this.Im)
  }

  sinC() {
    return new ComplexN(Math.sin(this.Re) * Math.cosh(this.Im), Math.cos(this.Re) * Math.sinh(this.Im));
  }

  cosC() {
    return new ComplexN(Math.cos(this.Re) * Math.cosh(this.Im), -Math.sin(this.Re) * Math.sinh(this.Im));
  }

  argument() {
    return Math.atan2(this.Im, this.Re);
  }

  argInDeg() {
    return this.argument() * 57.29577951308232;
  }

  argInDegTAO() {
    return (this.argInDeg() + 360) % 360;
  }

}

}