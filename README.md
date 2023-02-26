# SVG Donut chart Generator

## Deploy

Veja o deploy [clicando aqui](https://svg-donut-generator.vercel.app/)

## Descrição

Este é um pequeno projeto que fiz para tentar entender melhor o SVG e como manipular ele da maneira mais fácil para o desafio de número 08 do [#boraCodar](https://boracodar.dev)

Este projeto foi feito baseado no post do [Sergio Pedercini](https://medium.com/@pppped) feito no medium onde ele ensina como calcular e montar todo o SVG.

A curiosidade bateu um pouco mais forte e decidi ir além e ver isso funcionando tudo em tempo real!

### Calculos realizados (Obrigado Sergio!)

```javascript
const sqrBox = 36;
const circumference = 100;

// radius = circumference / 2π
const radius = circumference / (Math.PI * 2);

// diameter = radius *2
const diameter = radius * 2;

// x = boxSize /2
const xPos = sqrBox / 2;

// y = boxSize - diameter
const yPos = (sqrBox - diameter) / 2;
```

## Referência

- [How to code a responsive circular percentage chart with SVG and CSS.](https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705)
