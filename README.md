# SOBRE O PROJETO:

 - todas telas tem a navbar para voltar à tela inicial (HOMESCREEN)

## HOMESCREEN ('/')
 - faz uma requisição e lista os usuários
    - caso os dados sejam retornados com sucesso, lista os usuários no LISTCOMPONENT
    - caso a API não retorne os users, aparece 'Não foram encontrados usuários'
 
 - ao clicar em um user encaminha para outra rota ('/users/id')

## USERSCREEN ('user/id')
 - essa tela possui interação de responsividade em dois niveis (800px e 700px de largura);
 - a tela apresenta os dados do usuário e tem um botão para alterar a senha do usuário selecionado;
 - ela puxa o id da URL para chamar a rota com os dados do user

 - o botão muda o state togglePassword para true que faz o modal de troca de senha abrir, 
 - ao clicar nele é enviado:
    - o handler para abrir/fechar o modal
    - o toggle que serve para deixa-lo aberto
    - o id do user

## PASSWORD MODAL
  - essa tela possui 3 states que renderizam 3 situações diferentes:
    - 0 => state padrão para alterar senha
    - 1 => renderiza sucesso
    - 2 => renderiza falha
 

### Modal state 0 => Alterando senha:
possui validação nos campos, em que se cada validação não for atendida, subirá uma notificação diferente, sendo:
  - TODOS campos são obrigatórios
  - no campo NOVA SENHA:
    - Deve ter um caractere especial;
    - Uma letra deve ser maiuscula; 
    - Deve ter numeros; 
    - Deve ter letras; 
    - O tamanho mínimo deve ser de 8 caracteres; 
    - O tamanho máximo deve ser de 12 caracteres. 
  - no campo CONFIRME A SENHA: precisa ser igual a NOVA SENHA;

  Caso todos requisitos de validação estejam cumpridos, ao clicar em *CONFIRMAR* enviará a requisição para  API:
    - Caso o resultado de sucesso alterará o State para 1 e renderizará a tela de sucesso;
    - Caso o resultado de falha alterará o State para 2 e renderizará a tela de falha;
  
  - ao clicar no botão fechar (X) ele alterará o state para 0 (state para ALTERAR SENHA) e voltará a tela do USER
  - ao clicar em CANCELAR encaminhará para a HOMESCREEN, visualizando todos usuários

<!-- dificuldades encontradas: -->
 - o projeto foi iniciado com material design, mas como não tinha domínio e há uma curva de aprendizado para tal decidi customizar tudo que fosse possível com CSS puro, portanto, há partes que não tem responsividade.

