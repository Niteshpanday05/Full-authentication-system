export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Ecommerce Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back 👋
            </p>
          </div>

          <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl p-6">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Total Orders</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              1,248
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              $24,530
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Products</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              312
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-sm text-gray-500">Customers</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              896
            </h2>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="mt-8 rounded-xl bg-white shadow">
          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold">
              Recent Orders
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">#1001</td>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">$250</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Delivered
                    </span>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">#1002</td>
                  <td className="px-6 py-4">Sarah Smith</td>
                  <td className="px-6 py-4">$180</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">#1003</td>
                  <td className="px-6 py-4">Michael Lee</td>
                  <td className="px-6 py-4">$95</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                      Shipped
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}