import { all } from "redux-saga/effects"


import { maincategorysaga } from "./MaincategorySaga"
import { subcategorysaga } from "./SubcategorySaga"
import { brandsaga } from "./BrandSaga"
import { productSaga } from "./ProductSaga"
import { userSaga } from "./UserSaga"
import { cartsaga } from "./CartSaga"
import { wishlistsaga } from "./WishlistSaga"
import { checkoutsaga } from "./CheckoutSaga"
import { contactsaga } from "./ContactSaga"
import { newslattersaga } from "./NewslatterSaga"


export default function* RootSaga() {
    yield all([
        maincategorysaga(),
        subcategorysaga(),
        brandsaga(),
        productSaga(),
        userSaga(),
        cartsaga(),
        wishlistsaga(),
        checkoutsaga(),
        contactsaga(),
        newslattersaga()

        
    ])
}