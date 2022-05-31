import React from 'react';
import AdminLayout from '../../components/AdminLayout';

export default function Orders() {
  return <div>Orders</div>;
}
Orders.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
