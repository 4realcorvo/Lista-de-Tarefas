enum Prioridade{
  ALTA = "ALTA",
  MEDIA = "MEDIA",
  BAIXA = "BAIXA"
}

class Tarefa {
  private descricao: string;
  private conlcuida: boolean = false;
  prioridade: Prioridade = Prioridade.BAIXA;

  constructor(descricao: string, prioridade: Prioridade) {
    this.descricao = descricao;
  }

  marcarConcluida(){
    this.conlcuida = true;
  }

  toString() {
    return this.descricao + (this.conlcuida ? " Foi Concluída" : " Está Pendente");
  }
}

class ListaDeTarefas{
  protected tarefas: Tarefa[] = [];


  adicionarTarefa(descricao: Tarefa){
    // const novaTarefa = new Tarefa[descricao];
    this.tarefas.push(descricao);
  }

  listarTarefas(){
    console.log(this.tarefas.join("\n"));
    return this.tarefas;
  }
}

class ListaPrioritaria extends ListaDeTarefas{
  prioridade: string;

  adicionarTarefaPrioritaria(descricao: string, prioridade: Prioridade): void{
    //@ts-ignore
    const novaTarefa = new Tarefa(descricao);
    novaTarefa.prioridade = prioridade;
    this.tarefas.push(novaTarefa);
  }

  listarTarefasPrioritaria(): void{
    console.log("Tarefas Prioritarias:");
    this.listarTarefas();
  }

}

const limparQuarto = new Tarefa('Limpar o Quarto',Prioridade.ALTA);
const comprarAlmoco = new Tarefa('Comprar o Almoço',Prioridade.ALTA);

comprarAlmoco.marcarConcluida();
console.log(limparQuarto.toString());
console.log(comprarAlmoco.toString());

const listaPrioritaria = new ListaPrioritaria();

listaPrioritaria.adicionarTarefaPrioritaria("Reunião", Prioridade.ALTA);
listaPrioritaria.adicionarTarefaPrioritaria("Tomar banho", Prioridade.BAIXA);
listaPrioritaria.listarTarefasPrioritaria();