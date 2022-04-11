dependencias: 
 - CRA: para inicialização do projeto;
 - material-ui + styled-Components: para parte da estilização
 - validatejs: para validações do formulário
 - https://regex101.com/ : para criar e testar minhas expressões regulares.
---------------------------------------------------------------



ROTAS: https://acme-cadastro.herokuapp.com/swagger/index.html



LISTAR:
https://acme-cadastro.herokuapp.com/Usuario

LISTAR USER:
https://acme-cadastro.herokuapp.com/Usuario/1

ALTERA SENHA
`https://acme-cadastro.herokuapp.com/alterar-senha/${ìd}`
senhaAtual: String
novaSenha: String

---------------------------------------------------------------
Os dados devem ser consumidos da API https://acme-cadastro.herokuapp.com/swagger/index.html

- Deve ser listado os dados do usuário que será escolhido na tela. Então deve apresentar um campo de busca e uma listagem apresentando o nome. OK

- Os dados devem ser apresentados na tela; OK

- Ao clicar em alterar senha, deve ser apresentando uma tela para alterar a senha; OK
- Para alterar a senha o usuário deve informar a senha anterior;
- O campo de nova senha e confirmar senha devem ser os mesmos;
- A nova senha deve ter um padrão especifico da seguinte forma:
VALIDAÇÃO
    - Deve ter um caractere especial;OK
    - Uma letra deve ser maiuscula; OK
    - Deve ter numeros; OK
    - Deve ter letras; OK
    - O tamanho mínimo deve ser de 8 caracteres; OK
    - O tamanho máximo deve ser de 12 caracteres. OK


- Ao cancelar deve voltar para a tela anterior, permitindo escolher outro cadastro; OK
- Ao salvar os dados da nova senha,  deve ser validado a senha anterior ; OK
- Com o fluxo correto, ao alterar na API deve mostrar a tela de sucesso.
- Atenção, há um erro de design nos protótipos e na regra citada acima.


O prazo de entrega é até dia 12/04/2022
---------------------------------------------------------------

---------------------------------------------------------------
dia 02 - 05/04

- requisições das listas OK
- layout da toolbar OK
---------------------------------------------------------------
dia 03 - 06/04 19:40 - 

-começo criação de rotas
-ajustes na navbar
  - navegação para home OK
  - busca deve chamar tela de user - AINDA FALTA ISSO

-ajustes na ListComponent
  - ao clicar nos itens direcionar para página de user/id

-criar layout da Userscreen
---------------------------------------------------------------
dia 04 - 09/04 - 16:08
 - preencher os dados do user
 - enviar id para Modal 
 - trycatch da rota para troca de senha
 ---------------------------------------------------------------
 dia 05 - 10/04 - 11:01
 - validação do formulário OK
 - rotas

# AINDA FALTA
-> HomeScreen
 -[x] direcionar rota pra userScreen
-> USERSCREEN
 -[x] preencher os dados do user
 -[x] enviar id para Modal 
 -[] Estilizar userscreen
 -[x] lógica (puxar user com id na rota) -> isso vem do HomeScreen
 -> MODAL
 -[] Estilizar Modal
 -Lógica do modal
  -[x] trycatch da rota para troca de senha
  -[x] validação de formulário
  -[] Estilizar Modal - success
  -[] Estilizar Modal - Fail

 -[] Estilizar HomeScreen 
 
 - Responsividade:
 -[] HomeScreen
 -[] UserScreen
 -[] modal

