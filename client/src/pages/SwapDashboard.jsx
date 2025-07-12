import { useEffect, useState } from 'react';
import { getSwaps, updateSwap } from '../api';

function SwapDashboard() {
  const [swaps, setSwaps] = useState([]);

  useEffect(() => {
    getSwaps().then(res => setSwaps(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await updateSwap(id, { status });
    setSwaps(swaps.map(s => (s._id === id ? { ...s, status } : s)));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Swap Requests</h2>
      {swaps.map((s, i) => (
        <div key={i} className="border p-4 rounded mb-3">
          <p><b>From:</b> {s.fromUser}</p>
          <p><b>To:</b> {s.toUser}</p>
          <p><b>Offer:</b> {s.skillOffered} → <b>Want:</b> {s.skillWanted}</p>
          <p><b>Status:</b> {s.status}</p>
          {s.status === 'pending' && (
            <div className="mt-2 space-x-2">
              <button onClick={() => updateStatus(s._id, 'accepted')} className="bg-green-500 text-white px-3 py-1 rounded">Accept</button>
              <button onClick={() => updateStatus(s._id, 'rejected')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SwapDashboard;
