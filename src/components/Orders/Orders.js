import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
      const [order, setOrder] = useState([]);
      const { user } = useAuth()
      const history = useHistory();
      useEffect(() => {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                  headers: {
                        'authorization': `Bearer ${localStorage.getItem('idToken')}`

                  }
            })
                  .then(res => {
                        if (res.status === 200) {
                              return res.json();
                        }
                        else if (res.status === 401) {
                              history.push('/login')
                        }
                        res.json()
                  })
                  .then(data => setOrder(data))
      }, [])
      return (
            <div>
                  <h2>This is {order.length} orders</h2>
                  {
                        order.map(order => <li>{order.email}</li>)
                  }
            </div>
      );
};

export default Orders;