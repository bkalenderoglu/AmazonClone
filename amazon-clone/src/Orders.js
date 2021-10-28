import React, { useState, useEffect } from 'react'
import { db } from "./firebase"
import Order from './Order';
import "./Orders.css"
import { useStateValue } from './StateProvider';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users') //accessing users
            .doc(user?.uid) // specific user logged in
            .collection('orders')// users orders
            .orderBy('created', 'desc')//descending order
            //real time response in any change
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else {
            setOrders([])
        }
        
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {/* Map through every single order return order element */}
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
