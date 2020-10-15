# Solução | Delivery Much Tech Challenge

Utilizei diversas tecnologias para a resolução conforme foi solicitado neste [desafio](CHALLENGE.md).

Preferi o uso de typescript para demonstrar algumas das minhas habilidades, acredito que ele traga diversos benefícios em times escaláveis.

Levei cerca de 8 horas para concluir o desenvolvimento.

## Stack

- Node
- Typescript
- Javascript
- Jest
- Docker

## Vamos preparar o ambiente
Antes de rodar, é preciso realizar alguns passos, tenha em mãos a sua key para realizar requisições ao Giphy, (clique aqui)[https://developers.giphy.com/dashboard/] para criar uma chave.

1. Renomeie o arquivo `.env.example` para `.env`
2. Altere no arquivo `.env` a variável `GIPHY_KEY` para a sua chave

## Tudo pronto, podemos executar
Certifique-se que você tem o docker instalado e está rodando, então rode o comando abaixo em sua pasta raiz do projeto, isso pode demorar um pouco na primeira execução.

```shell
docker-compose up
```

## Que tal um teste automatizado?
Criei apenas um teste simples para este desafio, que pode ser executado via docker através do comando abaixo.

```shell
docker-compose -f docker-compose.test.yml up
```

## Conclusão
Espero que a solução proposta para este desafio tenha ajudado vocês a conhecer melhor sobre minha capacidade técnica, qualquer dúvida estarei disponível e aguardo seu feedback!

Obrigado.
