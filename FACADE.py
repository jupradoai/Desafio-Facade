# SUBSISTEMA1
class SistemaDeAutenticacao:
    def autenticar_usuario(self, usuario):
        print(f"Autenticando usuario... {usuario}")

# SUBSISTEMA2
class SistemaDeCadastro:
    def cadastrar_usuario(self, cadastro):
        print(f"Criando cadastro... {cadastro}")

# SUBSISTEMA3
class SistemaDePedidos:
    def criar_pedido(self, pedido, usuario):
        print(f"Pedido de {pedido} para: {usuario}")

# FACHADA
class LojaOnline:
    def __init__(self):
        self.autentica = SistemaDeAutenticacao()
        self.cadastro = SistemaDeCadastro()
        self.pedido = SistemaDePedidos()

    def realizar_compra(self, pedido, usuario, cadastro):
        try:
            if not pedido or not usuario or not cadastro:
                raise ValueError('Parâmetros ausentes. Certifique-se de fornecer pedido, usuário e cadastro.')
            self.autentica.autenticar_usuario(usuario)
            self.cadastro.cadastrar_usuario(cadastro)
            self.pedido.criar_pedido(pedido, usuario)
        except Exception as error:
            print('Erro na compra:', error)

# CLIENTE EXEMPLO DE USO
loja = LojaOnline()

produto = 'Notebook'
usuario = 'Julyana'
cadastro = 'jtplara@gmail.com'

loja.realizar_compra(produto, usuario, cadastro)

try:
    loja.realizar_compra(produto)
except Exception as error:
    print('Erro na compra:', error)
