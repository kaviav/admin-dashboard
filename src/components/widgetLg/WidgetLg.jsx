import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";

export const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const res = await userRequest.get("/order/allorders");
        setOrders(res.data);
        // console.log(res.data);
      } catch (err) {}
    };
    getAllOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type} </button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Recent transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{order.createdAt} </td>
            <td className="widgetLgAmount">$ {order.amount} </td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

//also can fetch userId details and display it along with the order. but we are nt gonna do tht,, in the above code we fetched details of orders only, no user details . also installed timeago.js library to format dates into more readable in the above code.
// import { useEffect, useState } from "react";
// import { userRequest } from "../../requestMethods";
// import "./widgetLg.css";

// export const WidgetLg = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const getAllOrders = async () => {
//       try {
//         const res = await userRequest.get("/order/allorders");
//         setOrders(res.data);
//         console.log(res.data);
//       } catch (err) {}
//     };
//     getAllOrders();
//   }, []);

//   const Button = ({ type }) => {
//     return <button className={"widgetLgButton " + type}>{type} </button>;
//   };
//   return (
//     <div className="widgetLg">
//       <h3 className="widgetLgTitle">Latest transactions</h3>
//       <table className="widgetLgTable">
//         <tr className="widgetLgTr">
//           <th className="widgetLgTh">Customer</th>
//           <th className="widgetLgTh">Date</th>
//           <th className="widgetLgTh">Amount</th>
//           <th className="widgetLgTh">Status</th>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://media.vogue.in/wp-content/uploads/2020/01/forces-of-nature.jpg"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Declined" />
//           </td>
//         </tr>

//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Pending" />
//           </td>
//         </tr>

//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://media.vogue.in/wp-content/uploads/2020/01/forces-of-nature.jpg"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//         <tr className="widgetLgTr">
//           <td className="widgetLgUser">
//             <img
//               src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//               alt=""
//               className="widgetLgImg"
//             />
//             <span className="widgetLgName">Susan Carol</span>
//           </td>
//           <td className="widgetLgDate">2 Jun 2021</td>
//           <td className="widgetLgAmount">$122.00</td>
//           <td className="widgetLgStatus">
//             <Button type="Approved" />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };
