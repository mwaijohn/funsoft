import React from 'react'

function CashCollection() {
    return (
        <div class="px-2 py-2">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs uppercase bg-gray-50">
                    <tr>
                        <th scope="col" colSpan={5} class="py-3 px-6">
                            CASH COLLETION (POS)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="py-4 px-6 align-top">
                            <div className='flex'>
                                <label for="small-input" class="block mb-2 text-sm font-small  pr-4">File Selection Mode</label>
                                <div className='flex px-4 space-x-4'>
                                    <div class="flex items-center">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 " />
                                        <label for="default-checkbox" class="ml-2 text-sm font-small ">Search by No.</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input checked="" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                        <label for="checked-checkbox" class="ml-2 text-sm font-small ">Search by Name</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input checked="" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                        <label for="checked-checkbox" class="ml-2 text-sm font-small ">Walk In</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input checked="" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                        <label for="checked-checkbox" class="ml-2 text-sm font-small ">Clinic</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input checked="" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                        <label for="checked-checkbox" class="ml-2 text-sm font-small ">MCH/FP</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Patient Name</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border
                                 border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400" />
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Mobile Transaction No.</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border
                                 border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-small ">Revenue Code</label>
                                <select class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option>ABSCONDERS</option>
                                    <option>ADMISSION</option>
                                    <option>CLINICS</option>
                                    <option>DENTAL</option>
                                    <option>ENT</option>
                                    <option>EXCEMPTIONS</option>
                                    <option>EYE DEPARTMENT</option>
                                    <option>LABORATORY GENERAL</option>
                                </select>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">A/C Code</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Token Balance</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </td>
                        <td class="py-4 px-6 align-top">
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Bill Payer Telephone</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Patient No</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Patient Category</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Unit No.</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-small ">Excemption/Waiver No.</label>
                                <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </td>
                        <td class="py-4 px-6" colSpan={3}>
                            <fieldset className="border border-solid border-gray-300 p-3">
                                <legend>Shift Session Identity:</legend>
                                <div>
                                    <label for="small-input" class="block mb-2 text-sm font-small ">Date</label>
                                    <input type="date" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="small-input" class="block mb-2 text-sm font-small ">Cash Point</label>
                                    <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="small-input" class="block mb-2 text-sm font-small ">Shift No.</label>
                                    <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-small ">Payment Mode</label>
                                    <select class="bg-gray-50 border border-gray-300 block w-full p-2.5">
                                        <option>cash</option>
                                        <option>eft</option>
                                        <option>credit card</option>
                                        <option>cheque</option>
                                        <option>flutterwave</option>
                                        <option>Googleplay</option>
                                        <option>M-pesa</option>
                                        <option>Paypal</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="small-input" class="block mb-2 text-sm font-small ">GI A/C No.</label>
                                    <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="small-input" class="block mb-2 text-sm font-small ">Selected Pay</label>
                                    <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label for="small-input" class="block mb-2 text-sm font-small ">Receipt No.</label>
                                    <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                            </fieldset>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default CashCollection