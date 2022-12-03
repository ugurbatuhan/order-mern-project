import "./App.css";
import { useState, useEffect } from "react";


const api_base = 'http://localhost:3001';

function App() {
    const [orders, setOrders] = useState([]);
    const [newOrderValue, setNewOrderValue] = useState("");
    const [newOrderTaxValue, setNewOrderTaxValue] = useState("");
    const [newOrderCurrency, setNewOrderCurrency] = useState("");
    const [person, setPerson] = useState([]);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        GetOrders();
        GetPersonData();
    }, []);

    const GetOrders = () => {
        fetch(api_base + '/order/getAllOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
            .then(data => setOrderItems(data.items))
            .catch((err) => console.error("Error: ", err));
    }
    const GetPersonData = () => {
        fetch(api_base + '/person/getAllPerson')
            .then(res => res.json())
            .then(data => setPerson(data[0]))
            .catch((err) => console.log(err))
    }




    const addOrder = async () => {
        const data = await fetch(api_base + "/order/createOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                orderValue: newOrderValue,
                taxValue: newOrderTaxValue,
                currencyCode: newOrderCurrency
            })
        }).then(res => res.json());
        setOrders([...orders, data]);


    }

    const deleteOrder = async id => {
          await fetch(api_base + '/order/deleteOrder/', { method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            }) }).then(res => console.log(res));
       const data = await fetch(api_base + '/order/getAllOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch((err) => console.error("Error: ", err));





    }

    return (
        <div className="App">
            <h1>Welcome, {person.firstName + " " +person.lastName} </h1>
            <div></div>
            <h4>Add Order</h4>
            <div className="content">
                <input type="text" className="add-order-input" onChange={e => setNewOrderValue(e.target.value)} value={newOrderValue} />
                <input type="text" className="add-order-input" onChange={e => setNewOrderTaxValue(e.target.value)} value={newOrderTaxValue} />
                <input type="text" className="add-order-input" onChange={e => setNewOrderCurrency(e.target.value)} value={newOrderCurrency} />
                <div className="button" onClick={addOrder}>Create Order</div>
            </div>

            <h4>Your Orders</h4>

            <div className="" >

                {orders.length > 0 ? orders.map(order => (
                    <div key={order._id} >
            <div className="orderbox">
                        <div className="text"> Order Value: {order.orderValue}</div>
                        <div className="text"> Tax Value: {order.taxValue}</div>
                        <div className="text">Currency Code: {order.currencyCode}</div>
                        <div className="delete-order" onClick={() => deleteOrder(order._id)}>x</div>
            </div>
                    </div>
                )) : (
                    <p>You currently have no orders</p>
                )}

            </div>
        </div>
               )

}

export default App;