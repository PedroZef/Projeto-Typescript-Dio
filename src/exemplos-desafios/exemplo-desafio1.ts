interface Funcionario {
  codigo: number;
  name: string;
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.name = "João";

const funcionarioObj2: Funcionario = {
  codigo: 10,
  name: "João",
};
