export const CART_LOCAL_STORAGE = 'CART_LOCAL_STORAGE';

export const getItem = () => {
    return JSON.parse(localStorage.getItem(CART_LOCAL_STORAGE));
}
export const addItem = (item) => {
    const items = getItem();
    items.push(item)
    localStorage.setItem(CART_LOCAL_STORAGE, JSON.stringify(items));
}
export const destroyCart = () => {
    localStorage.removeItem(CART_LOCAL_STORAGE);
}