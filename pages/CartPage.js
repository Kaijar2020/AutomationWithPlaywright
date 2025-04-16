export class CartPage{

    constructor(page){
        this.page=page
        this.cartList = '//tbody[@id="tbodyid"]/tr/td[2]'
    }

    async checkProduct(productName){
        const productInCart = await this.page.$$(this.cartList)
        for(const product of productInCart){
            console.log(await product.textContent())
            if(productName === await product.textContent()){
                return true
                break
            }
        }
    }
}