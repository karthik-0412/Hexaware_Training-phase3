// src/components/RestaurantSidebar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Utensils, Folder, ShoppingCart, Users, Settings, LogOut, Circle, Cog
} from 'lucide-react';
import { Divider } from 'primereact/divider';
import { Badge } from 'primereact/badge';
import axios from 'axios';

export default function RestaurantSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [pendingCount, setPendingCount] = useState(0);
  const token = localStorage.getItem("token");
  const restaurantId = localStorage.getItem("restaurantId");



  const navItems = [
    { icon: <Home size={18} />, label: 'Dashboard', path: '/resdash' },
    { icon: <Utensils size={18} />, label: 'Menu Management', path: '/menures' },
    { icon: <Folder size={18} />, label: 'Categories', path: '/rescat' },
    { icon: <ShoppingCart size={18} />, label: 'Orders', path: '/resorder', badge: pendingCount },
    { icon: <Users size={18} />, label: 'Restaurant Profile', path: '/resprofile', highlight: true },
  ];

  // Optionally fetch open status from API
  useEffect(() => {
  const fetchRestaurantStatusAndOrders = async () => {
    try {
      // 1. Fetch open status
      const statusRes = await axios.get('http://localhost:9002/api/restaurant/current',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (statusRes.data?.open !== undefined) {
  setIsOpen(statusRes.data.open);
}
      // setIsOpen(statusRes.data.open);

      // 2. Fetch order list and count pending ones
      const orderRes = await axios.get(
        `http://localhost:9002/api/order/restaurant/${restaurantId}/orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then(res => {
        console.log("Orders received:", res.data); // check if it logs your visible order
      // setOrders(res.data); 
      return res;

      });

      const orders = orderRes.data || [];
      const activeOrders = orders.filter(order =>
        ['placed', 'confirmed', 'preparing', 'ready'].includes(order.status?.toLowerCase())
      );
      setPendingCount(activeOrders.length);

    } catch (error) {
      console.error("Error fetching restaurant or order data", error);
    }
  };

  fetchRestaurantStatusAndOrders();
}, []);


  const toggleStatus = () => {
    const updated = !isOpen;
    setIsOpen(updated);

    axios.put('http://localhost:9002/api/restaurant/status', { open: updated }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.error('Status update failed', err));
  };

  return (
    <div style={{
      width: '260px',
      height: '100vh',
      background: '#fff',
      borderRight: '1px solid #ddd',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      {/* Top Section */}
      <div>
        {/* Logo & Panel Label */}
        <div style={{
  padding: '20px',
  borderBottom: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}}>
  <img
    src="/hotbytelogo.png"
    alt="HotByte Logo"
    style={{ width: '150px', height: '42px', marginBottom: '8px' }}
  />
  <div style={{ fontSize: '12px', color: '#888' }}>Restaurant Panel</div>
</div>

        {/* Manager Info */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>👨‍🍳 Restaurant Manager</div>
          <div style={{ fontSize: '12px', color: '#b98310ff' }}>★ 4.8 Rating</div>
        </div>

        {/* Stats */}
        <div style={{
          padding: '20px',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <div style={{
            flex: 1,
            background: '#ecfdf5',
            borderRadius: '8px',
            padding: '0.75rem'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Today's Orders</div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>23</div>
          </div>
          <div style={{
            flex: 1,
            background: '#eff6ff',
            borderRadius: '8px',
            padding: '0.75rem'
          }}>
            <div style={{ fontSize: '0.75rem', color: '#3b82f6' }}>Revenue</div>
            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>₹1,234</div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ paddingTop: '1rem' }}>
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                background: isActive ? 'linear-gradient(to right, #f97316, #ef4444)' : 'transparent',
                color: isActive ? '#fff' : '#333',
                borderRadius: isActive ? '8px' : '0',
                margin: '4px 12px',
                fontWeight: isActive ? 'bold' : 'normal',
                cursor: 'pointer'
              })}
            >
              <div style={{ marginRight: '10px' }}>{item.icon}</div>
              <div>{item.label}</div>
              {typeof item.badge === 'number' && (
  <Badge
    value={item.badge}
    severity="danger"
    style={{ marginLeft: 'auto' }}
  />
)}

              {/* {item.badge && (
                <Badge
                  value={item.badge}
                  severity="danger"
                  style={{ marginLeft: 'auto' }}
                />
              )} */}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ paddingBottom: '1rem' }}>
        {/* Open/Close Toggle */}
        <div
          onClick={toggleStatus}
          style={{
            background: isOpen ? '#ecfdf5' : '#fef2f2',
            padding: '0.5rem 0.75rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            color: isOpen ? '#10b981' : '#ef4444',
            margin: '0 1rem 1rem 1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Circle size={10} fill={isOpen ? '#10b981' : '#ef4444'} color={isOpen ? '#10b981' : '#ef4444'} />
            {isOpen ? 'Restaurant Open' : 'Restaurant Closed'}
          </div>
          <Cog size={16} />
        </div>

        <Divider style={{ margin: '0 1rem' }} />

        {/* Settings */}
        <NavLink
          to="/restaurant/profile"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            color: '#555'
          }}
        >
          <Settings size={18} style={{ marginRight: '10px' }} />
          Settings
        </NavLink>

        {/* Logout */}
        <div
          onClick={() => {
            // Add actual logout logic
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            cursor: 'pointer',
            color: '#ef4444'
          }}
        >
          <LogOut size={18} style={{ marginRight: '10px' }} />
          Logout
        </div>
      </div>
    </div>
  );
}
