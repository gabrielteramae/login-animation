# Peeking Login Animation
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Login animado com personagens que reagem ao cursor e se escondem ao digitar a senha.

## Sobre
Uma recriação de uma animação de tela de login onde ilustrações de personagens acompanham o movimento do mouse com o olhar, focam o campo de email enquanto o usuário digita e se escondem (deslizando para fora de tela) quando o campo de senha é focado. Construído inteiramente com HTML, CSS e JavaScript Vanilla, sem dependências externas.

## Funcionalidades
- Pupilas dos personagens seguem o cursor em tempo real
- Olhar direcionado para o campo de email durante a digitação
- Personagens se escondem com transição suave ao focar o campo de senha
- Layout responsivo em duas colunas (ilustração + formulário)
- Sem dependências, frameworks ou build step

## Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)

---

## Como rodar localmente
**Pré-requisitos:** nenhum — apenas um navegador.

Basta abrir o `index.html` diretamente, ou servir a pasta com qualquer servidor estático:

```bash
npx serve .
```

## Estrutura
```
├── index.html
├── style.css
└── script.js
```

## Personalização
As cores e formas dos personagens estão nas classes `.char.orange`, `.char.black`, `.char.yellow` e `.char.purple` em `style.css`.
