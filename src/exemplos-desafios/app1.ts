const pessoa = {
  nome: "Mariana",
  idade: 28,
  profissao: "desenvolvedora",
};

pessoa.idade = 25;

const andre: { nome: string; idade: number; profissão: string } = {
  nome: "Andre",
  idade: 25,
  profissão: "pintor",
};

const paula: { nome: string; idade: number; profissão: string } = {
  nome: "Paula",
  idade: 25,
  profissão: "Desenvolvedora",
};

enum Profissao {
  JogadorDeFutebol,
  Desempregado,
  Desenvolvedora
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const maria: Pessoa = {
  nome: "Maria",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
};

const jessica: Estudante = {
  nome: "Jessica",
  idade: 28,
  profissao: Profissao.Desenvolvedora,
  materias: ["Matemática discreta", "programação"],
};

const monica: Estudante = {
    nome: "Monica",
    idade: 28,
    materias: ["Matemática discreta", "programação"],
    profissao: Profissao.Desempregado
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("-"+ item);
  }
}

listar(monica.materias);
