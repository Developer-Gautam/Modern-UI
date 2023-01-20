export default function Table() {

    // Date for the transactions
    const transactions_list = [
      {
        summary: 'Microsoft Corporation',
        card_no: '**** **** **** 1234',
        type: 'Cashback',
        amount: 255.55,
        time: '25 Oct 2022 05:30'
      },
      {
        summary: 'Tesla Inc.',
        card_no: '**** **** **** 1234',
        type: 'Topup',
        amount: 755.00,
        time: '24 Oct 2022 15:30'
      },
      {
        summary: 'Coca Cola co.',
        card_no: '**** **** **** 1234',
        type: 'Cashback',
        amount: 999.00,
        time: '23 Oct 2022 12:17'
      },
      {
        summary: 'Nvidia Corporation',
        card_no: '**** **** **** 1234',
        type: 'Topup',
        amount: 555.55,
        time: '20 Oct 2022 01:07'
      }
    ]
    return (
      <>
        {/* Table for transactions */}
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
              </colgroup>
              {/* Table Heading */}
              <thead className="bg-[#6aaaf3]">
                <tr className="text-left">
                  <th className="p-3">Summary</th>
                  <th className="p-3">Card No.</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Date & Time</th>
                  <th className="p-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
  
                {/* Looping through each transactions for listing */}
                {
                  transactions_list?.map((list, index) => (
                    <tr key={index} className="border-b border-opacity-20 border-gray-700 bg-slate-200">
                      <td className="p-3">
                        <p>{list.summary}</p>
                      </td>
                      <td className="p-3">
                        <p>{list.card_no}</p>
                      </td>
                      <td className="p-3">
                        <p>{list.type}</p>
                      </td>
                      <td className="p-3">
                        <p>{list.time}</p>
                      </td>
                      <td className="p-3 text-right">
                        <p>Rs. {list.amount}</p>
                      </td>
                    </tr>
                  ))
                }
  
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }