class Shopping {

    /**
     * Метод закрывает корзину - рендарит пустой html
     */
    handerClear(){
        ROOT_SHOPPING.innerHTML = ``;
    }

    /**
     * Метод события удаления товара из корзины.
     * @param element
     * @param id
     */
    handleSetLocationStorage(element, id) {
        localStorageUtil.putProducts(id);

        this.render();
    }

    /**
     * Метод выводит на экран корзину товаров.
     */
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">🌹 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} руб</td>
                        <td class="shopping-element__cancle" onclick="shoppingPage.handleSetLocationStorage(this, '${id}')"></td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
        /**
         * Переменная корзины html, которая будет рендериться на сайт
         * @type {string}
         */
        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handerClear()"></div>
                <table>
                    ${htmlCatalog}
                     <tr>
                        <td class="shopping-element__name shopping-element_color">Итого:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} руб</td>
                    </tr>
                </table>
            </div>
        `;

        /**
         * Рендеринг html на сайт
         * @type {string}
         */
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();