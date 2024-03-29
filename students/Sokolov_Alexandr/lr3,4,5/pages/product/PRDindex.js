import {ProductComponent} from "../../components/product/CMPPRDindex.js";
import {BackButtonComponent} from "../../components/back-button/BBindex.js";
import {MainPage} from "../main/PGindex.js";
export class ProductPage {
    constructor(parent) {
        this.parent = parent
    }

    getData() {
        return {
            src: "https://www.grabcraft.com/files/products/large/large_forest-village-house-6-21108.png",
            title: `Уникальное жилище в самом сердце города!`,
            text: "Это не просто квартира, это место, где время останавливается и пространство раскрывается в новом измерении. В этом уютном жилище вы сможете почувствовать себя легким и свободным, словно на грани между реальностью и мечтой.<br>Это не просто квартира, это прекрасное пространство, где ваши мечты превращаются в реальность. Покупайте сейчас и откройте двери в новое, захватывающее путешествие!</br>"
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
                
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}