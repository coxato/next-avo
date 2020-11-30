import React from 'react';
import Link from 'next/link'
// hooks
import { useCartMutations } from '@store/cart';
// components
import { Item, Button, Message } from 'semantic-ui-react'
// import s from './myCart.module.css';

const MyCart = ({ products }) => {

    const { removeFromCart } = useCartMutations();

    if (products.length === 0)
        return (
            <Message warning as="section">
                <Message.Header>Your cart is empty</Message.Header>
                <p>You will need to add some products to the cart before you can checkout.</p>
            </Message>
        )

    const mapCartItemsToItems = (products) =>
        products.map((cartItem) => {
            const { id, name, qty, price, image } = cartItem

            return {
                childKey: id,
                header: (
                    <Link href="/product/[id]" as={`/product/${id}/`} passHref>
                        <Item.Header as="a">{name}</Item.Header>
                    </Link>
                ),
                image: (
                    <Item.Image
                        src={image}
                        alt={name}
                        size="small"
                        style={{ background: '#f2f2f2' }}
                    />
                ),
                meta: `${qty} x $${price} = $${qty * price}`,
                description: 'Some more information goes here....',
                extra: (
                    <Button
                        basic
                        icon="remove"
                        floated="right"
                        onClick={() => removeFromCart(cartItem)}
                    />
                ),
            }
        })

    return <Item.Group divided items={mapCartItemsToItems(products)} as="section" />

}

export default MyCart;