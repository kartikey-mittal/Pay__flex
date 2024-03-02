import React from "react";
import Sidebars from "../components/SideBar";
import PaymentRow from "./PaymentRow"; 

const Lakshay = () => {
 const payments = [
  {
    invoice: "Standard Plan - Feb 2022",
    date: "07 February, 2022",
    amount: "59.00",
    status: "Complete",
  },
  {
    invoice: "Premium Plan - March 2023",
    date: "15 March, 2023",
    amount: "99.00",
    status: "Pending",
  },
  {
    invoice: "Business Plan - April 2023",
    date: "20 April, 2023",
    amount: "199.00",
    status: "Paid",
  },
  // Add more payment objects as needed
];

 return (
    <>
      <Sidebars />
      <div className="w-screen">
        <div className="mx-auto mt-8 max-w-screen-lg px-2">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-900">Latest Payments</p>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end">
                <div className="flex items-center">
                 <label htmlFor="" className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">Sort by:</label>
                 <select name="" className="sm:mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                    <option className="whitespace-no-wrap text-sm">Recent</option>
                 </select>
                </div>
                <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                 <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Export to CSV
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                 <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Invoice</td>
                 <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
                 <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>
                 <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                </tr>
              </thead>
              <tbody className="lg:border-gray-300">
                {payments.map((payment, index) => (
                 <PaymentRow key={index} {...payment}
                  />
                
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
 );
};

export default Lakshay;
