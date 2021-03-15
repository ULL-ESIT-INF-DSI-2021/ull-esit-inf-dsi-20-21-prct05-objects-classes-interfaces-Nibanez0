class Fraccionario {
     private denA: number;
     private numA: number;

     //private denB: number;
     //private numB: number;

    constructor(denA: number, numA: number) {
        this.denA = denA;
        this.numA = numA;
    }

    
    getDenA() {
        return this.denA;
    }

    getNumA() {
        return this.numA;
    }

    /*
    getDenB() {
        return this.denB;
    }

    getNumB() {
        return this.numB;
    }
    */
    
}

export function denNoZero() {
    var F1 = new Fraccionario(2,4);
    var F2 = new Fraccionario(1, 3);
    
    if ((F1.getDenA() === 0) && (F2.getDenA() === 0)) {
        return true;
    }
}

export function invertirF() {
    var F1 = new Fraccionario(2,4);
    var F2 = new Fraccionario(1, 3);

    F1.getNumA() == F1.getDenA();
    F1.getDenA() == F1.getNumA();

    F2.getNumA() == F2.getDenA();
    F2.getDenA() == F2.getNumA();

}

export function sumarF() {
    var F1 = new Fraccionario(2,4);
    var F2 = new Fraccionario(1, 3);

    var FR = F1.sumar(F2);
}

export function sumar(F1, F2) {
    var resultado = new Fraccionario(F1.getNumA() * F2.getDenA() + F1.getNumA() * F2.getNumA(), F1.getDenA() * F2.getDenA());
    resultado.simplificar();
    return resultado;
}

export function restarF() {
    var F1 = new Fraccionario(2,4);
    var F2 = new Fraccionario(1, 3);

    var FR = F1.restar(F2);
}

export function restar(F1, F2) {
    var resultado = new Fraccionario(F1.getNumA() * F2.getDenA() - F1.getNumA() * F2.getNumA(), F1.getDenA() * F2.getDenA());
    resultado.simplificar();
    return resultado;
}

export function multiplicarF() {
    var F1 = new Fraccionario(2,4);
    var F2 = new Fraccionario(1, 3);

    var FR = F1.multiplicar(F2);
}

export function multiplicar(F1, F2) {
    var resultado = new Fraccionario(F1.getNumA() * F2.getNumA(), F1.getDenA() * F2.getDenA());
    resultado.simplificar();
    return resultado;
}

export function dividirF() {
    var F1 = new Fraccionario(2,4);
    var F2 = new Fraccionario(1, 3);

    var FR = F1.dividir(F2);
}

export function dividir(F1, F2) {
    var resultado = new Fraccionario(F1.getNumA() * F2.getDenA(), F1.getDenA() * F2.getNumA());
    resultado.simplificar();
    return resultado;
}

export function simplificar() {
    var resultado: number = minimo(this.getNumA, this.getDenA);
    this.numerador /= resultado; // '/=' divide
    this.denominador /= resultado;
}

export function minimo(a: number, b: number){
    var resultado: number = a % b;
    if (resultado === 0) {
        return b;
    }else {
        return minimo(b, resultado);
    }
}


