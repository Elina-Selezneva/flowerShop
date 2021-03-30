class Header {

    /**
     * Метод открывает корзину товаров
     */
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }

    /**
     * Метод выводит на экран данных о количестве товаров в корзине
     * @param count
     */
    render(count){
        const html = `
            <div class=header-container>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                В корзине: 💐 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
/**
 * массив товаров полученный из локального хранилища
 * @type {*[]|*}
 */
const productsStore = localStorageUtil.getProducts();
/**
 * отображение количества товаров в хранилище
 */
headerPage.render(productsStore.length);