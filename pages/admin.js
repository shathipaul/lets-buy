import Format from "@/layout/format";
import { useEffect, useState } from "react";

function Admin() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/products")
            const data = await response.json()
            setOrders(data);
        };
        fetchData();
    }, []);
    return (
        <Format>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
                <table className="mt-4 w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Product Name</th>
                            <th className="px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2">{item.title}</td>
                                <td className="px-4 py-2">{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Format>
    )
}

export default Admin;

// import React, { useState } from 'react';

// const Example = () => {
//   const [elements, setElements] = useState([]);

//   const handleClick = () => {
//     setElements([...elements, <div key={elements.length}>Element {elements.length + 1}</div>]);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Add Element</button>
//       {elements}
//     </div>
//   );
// };

// export default Example;