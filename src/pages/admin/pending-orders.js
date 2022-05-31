import React from 'react';
import AdminLayout from '../../components/AdminLayout';

export default function PendingOrders() {
  return <div>pending-orders</div>;
}
PendingOrders.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
