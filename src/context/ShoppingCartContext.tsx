import { ReactNode, createContext, startTransition, useCallback, useContext, useEffect, useState } from "react";

type ShoppingCartContextProps = {
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartQuantity: number,
    cartItems: CartItem[]
    setCartItems: (items: CartItem[]) => void
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        return JSON.parse(localStorage.getItem("cartItems") || "[]")
    })

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0)

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = useCallback((id: number) => {
        startTransition(() => {
            setCartItems(currentItems => {
                if (currentItems.find(item => item.id === id) == null) {
                    return [...currentItems, { id, quantity: 1 }]
                } else {
                    return currentItems.map(item => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity + 1 }
                        } else {
                            return item
                        }
                    })
                }
            })
        })
    }, [cartItems])

    const decreaseCartQuantity = useCallback((id: number) => {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }, [cartItems])

    const removeFromCart = (id: number) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, setCartItems }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
