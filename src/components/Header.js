import React from 'react'

function Header() {
  return (
    <React.Fragment>
      <nav class="bg-gray-50 dark:bg-gray-600">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Setup</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline">Emr</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline">Nursing</a>
              </li>
              <li>
                <a href="#" class="text-gray-900 dark:text-white hover:underline">Operations</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </React.Fragment>
  )
}

export default Header