import React from 'react'
import Slider from './Slider'

export default function PO({setStep}) {
  return (
    <>
      <div className='px-3'>
      <div class="card shadow border-0 mb-7 mt-4">
                    <div class="card-header">
                        <h5 class="mb-0">Purchase Order</h5>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Offer</th>
                                    <th scope="col">Meeting</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RD2VvNTbXibR4IJX_YgsB1wV_wZxuF25eeZUt2A0Wg&s" class="avatar avatar-sm rounded-circle me-2"/>
                                        <a class="text-heading font-semibold" href="#">
                                            Steve Smith
                                        </a>
                                    </td>
                                    <td>
                                        Nov 15, 2022
                                    </td>
                                    <td>
                                        <img alt="..." src="data:image/jpeg;base64,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" class="avatar avatar-xs rounded-circle me-2"/>
                                        <a class="text-heading font-semibold" href="#">
                                            Cricket Australia
                                        </a>
                                    </td>
                                    <td>
                                        $3.500
                                    </td>
                                    <td>
                                        <span class="badge badge-lg badge-dot">
                                            <i class="bg-success"></i>Scheduled
                                        </span>
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-sm btn-neutral">View</a>
                                        <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HA12R7cZa4JcZLMrxFVFsTA_WlB7qE4G6chPU16IEw&s" class="avatar avatar-sm rounded-circle me-2"/>
                                        <a class="text-heading font-semibold" href="#">
                                            Virat Kohli
                                        </a>
                                    </td>
                                    <td>
                                        Mar 31, 2021
                                    </td>
                                    <td>
                                        <img alt="..." src="data:image/png;base64,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" class="avatar avatar-xs rounded-circle me-2"/>
                                        <a class="text-heading font-semibold" href="#">
                                            BCCI
                                        </a>
                                    </td>
                                    <td>
                                        $2.750
                                    </td>
                                    <td>
                                        <span class="badge badge-lg badge-dot">
                                            <i class="bg-warning"></i>Postponed
                                        </span>
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-sm btn-neutral">View</a>
                                        <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                   
                                </tr>
                                <tr>
                                    <td>
                                        <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
                                        <a class="text-heading font-semibold" href="#">
                                            Cody Fisher
                                        </a>
                                    </td>
                                    <td>
                                        Apr 10, 2021
                                    </td>
                                    <td>
                                        <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" class="avatar avatar-xs rounded-circle me-2"/>
                                        <a class="text-heading font-semibold" href="#">
                                            Webpixels
                                        </a>
                                    </td>
                                    <td>
                                        $1.500
                                    </td>
                                    <td>
                                        <span class="badge badge-lg badge-dot">
                                            <i class="bg-danger"></i>Canceled
                                        </span>
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-sm btn-neutral">View</a>
                                        <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer border-0 py-5">
                        <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
                    </div>
                </div>
      </div>
      <Slider setStep={setStep}/>
    </>
  )
}
