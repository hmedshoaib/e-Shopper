// service for mainCategory..
export async function createMaincategoryAPI(data){
    var  response = await fetch("http://localhost:8000/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getMaincategoryAPI(){
    var  response = await fetch("http://localhost:8000/maincategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateMaincategoryAPI(data){
    var  response = await fetch("http://localhost:8000/maincategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteMaincategoryAPI(data){
    var  response = await fetch("http://localhost:8000/maincategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}




// service for subCategory..


export async function createSubcategoryAPI(data){
    var  response = await fetch("http://localhost:8000/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getSubcategoryAPI(){
    var  response = await fetch("http://localhost:8000/subcategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateSubcategoryAPI(data){
    var  response = await fetch("http://localhost:8000/subcategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteSubcategoryAPI(data){
    var  response = await fetch("http://localhost:8000/subcategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Service for brands..


export async function createBrandAPI(data){
    var  response = await fetch("http://localhost:8000/brand",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getBrandAPI(){
    var  response = await fetch("http://localhost:8000/brand",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateBrandAPI(data){
    var  response = await fetch("http://localhost:8000/brand/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteBrandAPI(data){
    var  response = await fetch("http://localhost:8000/brand/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


//Service for Products..


export async function createProductAPI(data){
    var  response = await fetch("http://localhost:8000/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getProductAPI(){
    var  response = await fetch("http://localhost:8000/product",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateProductAPI(data){
    var  response = await fetch("http://localhost:8000/product/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteProductAPI(data){
    var  response = await fetch("http://localhost:8000/product/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}




//Service for User..


export async function createUserAPI(data){
    var  response = await fetch("http://localhost:8000/user",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getUserAPI(){
    var  response = await fetch("http://localhost:8000/user",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateUserAPI(data){
    var  response = await fetch("http://localhost:8000/user/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteUserAPI(data){
    var  response = await fetch("http://localhost:8000/user/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}



//Service for cart..


export async function createCartAPI(data){
    var  response = await fetch("http://localhost:8000/cart",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getCartAPI(){
    var  response = await fetch("http://localhost:8000/cart",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateCartAPI(data){
    var  response = await fetch("http://localhost:8000/cart/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteCartAPI(data){
    var  response = await fetch("http://localhost:8000/cart/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}



////Service for wishlist..


export async function createWishlistAPI(data){
    var  response = await fetch("http://localhost:8000/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getWishlistAPI(){
    var  response = await fetch("http://localhost:8000/wishlist",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateWishlistAPI(data){
    var  response = await fetch("http://localhost:8000/wishlist/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteWishlistAPI(data){
    var  response = await fetch("http://localhost:8000/wishlist/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}





////Service for checkout..


export async function createCheckoutAPI(data){
    var  response = await fetch("http://localhost:8000/checkout",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getCheckoutAPI(){
    var  response = await fetch("http://localhost:8000/checkout",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateCheckoutAPI(data){
    var  response = await fetch("http://localhost:8000/checkout/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteCheckoutAPI(data){
    var  response = await fetch("http://localhost:8000/checkout/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}



////Service for contact..


export async function createContactAPI(data){
    var  response = await fetch("http://localhost:8000/contact",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getContactAPI(){
    var  response = await fetch("http://localhost:8000/contact",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateContactAPI(data){
    var  response = await fetch("http://localhost:8000/contact/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function deleteContactAPI(data){
    var  response = await fetch("http://localhost:8000/contact/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}



////Service for Newslatter..


export async function createNewslatterAPI(data){
    var  response = await fetch("http://localhost:8000/newslatter",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


export async function getNewslatterAPI(){
    var  response = await fetch("http://localhost:8000/newslatter",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

// export async function updateNewslatterAPI(data){
//     var  response = await fetch("http://localhost:8000/newslatter/"+data.id,{
//         method:"put",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify(data)
//     })
//     return await response.json()
// }

export async function deleteNewslatterAPI(data){
    var  response = await fetch("http://localhost:8000/newslatter/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        },
    })
    return await response.json()
}


