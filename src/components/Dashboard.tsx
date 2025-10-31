'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  SCMOpt
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome to SCMOpt
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Supply Chain Management Optimization Platform
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Inventory Optimization
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                EOQ, Wagner-Whitin, and safety stock allocation
              </p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                Learn more →
              </button>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Production Planning
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Multi-period lot-sizing with capacity constraints
              </p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                Learn more →
              </button>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Demand Forecasting
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Deep learning and AutoML forecasting methods
              </p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                Learn more →
              </button>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Scheduling
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Resource-constrained project scheduling
              </p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                Learn more →
              </button>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Network Design
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Location and distribution network optimization
              </p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                Learn more →
              </button>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Risk Management
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Supply chain risk optimization
              </p>
              <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                Learn more →
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
              Getting Started
            </h3>
            <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
              Select an optimization module from the cards above to begin. Each module
              provides powerful algorithms to optimize different aspects of your supply chain.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
