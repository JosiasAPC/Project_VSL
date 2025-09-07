# 📖 Manual de Edição da Página VSL

Olá! 👋  
Este guia foi criado para te ajudar a editar os textos, imagens e o vídeo da sua página VSL.  
Não é necessário nenhum conhecimento avançado, basta seguir os passos abaixo.

---

## 🖼️ Alterar Imagens

1. Todas as imagens estão na pasta:
   assets/images/

2. Basta **substituir a imagem existente** por outra com o mesmo nome para atualizar automaticamente no site.

- Exemplo: Se você trocar `logo.jpg` por um novo arquivo chamado `logo.jpg`, o site mostrará a nova logo.

3. Se quiser usar outro nome para a imagem:

- Abra o arquivo `index.html`
- Procure pelo trecho que usa essa imagem, por exemplo:
  ```html
  <img src="assets/images/logo.jpg" alt="logo" />
  ```
- Troque apenas o nome do arquivo (ex: `nova-logo.png`).

---

## 🎬 Alterar o Vídeo

1. O vídeo principal está neste trecho do arquivo `index.html`:

```html
<vturb-smartplayer id="vid-68951d3a852ea9821ad4af28"></vturb-smartplayer>
```

Para trocar o vídeo, substitua o código do id por outro gerado na plataforma de vídeo (ex: Vturb, YouTube embed, etc).

Exemplo: <vturb-smartplayer id="vid-SEU-NOVO-ID-AQUI"></vturb-smartplayer>

---

## ✍️ Alterar Textos

1. Todos os textos ficam dentro do arquivo index.html.

2. Abra o arquivo com o Bloco de Notas (Windows) ou TextEdit (Mac).

3. Procure pelo texto que deseja alterar e substitua.

Exemplo:

  <p>
    How to shrink your prostate by 30% in a few months...
  </p>

Troque pelo seu texto:

  <p>
    Como reduzir sua próstata em 30% em poucos meses...
  </p>

---

## 📑 Alterar Referências Científicas

1. As referências ficam no final do arquivo index.html dentro da seção Scientific References.

2. Cada referência é um item de lista (<li>).

Exemplo: <li>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3168743/</li>

3. Para trocar, basta substituir o link dentro da tag <li>.

## ⚠️ Atenção

- Não altere os nomes das pastas (assets, vendor, etc).

- Sempre mantenha a extensão correta dos arquivos de imagem (.jpg, .png, .webp).

- Caso algo não funcione, volte a versão original do arquivo e tente novamente.
