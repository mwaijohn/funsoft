import React from 'react'
import Aside from './Aside'

function ComponentsWithSidebar({ children }) {
    return (
        <div class="flex flex-row">
            <div class="basis-1/5">
                <Aside />
            </div>
            <div class="basis-4/5 pl-1">
                {children}
            </div>
        </div>
    )
}

export default ComponentsWithSidebar