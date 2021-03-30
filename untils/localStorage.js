class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';

    }

    /**
     * Метод возвращает массив элементов корзины из Storage или пустой массив
     * @returns {*[]|any}
     */
    getProducts () {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null){
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    /**
     * Метод помещает или удаляет элемент в Storage и возвращает его содержимое
     * @param id
     * @returns {{pushProduct: boolean, products: any | []}}
     */
    putProducts(id){
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if(index === -1){
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index,1)
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return {pushProduct, products}
    }
}

const localStorageUtil = new LocalStorageUtil();
