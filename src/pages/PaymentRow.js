
import React from 'react';

const PaymentRow = ({ invoice, date, amount, status }) => {
 return (
    <tr className="">
      <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
        {invoice}
        <div className="mt-1 lg:hidden">
          <p className="font-normal text-gray-500">{date}</p>
        </div>
      </td>
      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{date}</td>
      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
        ${amount}
        <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">{status}</div>
      </td>
      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
        <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">{status}</div>
      </td>
    </tr>
 );
};

export default PaymentRow;
