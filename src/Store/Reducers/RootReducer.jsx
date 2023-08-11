import { combineReducers } from "redux"
import { MaincategoryReducer } from "./MaincategoryReducer"
import { subcategoryReducer } from "./SubcategoryReducer"
import { brandReducer } from "./BrandReducer"
import { productReducer } from "./ProductReducer"
import { userReducer } from "./UserReducer"
import { cartReducer } from "./CartReducer"
import { wishlistReducer } from "./WishlistReducer"
import { checkoutReducer } from "./CheckoutReducer"
import { contactReducer } from "./ContactReducer"
import { newslatterReducer } from "./NewslatterReducer"
export default combineReducers({
    MainCategoryStateData: MaincategoryReducer,
    SubCategoryStateData: subcategoryReducer,
    BrandStateData: brandReducer,
    ProductStateData: productReducer,
    UserStateData: userReducer,
    CartStateData: cartReducer,
    WishlistStateData: wishlistReducer,
    CheckoutStateData: checkoutReducer,
    ContactStateData: contactReducer,
    NewslatterStateData:newslatterReducer
})