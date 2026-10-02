//Classe que representa a unidade de informação da árvore binária de busca

class Node {
    constructor(val) {
        this.data = val; // armazena a informação da árvore binária de busca
        this.left = null; // ponteiro para a subárvore esquerda
        this.right = null; // ponteiro para a subárvore direita
    }
}

export default class BinarySearchTree {
    
    #root // raiz da árvore binária de busca
    constructor() {
        this.#root = null; // inicializa a raiz como nula
    }

    //método para efetuar inserção ABB
    insert(val) {
        
        const inserted = new Node(val); // cria um novo nó com o valor a ser inserido
        
        //1 caso: árvore vazia
        //o primeiro nodo fica sendo a raiz da árvore
        if (this.#root === null) {
            this.#root = inserted;
        }
        
        //2 caso: inserção recursiva, percorrendo a árvore recursivamente
        else {
            this.#insertNode(this.#root, inserted); // chama o método auxiliar para inserir o nó
        }
    }

    //método privado que inseri um novo nó na árvore
    #insertNode(node, inserted) {

    }


}
