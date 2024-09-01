import { FC } from 'react';
import Link from 'next/link';

const InventoryPage: FC = () => {
  // Sample inventory items
  const items = [
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 5 },
    { id: 3, name: 'Item 3', quantity: 8 },
  ];

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default InventoryPage;
