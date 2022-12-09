console.log("Hola Mundo");
let mensaje = "hola mundo";

mensaje = "Perrito feliz";

mensaje = "chao mundo";
console.log(mensaje);
/**
 *Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefinded
 * object
 * function
 *
 * Tipos de TS
 * any
 * unknow
 * never
 * arrays
 * tuplas
 * Enums
 *
 * tipos inferidos
 */
let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "Velozirraptor";
let extintos: boolean = true;

function argumento(config: any) {
  return config;
}

let animales: string[] = ["perro", "delfin", "tigre"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

//animales.map( x => x. );//el autocompletado sugiere métodos del tipo de dato
let tupla: [number, string[]] = [1, ["perro", "dragon"]];

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
//PascalCase
enum Talla {
  Chica,
  Mediana,
  Grande,
  ExtraGrande,
}
const variable1 = Talla.Grande;
console.group(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}
const estado = LoadingState.Success;

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "Hola Mundo",
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: "Aqui no hay quien viva",
    pais: "multicolor",
  },
};

const arr: Persona[] = [];
