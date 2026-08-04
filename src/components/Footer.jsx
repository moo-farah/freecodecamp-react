const footerColumns = [
  {
    title: "About us",
    links: ["Careers", "Emerging talent", "Customers", "Help center", "Product releases", "API documentation"],
  },
  {
    title: "Products",
    links: ["Corporate cards", "Expense management", "Spend management", "Budgets", "Banking", "Travel", "Reimbursements", "Procurement", "Accounts payable", "Vendor management", "Approvals", "Security"],
  },
  {
    title: "Platform",
    links: ["Platform overview", "Accounting automation", "Intelligence", "Reporting", "Savings", "Integrations", "Multi-entity", "Global"],
  },
  {
    title: "Partners",
    links: ["Accounting firms", "Private equity", "Venture capital", "System integrators", "Technology partners", "Reseller partners", "Franchise partners"],
  },
  {
    title: "Solutions",
    links: ["Startups", "Small business", "Mid market", "Enterprise"],
  },
];

const Footer = () => {
  return (
    <>
    <footer className="bg-[#1A1919] text-[#F4F2EF] px-4 sm:px-8 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <ul className="flex flex-col gap-3">
              <li className="font-semibold text-[#F4F2EF]">{column.title}</li>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="/" className="text-xs sm:text-sm text-[#8A8A8A] hover:text-[#F4F2EF] hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="my-8 border-[#8A8A8A]" />

      <p className="text-[#8A8A8A] text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Ramp. All rights reserved.
      </p>
  </footer>
    </>
   
  )
}

export default Footer