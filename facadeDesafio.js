// SUBSISTEMA1
class SistemaDeAutenticacao {
    autenticarUsuario(usuario) {
        console.log(`Autenticando usuario... ${usuario}`);
    }
}

// SUBSISTEMA2
class SistemaDeCadastro {
    cadastrarUsuario(cadastro) {
        console.log(`Criando cadastro... ${cadastro}`);
    }
}

// SUBSISTEMA3
class SistemaDePedidos {
    criarPedido(pedido, usuario) {
        console.log(`Pedido de ${pedido} para: ${usuario}`);
    }
}

// FACHADA
class LojaOnline {
    constructor() {
        this.autentica = new SistemaDeAutenticacao();
        this.cadastro = new SistemaDeCadastro();
        this.pedido = new SistemaDePedidos();
    }

    realizarCompra(pedido, usuario, cadastro) {
        try {
            if (!pedido || !usuario || !cadastro) {
                throw new Error('Parâmetros ausentes. Certifique-se de fornecer pedido, usuário e cadastro.');
            }
            this.autentica.autenticarUsuario(usuario);
            this.cadastro.cadastrarUsuario(cadastro);
            this.pedido.criarPedido(pedido, usuario);
        } catch (error) {
            console.error('Erro na compra:', error.message);
        }
    }
}

// CLIENTE EXEMPLO DE USO
const loja = new LojaOnline();

const produto = 'Notebook';
const usuario = 'Julyana';
const cadastro = 'jtplara@gmail.com';

loja.realizarCompra(produto, usuario, cadastro);

try {
    loja.realizarCompra(produto);
} catch (error) {
    console.error('Erro na compra:', error.message);
}
