//utility functions allow us to keep our files clean and organize functions that we may need in the multiple files in one location

//check in our carItem if carItemToAdd already exists
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //cartItems will return the first item found in our array basen on the condition
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )
        if(existingCartItem){
            //return the new version of our cartItems state
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id
                //if true will create a new obsejct where we'll have ..
                ? {...cartItem, quantity:cartItem.quantity+1}
                //if the condition doesn't match we'll return the initial cartItem
                : cartItem
                )
        }
        //if the cartItem is not found under our array, we'll return a new array with all the existing cartItem..
        return [...cartItems, {...cartItemToAdd, quantity:1}]

        


}