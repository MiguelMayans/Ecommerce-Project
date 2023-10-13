
import { formatCurrency } from '../../utils/formatCurrency'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { useApiContext } from '../../context/ApiContext'

type CartItemProps = {
    id: number,
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {

    const planets = useApiContext()

    const planet = planets.find(planet => planet.id === id)
    if (planet == null) return null

    const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()

    return (
        <tbody>
            <tr>
                <td className="py-4">
                    <div className="flex items-center">
                        <img className="h-20 w-20 mr-4" src={planet.imgUrl} alt={planet.name} loading='lazy'></img>
                        <span className="font-semibold">{planet.name}</span>
                    </div>
                </td>
                <td className="py-4 text-left">{formatCurrency(planet.price)}</td>
                <td className="py-4">
                    <div className="flex items-center">
                        <button onClick={() => decreaseCartQuantity(id)} className=" py-2 px-4 mr-2 bg-secondary-color">-</button>
                        <span className="text-center w-8">{quantity}</span>
                        <button onClick={() => increaseCartQuantity(id)} className="py-2 px-4 ml-2 bg-secondary-color">+</button>
                    </div>
                </td>
                <td className="py-4 text-left">{formatCurrency(planet.price * quantity)}</td>
            </tr>

        </tbody>
    )
}

export default CartItem