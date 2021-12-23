import React, { Component } from "react";

import { Redirect } from "react-router-dom";

export class Admin_nav extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    const check = JSON.parse(localStorage.getItem("check"));

    if (check.isLoggedIn == "false") {
      return <Redirect to="/" />;
    }
    const logout = () => {
      localStorage.clear();
      var check = { isLoggedIn: "false" };
      localStorage.setItem("check", JSON.stringify(check));
      window.location.href = "/";
    };

    const search = () => {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    };
    return (
      <div>
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-dark" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Tables
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Tables</h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline">
                  <label className="form-label"></label>
                  <input
                    id="myInput"
                    onKeyUp="myFunction()"
                    type="text"
                    className="form-control"
                    placeholder="Type name"
                  />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">{user.email}</span>
                  </a>
                </li>

                <li className="nav-item px-3 d-flex align-items-center">
                  <button onClick={logout} className="nav-link text-body p-0">
                    <i className="fa fa-sign-out fixed-plugin-button-nav cursor-pointer" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Admin_nav;
