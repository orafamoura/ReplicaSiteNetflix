class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());

  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "cardLeft");

    const autor = document.createElement("span");
    autor.textContent = "By" + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("linK-Url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "cardRight");

    const newImage = document.createElement("img");
    newImage.src = this.getAttribute("photo");
    cardRight.appendChild(newImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 720px;
      display: flex;
      flex-direction:row;
      box-shadow: 4px 5px 9px -3px rgba(0,0,0,0.75);
    -webkit-box-shadow: 4px 5px 9px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 5px 9px -3px rgba(0,0,0,0.75);
    justify-content: space-between;
    }
    
    .cardLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    
    .cardLeft span {
      font-weight: 400;
    }
    
    .cardLeft a {
      margin-top: 15px;
      font-size: 25px;
      color: black;
      text-decoration: none;
      font-weight: bold;
    }
    
    .cardLeft p {
      color: gray
    }
    
    .cardRight {
      margin-top: 4px;
    }
    `;
    return style;
  }
}

customElements.define("card-news", CardNews)