# Wine Club Challenge

## O desafio será implementar um e-commerce para venda de vinhos que deverá ter as seguintes funcionalidades:
 - [x] Catálogo de produtos com paginação;
 - [ ] Filtragem produtos por preço;
 - [ ] Busca por nome do produto;
 - [ ] Adicionar e remover produtos do carrinho;
 
 ![image](https://user-images.githubusercontent.com/83602931/176501620-658f0b5c-8678-4734-83ac-b70e5c99e410.png)

## Instruções ReactJS:
Chegou a hora de colocar a mão na massa!

- [ ] Siga esse [protótipo](https://www.figma.com/file/gByBxI9GBHKUjXRtO2fFh2/28%2F10-%F0%9F%96%A5-%F0%9F%93%B1---Wine-Test---WEB-%26-APP?node-id=680%3A6449)
- [ ] Utilize Next.js e Typescript
- [ ] Faça a estilização com styled-components
- [ ] Utilize o local storage para gerenciar o carrinho
- [ ] Por favor, inclua no README as instruções de instalação do projeto
- [ ] Sinta-se livre para incluir quaisquer observações
- [ ] Consuma nossa API Rest https://documenter.getpostman.com/view/10015622/UVJiiuHi#fe849253-c47a-492f-a860-08350296c570

## Critérios de Avaliação:
Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

- [ ] Gerenciamento de estado (Redux / ContextAPI);
- [ ] Componentização;
- [ ] Responsividade;
- [ ] Preocupação com usabilidade;
- [ ] Preocupação com acessibilidade;
- [ ] Testes e2e;
- [ ] Padrões de código;
- [ ] Padrão de commits (Conventional);

## Diferencial:

- [ ] Fazer deploy na vercel ou em outro local de sua preferência e disponibilizar um link de visualização;
- [ ] Testes unitários;
- [ ] Utilização de cache do Next.js;

# Wine Club Challenge

## Este projeto foi realizado com Next.js e TypeScript:
Para iniciar o projeto com eles é necessário utilizar o comando a seguir:
```
npx create-next-app@latest --typescript
```
Assim que o pacote for instalado, basta digitar o comando `npm run dev` e acessar o `http://localhost:3000` para ver a aplicação funcionando.

No gerenciamento de estado utilizamos o Redux, e para aplica-lo ao projeto, basta inserir no terminal na pasta do projeto o comando a seguir:

```
npm install redux react-redux next-redux-wrapper
```
O Comando acima realiza a instalação do redux, porém pra que faz uso da extensão `Redux DevTools`, que serve basicamente para visualizarmos se os dados foram inputados de fato no Redux, devemos inserir o comando a seguir:
```
npm install --save-dev redux-devtools-extension
```
Também é necessário adicionar o `redux-thunk` caso realize alguma chamada de API na action do Redux por exemplo, nesse caso o conando é:
```
npm i redux-thunk
```

Para saber mais informações ou passo a passo para aplicar o Redux numa aplicação Next.js: [Clique Aqui!](https://dev.to/jullymac/next-js-redux-a93)
