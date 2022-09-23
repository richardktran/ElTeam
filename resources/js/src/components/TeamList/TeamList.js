import React from 'react'

const TeamList = () => {
  return (
    <div className="nk-tb-list is-separate mb-3">
      <div className="nk-tb-item nk-tb-head">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid" />
            <label className="custom-control-label" htmlFor="uid" />
          </div>
        </div>
        <div className="nk-tb-col">
          <span className="sub-text">User</span>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="sub-text">Ordered</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="sub-text">Phone</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span className="sub-text">Country</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span className="sub-text">Last Order</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="sub-text">Status</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1 my-n1">
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger mr-n1" data-toggle="dropdown" aria-expanded="false">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right" style={{}}>
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="#">
                        <em className="icon ni ni-mail" />
                        <span>Send Email to All</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend Selected</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-trash" />
                        <span>Remove Seleted</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Password</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid1" />
            <label className="custom-control-label" htmlFor="uid1" />
          </div>
        </div>
        <div className="nk-tb-col">
          <a href="html/ecommerce/customer-details.html">
            <div className="user-card">
              <div className="user-avatar bg-primary">
                <span>AB</span>
              </div>
              <div className="user-info">
                <span className="tb-lead">Abu Bin Ishtiyak <span className="dot dot-success d-md-none ml-1" /></span>
                <span>info@softnio.com</span>
              </div>
            </div>
          </a>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">35,040.34 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+811 847-4958</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>United State</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>10 Feb 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-success">Active</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid2" />
            <label className="custom-control-label" htmlFor="uid2" />
          </div>
        </div>
        <div className="nk-tb-col">
          <a href="html/ecommerce/customer-details.html">
            <div className="user-card">
              <div className="user-avatar">
                <img src="./images/avatar/a-sm.jpg" alt="" />
              </div>
              <div className="user-info">
                <span className="tb-lead">Ashley Lawson <span className="dot dot-warning d-md-none ml-1" /></span>
                <span>ashley@softnio.com</span>
              </div>
            </div>
          </a>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">580.00 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+124 394-1787</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>United Kindom</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>07 Feb 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-warning">Pending</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid3" />
            <label className="custom-control-label" htmlFor="uid3" />
          </div>
        </div>
        <div className="nk-tb-col">
          <a href="html/ecommerce/customer-details.html">
            <div className="user-card">
              <div className="user-avatar bg-info">
                <span>JL</span>
              </div>
              <div className="user-info">
                <span className="tb-lead">Joe Larson <span className="dot dot-success d-md-none ml-1" /></span>
                <span>larson@example.com</span>
              </div>
            </div>
          </a>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">32,000.34 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+168 603-2320</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>India</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>04 Feb 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-success">Active</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid4" />
            <label className="custom-control-label" htmlFor="uid4" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar bg-danger">
              <span>JM</span>
            </div>
            <div className="user-info">
              <span className="tb-lead">Jane Montgomery <span className="dot dot-danger d-md-none ml-1" /></span>
              <span>jane84@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">0.00 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+439 271-5360</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>Canada</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>01 Feb 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-danger">Suspend</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid5" />
            <label className="custom-control-label" htmlFor="uid5" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar">
              <img src="./images/avatar/b-sm.jpg" alt="" />
            </div>
            <div className="user-info">
              <span className="tb-lead">Frances Burns <span className="dot dot-success d-md-none ml-1" /></span>
              <span>frances@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">42.50 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+639 130-3150</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>Australia</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>31 Jan 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-success">Active</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid6" />
            <label className="custom-control-label" htmlFor="uid6" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar">
              <img src="./images/avatar/c-sm.jpg" alt="" />
            </div>
            <div className="user-info">
              <span className="tb-lead">Alan Butler <span className="dot dot-info d-md-none ml-1" /></span>
              <span>butler@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">440.34 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+963 309-1706</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>United State</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>18 Jan 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-info">Inactive</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid7" />
            <label className="custom-control-label" htmlFor="uid7" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar bg-warning">
              <span>VL</span>
            </div>
            <div className="user-info">
              <span className="tb-lead">Victoria Lynch <span className="dot dot-success d-md-none ml-1" /></span>
              <span>victoria@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">59,400.68 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+811 985-4846</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>India</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>15 Jan 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-success">Active</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid8" />
            <label className="custom-control-label" htmlFor="uid8" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar bg-success">
              <span>PN</span>
            </div>
            <div className="user-info">
              <span className="tb-lead">Patrick Newman <span className="dot dot-success d-md-none ml-1" /></span>
              <span>patrick@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">30.00 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+942 238-4474</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>United Kindom</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>08 Jan 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-success">Active</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid9" />
            <label className="custom-control-label" htmlFor="uid9" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar">
              <img src="./images/avatar/d-sm.jpg" alt="" />
            </div>
            <div className="user-info">
              <span className="tb-lead">Jane Harris <span className="dot dot-warning d-md-none ml-1" /></span>
              <span>harris@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">5,530.23 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+123 447-2384</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>Bangladesh</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>02 Jan 2020</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-warning">Pending</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */} <div className="nk-tb-item">
        <div className="nk-tb-col nk-tb-col-check">
          <div className="custom-control custom-control-sm custom-checkbox notext">
            <input type="checkbox" className="custom-control-input" id="uid10" />
            <label className="custom-control-label" htmlFor="uid10" />
          </div>
        </div>
        <div className="nk-tb-col">
          <div className="user-card">
            <div className="user-avatar bg-purple">
              <span>EW</span>
            </div>
            <div className="user-info">
              <span className="tb-lead">Emma Walker <span className="dot dot-success d-md-none ml-1" /></span>
              <span>walker@example.com</span>
            </div>
          </div>
        </div>
        <div className="nk-tb-col tb-col-mb">
          <span className="tb-amount">55.00 <span className="currency">USD</span>
          </span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span>+463 471-7173</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>India</span>
        </div>
        <div className="nk-tb-col tb-col-lg">
          <span>25 Dec 2019</span>
        </div>
        <div className="nk-tb-col tb-col-md">
          <span className="tb-status text-success">Active</span>
        </div>
        <div className="nk-tb-col nk-tb-col-tools">
          <ul className="nk-tb-actions gx-1">
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Send Email">
                <em className="icon ni ni-mail-fill" />
              </a>
            </li>
            <li className="nk-tb-action-hidden">
              <a href="#" className="btn btn-trigger btn-icon" data-toggle="tooltip" data-placement="top" title data-original-title="Suspend">
                <em className="icon ni ni-user-cross-fill" />
              </a>
            </li>
            <li>
              <div className="drodown">
                <a href="#" className="dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown">
                  <em className="icon ni ni-more-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <a href="html/ecommerce/customer-details.html">
                        <em className="icon ni ni-eye" />
                        <span>View Details</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-repeat" />
                        <span>Orders</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-activity-round" />
                        <span>Activities</span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">
                        <em className="icon ni ni-shield-star" />
                        <span>Reset Pass</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-na" />
                        <span>Suspend</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>{/* .nk-tb-item */}
    </div>

  );
}

export default TeamList
