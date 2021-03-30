class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    /**
     * Метод добавляет/удаляет элементы из локального хранилища и корректирует стили
     * @param element
     * @param id
     */
    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id);

        if(pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        /**
         * перезапись количества товаров в header
         */
        headerPage.render(products.length);
    }

    /**
     * Метод выводит на экран товары.
     */
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">💠 ${price.toLocaleString()} руб</span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        /**
         * Переменная каталога всего html, которая будет рендериться на сайт
         */
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        /**
         * Рендеринг html на сайт
         * @type {string}
         */
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();


