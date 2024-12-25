const Dashboard = () => {
return (
    <>
      <body class="nav-fixed bg-light">
        <!-- Top app bar navigation menu-->
        <nav class="top-app-bar navbar navbar-expand navbar-dark bg-dark">
            <div class="container-fluid px-4">
                <!-- Drawer toggle button-->
                <button class="btn btn-lg btn-icon order-1 order-lg-0" id="drawerToggle" href="javascript:void(0);"><i class="material-icons">menu</i></button>
                <!-- Navbar brand-->
                <a class="navbar-brand me-auto" href="index.html"><div class="text-uppercase font-monospace">RK ENERGIES</div></a>
                <!-- Navbar items-->
                <div class="d-flex align-items-center mx-3 me-lg-0">
                    <!-- Navbar-->
                    
                    <!-- Navbar buttons-->
                    <div class="d-flex">
                        <!-- Messages dropdown-->
                        <div class="dropdown dropdown-notifications d-none d-sm-block">
                            <button class="btn btn-lg btn-icon dropdown-toggle me-3" id="dropdownMenuMessages" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">mail_outline</i></button>
                            <ul class="dropdown-menu dropdown-menu-end me-3 mt-3 py-0 overflow-hidden" aria-labelledby="dropdownMenuMessages">
                                <li><h6 class="dropdown-header bg-primary text-white fw-500 py-3">Messages</h6></li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item unread" href="#!">
                                        <div class="dropdown-item-content">
                                            <div class="dropdown-item-content-text"><div class="text-truncate d-inline-block" style="max-width: 18rem">Hi there, I had a question about something, is there any way you can help me out?</div></div>
                                            <div class="dropdown-item-content-subtext">Mar 12, 2023 &middot; Juan Babin</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <div class="dropdown-item-content">
                                            <div class="dropdown-item-content-text"><div class="text-truncate d-inline-block" style="max-width: 18rem">Thanks for the assistance the other day, I wanted to follow up with you just to make sure everyting is settled.</div></div>
                                            <div class="dropdown-item-content-subtext">Mar 10, 2023 &middot; Christine Hendersen</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <div class="dropdown-item-content">
                                            <div class="dropdown-item-content-text"><div class="text-truncate d-inline-block" style="max-width: 18rem">Welcome to our group! It's good to see new members and I know you will do great!</div></div>
                                            <div class="dropdown-item-content-subtext">Mar 8, 2023 &middot; Celia J. Knight</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item py-3" href="#!">
                                        <div class="d-flex align-items-center w-100 justify-content-end text-primary">
                                            <div class="fst-button small">View all</div>
                                            <i class="material-icons icon-sm ms-1">chevron_right</i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- Notifications and alerts dropdown-->
                        <div class="dropdown dropdown-notifications d-none d-sm-block">
                            <button class="btn btn-lg btn-icon dropdown-toggle me-3" id="dropdownMenuNotifications" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">notifications</i></button>
                            <ul class="dropdown-menu dropdown-menu-end me-3 mt-3 py-0 overflow-hidden" aria-labelledby="dropdownMenuNotifications">
                                <li><h6 class="dropdown-header bg-primary text-white fw-500 py-3">Alerts</h6></li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item unread" href="#!">
                                        <i class="material-icons leading-icon">assessment</i>
                                        <div class="dropdown-item-content me-2">
                                            <div class="dropdown-item-content-text">Your March performance report is ready to view.</div>
                                            <div class="dropdown-item-content-subtext">Mar 12, 2023 &middot; Performance</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <i class="material-icons leading-icon">check_circle</i>
                                        <div class="dropdown-item-content me-2">
                                            <div class="dropdown-item-content-text">Tracking codes successfully updated.</div>
                                            <div class="dropdown-item-content-subtext">Mar 12, 2023 &middot; Coverage</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <i class="material-icons leading-icon">warning</i>
                                        <div class="dropdown-item-content me-2">
                                            <div class="dropdown-item-content-text">Tracking codes have changed and require manual action.</div>
                                            <div class="dropdown-item-content-subtext">Mar 8, 2023 &middot; Coverage</div>
                                        </div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider my-0" /></li>
                                <li>
                                    <a class="dropdown-item py-3" href="#!">
                                        <div class="d-flex align-items-center w-100 justify-content-end text-primary">
                                            <div class="fst-button small">View all</div>
                                            <i class="material-icons icon-sm ms-1">chevron_right</i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- User profile dropdown-->
                        <div class="dropdown">
                            <button class="btn btn-lg btn-icon dropdown-toggle" id="dropdownMenuProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">person</i></button>
                            <ul class="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="dropdownMenuProfile">
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <i class="material-icons leading-icon">person</i>
                                        <div class="me-3">Profile</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <i class="material-icons leading-icon">settings</i>
                                        <div class="me-3">Settings</div>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#!">
                                        <i class="material-icons leading-icon">help</i>
                                        <div class="me-3">Help</div>
                                    </a>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item" href="app-auth-login-styled-1.html">
                                        <i class="material-icons leading-icon">logout</i>
                                        <div class="me-3">Logout</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Layout wrapper-->
        <div id="layoutDrawer">
            <!-- Layout navigation-->
            <div id="layoutDrawer_nav">
                <!-- Drawer navigation-->
                <nav class="drawer accordion drawer-light bg-white" id="drawerAccordion">
                    <div class="drawer-menu">
                        <div class="nav">
                            <!-- Drawer section heading (Account)-->
                            <div class="drawer-menu-heading d-sm-none">Account</div>
                            <!-- Drawer link (Notifications)-->
                            <a class="nav-link d-sm-none" href="#!">
                                <div class="nav-link-icon"><i class="material-icons">notifications</i></div>
                                Notifications
                            </a>
                            <!-- Drawer link (Messages)-->
                            <a class="nav-link d-sm-none" href="#!">
                                <div class="nav-link-icon"><i class="material-icons">mail</i></div>
                                Messages
                            </a>
                            <!-- Divider-->
                            <div class="drawer-menu-divider d-sm-none"></div>
                            <!-- Drawer section heading (Interface)-->
                            <div class="drawer-menu-heading">Interface</div>
                            <!-- Drawer link (Overview)-->
                            <a class="nav-link" href="index.html">
                                <div class="nav-link-icon"><i class="material-icons">language</i></div>
                                Dashboard
                            </a>
                            <!-- Drawer link (Dashboards)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                                <div class="nav-link-icon"><i class="material-icons">dashboard</i></div>
                                Dashboards
                                <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                            </a>
                            <!-- Nested drawer nav (Dashboards)-->
                            <div class="collapse" id="collapseDashboards" aria-labelledby="headingOne" data-bs-parent="#drawerAccordion">
                                
                            </div>
                            <!-- Drawer link (Layouts)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="nav-link-icon"><i class="material-icons">view_compact</i></div>
                                Layouts
                                <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                            </a>
                            <!-- Nested drawer nav (Layouts)-->
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#drawerAccordion">
                                <nav class="drawer-menu-nested nav">
                                    <a class="nav-link" href="layout-dark.html">Dark Theme</a>
                                    <a class="nav-link" href="layout-light.html">Light Theme</a>
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                </nav>
                            </div>
                            <!-- Drawer link (Pages)-->
                            <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="nav-link-icon"><i class="material-icons">layers</i></div>
                                Pages
                                <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                            </a>
                            <!-- Nested drawer nav (Pages)-->
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#drawerAccordion">
                                <nav class="drawer-menu-nested nav accordion" id="drawerAccordionPages">
                                    <!-- Drawer link (Pages -> Account)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount" aria-expanded="false" aria-controls="pagesCollapseAccount">
                                        Account
                                        <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                                    </a>
                                    <!-- Nested drawer nav (Pages -> Account)-->
                                    <div class="collapse" id="pagesCollapseAccount" aria-labelledby="headingOne" data-bs-parent="#drawerAccordionPages">
                                        <nav class="drawer-menu-nested nav">
                                            <a class="nav-link" href="app-account-billing.html">Billing</a>
                                            <a class="nav-link" href="app-account-notifications.html">Notifications</a>
                                            <a class="nav-link" href="app-account-profile.html">Profile</a>
                                            <a class="nav-link" href="app-account-security.html">Security</a>
                                        </nav>
                                    </div>
                                    <!-- Drawer link (Pages -> Authentication)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                                    </a>
                                    <!-- Nested drawer nav (Pages -> Authentication)-->
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#drawerAccordionPages">
                                        <nav class="drawer-menu-nested nav">
                                            <a class="nav-link" href="app-auth-login-basic.html">Login 1</a>
                                            <a class="nav-link" href="app-auth-login-styled-1.html">Login 2</a>
                                            <a class="nav-link" href="app-auth-login-styled-2.html">Login 3</a>
                                            <a class="nav-link" href="app-auth-register-basic.html">Register</a>
                                            <a class="nav-link" href="app-auth-password-basic.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <!-- Drawer link (Pages -> Blank Pages)-->
                                    <a class="nav-link" href="app-blank-page.html">Blank Page</a>
                                    <!-- Drawer link (Pages -> Error)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                                    </a>
                                    <!-- Nested drawer nav (Pages -> Error)-->
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#drawerAccordionPages">
                                        <nav class="drawer-menu-nested nav">
                                            <a class="nav-link" href="app-error-400.html">400 Error Page</a>
                                            <a class="nav-link" href="app-error-401.html">401 Error Page</a>
                                            <a class="nav-link" href="app-error-403.html">403 Error Page</a>
                                            <a class="nav-link" href="app-error-404.html">404 Error Page</a>
                                            <a class="nav-link" href="app-error-429.html">429 Error Page</a>
                                            <a class="nav-link" href="app-error-500.html">500 Error Page</a>
                                            <a class="nav-link" href="app-error-503.html">503 Error Page</a>
                                            <a class="nav-link" href="app-error-504.html">504 Error Page</a>
                                        </nav>
                                    </div>
                                    <!-- Drawer link (Pages -> Pricing)-->
                                    <a class="nav-link" href="app-invoice.html">Invoice</a>
                                    <!-- Drawer link (Pages -> Knowledgebase)-->
                                    <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseKnowledgebase" aria-expanded="false" aria-controls="pagesCollapseKnowledgebase">
                                        Knowledgebase
                                        <div class="drawer-collapse-arrow"><i class="material-icons">expand_more</i></div>
                                    </a>
                                    <!-- Nested drawer nav (Pages -> Knowledgebase)-->
                                    <div class="collapse" id="pagesCollapseKnowledgebase" aria-labelledby="headingOne" data-bs-parent="#drawerAccordionPages">
                                        <nav class="drawer-menu-nested nav">
                                            <a class="nav-link" href="app-knowledgebase-home.html">Home</a>
                                            <a class="nav-link" href="app-knowledgebase-categories.html">Categories</a>
                                            <a class="nav-link" href="app-knowledgebase-article.html">Article</a>
                                        </nav>
                                    </div>
                                    <!-- Drawer link (Pages -> Pricing)-->
                                    <a class="nav-link" href="app-pricing.html">Pricing</a>
                                </nav>
                            </div>
                            
                            
                            
                            
                            
                            
                        </div>
                    </div>
                    <!-- Drawer footer        -->
                    <div class="drawer-footer border-top">
                        <div class="d-flex align-items-center">
                            <i class="material-icons text-muted">account_circle</i>
                            <div class="ms-3">
                                <div class="caption">Logged in as:</div>
                                <div class="small fw-500">Start Bootstrap</div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- Layout content-->
            <div id="layoutDrawer_content">
                <!-- Main page content-->
                <main>
                    
                    <div class="container-xl p-5">
                        <div id="scrollTarget"></div>
                        <div class="container-xl p-5">
                            <div class="row justify-content-between align-items-center mb-5">
                                <div class="col flex-shrink-0 mb-5 mb-md-0">
                                    <h1 class="display-4 mb-0">Dashboard</h1>
                                    <div class="text-muted">Sales overview &amp; summary</div>
                                </div>
                                <div class="col-12 col-md-auto">
                                    <div class="d-flex flex-column flex-sm-row gap-3">
                                        <mwc-select class="mw-50 mb-2 mb-md-0" outlined label="View by">
                                            <mwc-list-item selected value="0">Order type</mwc-list-item>
                                            <mwc-list-item value="1">Segment</mwc-list-item>
                                            <mwc-list-item value="2">Customer</mwc-list-item>
                                        </mwc-select>
                                        <mwc-select class="mw-50" outlined label="Sales from">
                                            <mwc-list-item value="0">Last 7 days</mwc-list-item>
                                            <mwc-list-item value="1">Last 30 days</mwc-list-item>
                                            <mwc-list-item value="2">Last month</mwc-list-item>
                                            <mwc-list-item selected value="3">Last year</mwc-list-item>
                                        </mwc-select>
                                    </div>
                                </div>
                            </div>
                            <!-- Colored status cards-->
                            <div class="row gx-5">
                                <div class="col-xxl-3 col-md-6 mb-5">
                                    <div class="card card-raised bg-primary text-white">
                                        <div class="card-body px-4">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="display-5 text-white">101.1K</div>
                                                    <div class="card-text">Downloads</div>
                                                </div>
                                                <div class="icon-circle bg-white-50 text-primary"><i class="material-icons">download</i></div>
                                            </div>
                                            <div class="card-text">
                                                <div class="d-inline-flex align-items-center">
                                                    <i class="material-icons icon-xs">arrow_upward</i>
                                                    <div class="caption fw-500 me-2">3%</div>
                                                    <div class="caption">from last month</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6 mb-5">
                                    <div class="card card-raised bg-warning text-white">
                                        <div class="card-body px-4">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="display-5 text-white">12.2K</div>
                                                    <div class="card-text">Purchases</div>
                                                </div>
                                                <div class="icon-circle bg-white-50 text-warning"><i class="material-icons">storefront</i></div>
                                            </div>
                                            <div class="card-text">
                                                <div class="d-inline-flex align-items-center">
                                                    <i class="material-icons icon-xs">arrow_upward</i>
                                                    <div class="caption fw-500 me-2">3%</div>
                                                    <div class="caption">from last month</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6 mb-5">
                                    <div class="card card-raised bg-secondary text-white">
                                        <div class="card-body px-4">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="display-5 text-white">5.3K</div>
                                                    <div class="card-text">Customers</div>
                                                </div>
                                                <div class="icon-circle bg-white-50 text-secondary"><i class="material-icons">people</i></div>
                                            </div>
                                            <div class="card-text">
                                                <div class="d-inline-flex align-items-center">
                                                    <i class="material-icons icon-xs">arrow_upward</i>
                                                    <div class="caption fw-500 me-2">3%</div>
                                                    <div class="caption">from last month</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-md-6 mb-5">
                                    <div class="card card-raised bg-info text-white">
                                        <div class="card-body px-4">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="display-5 text-white">7</div>
                                                    <div class="card-text">Channels</div>
                                                </div>
                                                <div class="icon-circle bg-white-50 text-info"><i class="material-icons">devices</i></div>
                                            </div>
                                            <div class="card-text">
                                                <div class="d-inline-flex align-items-center">
                                                    <i class="material-icons icon-xs">arrow_upward</i>
                                                    <div class="caption fw-500 me-2">3%</div>
                                                    <div class="caption">from last month</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-5">
                                <!-- Revenue breakdown chart example-->
                                <div class="col-lg-8 mb-5">
                                    <div class="card card-raised h-100">
                                        <div class="card-header bg-primary text-white px-4">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-4">
                                                    <h2 class="card-title text-white mb-0">Revenue Breakdown</h2>
                                                    <div class="card-subtitle">Compared to previous year</div>
                                                </div>
                                                <div class="d-flex gap-2 me-n2">
                                                    <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">download</i></button>
                                                    <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">print</i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-4">
                                            <div class="row gx-4">
                                                <div class="col-12 col-xxl-2">
                                                    <div class="d-flex flex-column flex-md-row flex-xxl-column align-items-center align-items-xl-start justify-content-between">
                                                        <div class="mb-4 text-center text-md-start">
                                                            <div class="text-xs font-monospace text-muted mb-1">Actual Revenue</div>
                                                            <div class="display-5 fw-500">$59,482</div>
                                                        </div>
                                                        <div class="mb-4 text-center text-md-start">
                                                            <div class="text-xs font-monospace text-muted mb-1">Revenue Target</div>
                                                            <div class="display-5 fw-500">$50,000</div>
                                                        </div>
                                                        <div class="mb-4 text-center text-md-start">
                                                            <div class="text-xs font-monospace text-muted mb-1">Goal</div>
                                                            <div class="display-5 fw-500 text-success">119%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xxl-10"><canvas id="dashboardBarChart"></canvas></div>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-transparent position-relative ripple-gray">
                                            <a class="d-flex align-items-center justify-content-end text-decoration-none stretched-link text-primary" href="#!">
                                                <div class="fst-button">Open Report</div>
                                                <i class="material-icons icon-sm ms-1">chevron_right</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- Segments pie chart example-->
                                <div class="col-lg-4 mb-5">
                                    <div class="card card-raised h-100">
                                        <div class="card-header bg-primary text-white px-4">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="me-4">
                                                    <h2 class="card-title text-white mb-0">Segments</h2>
                                                    <div class="card-subtitle">Revenue sources</div>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn btn-lg btn-text-light btn-icon me-n2 dropdown-toggle" id="segmentsDropdownButton" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></button>
                                                    <ul class="dropdown-menu" aria-labelledby="segmentsDropdownButton">
                                                        <li><a class="dropdown-item" href="#!">Action</a></li>
                                                        <li><a class="dropdown-item" href="#!">Another action</a></li>
                                                        <li><a class="dropdown-item" href="#!">Something else here</a></li>
                                                        <li><hr class="dropdown-divider" /></li>
                                                        <li><a class="dropdown-item" href="#!">Separated link</a></li>
                                                        <li><a class="dropdown-item" href="#!">Separated link</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-4">
                                            <div class="d-flex h-100 w-100 align-items-center justify-content-center">
                                                <div class="w-100" style="max-width: 20rem"><canvas id="myPieChart"></canvas></div>
                                            </div>
                                        </div>
                                        <div class="card-footer bg-transparent position-relative ripple-gray">
                                            <a class="d-flex align-items-center justify-content-end text-decoration-none stretched-link text-primary" href="#!">
                                                <div class="fst-button">Open Report</div>
                                                <i class="material-icons icon-sm ms-1">chevron_right</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-5">
                                <!-- Privacy suggestions illustrated card-->
                                <div class="col-xl-6 mb-5">
                                    <div class="card card-raised h-100">
                                        <div class="card-body p-4">
                                            <div class="d-flex justify-content-between">
                                                <div class="me-4">
                                                    <h2 class="card-title mb-0">Privacy Suggestions</h2>
                                                    <p class="card-text">Take our privacy checkup to choose which settings are right for you.</p>
                                                </div>
                                                <img src="assets/img/illustrations/security.svg" alt="..." style="height: 6rem" />
                                            </div>
                                        </div>
                                        <div class="card-footer bg-transparent position-relative ripple-gray px-4"><a class="stretched-link text-decoration-none" href="#!">Review suggestions (4)</a></div>
                                    </div>
                                </div>
                                <!-- Account storage illustrated card-->
                                <div class="col-xl-6 mb-5">
                                    <div class="card card-raised h-100">
                                        <div class="card-body p-4">
                                            <div class="d-flex justify-content-between">
                                                <div class="me-4">
                                                    <h2 class="card-title mb-0">Account Storage</h2>
                                                    <p class="card-text">Your account storage is shared across all devices.</p>
                                                    <div class="progress mb-2" style="height: 0.25rem"><div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="30"></div></div>
                                                    <div class="card-text">10 GB of 30 GB used</div>
                                                </div>
                                                <img src="assets/img/illustrations/cloud.svg" alt="..." style="height: 6rem" />
                                            </div>
                                        </div>
                                        <div class="card-footer bg-transparent position-relative ripple-gray px-4"><a class="stretched-link text-decoration-none" href="#!">Manage storage</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-raised">
                                <div class="card-header bg-primary text-white px-4">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="me-4">
                                            <h2 class="card-title text-white mb-0">Orders</h2>
                                            <div class="card-subtitle">Details and history</div>
                                        </div>
                                        <div class="d-flex gap-2">
                                            <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">download</i></button>
                                            <button class="btn btn-lg btn-text-white btn-icon" type="button"><i class="material-icons">print</i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-4">
                                    <!-- Simple DataTables example-->
                                    <table id="datatablesSimple">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Ext.</th>
                                                <th>City</th>
                                                <th data-type="date" data-format="YYYY/MM/DD">Start Date</th>
                                                <th>Completion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Unity Pugh</td>
                                                <td>9958</td>
                                                <td>Curicó</td>
                                                <td>2005/02/11</td>
                                                <td>37%</td>
                                            </tr>
                                            <tr>
                                                <td>Theodore Duran</td>
                                                <td>8971</td>
                                                <td>Dhanbad</td>
                                                <td>1999/04/07</td>
                                                <td>97%</td>
                                            </tr>
                                            <tr>
                                                <td>Kylie Bishop</td>
                                                <td>3147</td>
                                                <td>Norman</td>
                                                <td>2005/09/08</td>
                                                <td>63%</td>
                                            </tr>
                                            <tr>
                                                <td>Willow Gilliam</td>
                                                <td>3497</td>
                                                <td>Amqui</td>
                                                <td>2009/29/11</td>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <td>Blossom Dickerson</td>
                                                <td>5018</td>
                                                <td>Kempten</td>
                                                <td>2006/11/09</td>
                                                <td>17%</td>
                                            </tr>
                                            <tr>
                                                <td>Elliott Snyder</td>
                                                <td>3925</td>
                                                <td>Enines</td>
                                                <td>2006/03/08</td>
                                                <td>57%</td>
                                            </tr>
                                            <tr>
                                                <td>Castor Pugh</td>
                                                <td>9488</td>
                                                <td>Neath</td>
                                                <td>2014/23/12</td>
                                                <td>93%</td>
                                            </tr>
                                            <tr>
                                                <td>Pearl Carlson</td>
                                                <td>6231</td>
                                                <td>Cobourg</td>
                                                <td>2014/31/08</td>
                                                <td>100%</td>
                                            </tr>
                                            <tr>
                                                <td>Deirdre Bridges</td>
                                                <td>1579</td>
                                                <td>Eberswalde-Finow</td>
                                                <td>2014/26/08</td>
                                                <td>44%</td>
                                            </tr>
                                            <tr>
                                                <td>Daniel Baldwin</td>
                                                <td>6095</td>
                                                <td>Moircy</td>
                                                <td>2000/11/01</td>
                                                <td>33%</td>
                                            </tr>
                                            <tr>
                                                <td>Phelan Kane</td>
                                                <td>9519</td>
                                                <td>Germersheim</td>
                                                <td>1999/16/04</td>
                                                <td>77%</td>
                                            </tr>
                                            <tr>
                                                <td>Quentin Salas</td>
                                                <td>1339</td>
                                                <td>Los Andes</td>
                                                <td>2011/26/01</td>
                                                <td>49%</td>
                                            </tr>
                                            <tr>
                                                <td>Armand Suarez</td>
                                                <td>6583</td>
                                                <td>Funtua</td>
                                                <td>1999/06/11</td>
                                                <td>9%</td>
                                            </tr>
                                            <tr>
                                                <td>Gretchen Rogers</td>
                                                <td>5393</td>
                                                <td>Moxhe</td>
                                                <td>1998/26/10</td>
                                                <td>24%</td>
                                            </tr>
                                            <tr>
                                                <td>Harding Thompson</td>
                                                <td>2824</td>
                                                <td>Abeokuta</td>
                                                <td>2008/06/08</td>
                                                <td>10%</td>
                                            </tr>
                                            <tr>
                                                <td>Mira Rocha</td>
                                                <td>4393</td>
                                                <td>Port Harcourt</td>
                                                <td>2002/04/10</td>
                                                <td>14%</td>
                                            </tr>
                                            <tr>
                                                <td>Drew Phillips</td>
                                                <td>2931</td>
                                                <td>Goes</td>
                                                <td>2011/18/10</td>
                                                <td>58%</td>
                                            </tr>
                                            <tr>
                                                <td>Emerald Warner</td>
                                                <td>6205</td>
                                                <td>Chiavari</td>
                                                <td>2002/08/04</td>
                                                <td>58%</td>
                                            </tr>
                                            <tr>
                                                <td>Colin Burch</td>
                                                <td>7457</td>
                                                <td>Anamur</td>
                                                <td>2004/02/01</td>
                                                <td>34%</td>
                                            </tr>
                                            <tr>
                                                <td>Russell Haynes</td>
                                                <td>8916</td>
                                                <td>Frascati</td>
                                                <td>2015/28/04</td>
                                                <td>18%</td>
                                            </tr>
                                            <tr>
                                                <td>Brennan Brooks</td>
                                                <td>9011</td>
                                                <td>Olmué</td>
                                                <td>2000/18/04</td>
                                                <td>2%</td>
                                            </tr>
                                            <tr>
                                                <td>Kane Anthony</td>
                                                <td>8075</td>
                                                <td>LaSalle</td>
                                                <td>2006/21/05</td>
                                                <td>93%</td>
                                            </tr>
                                            <tr>
                                                <td>Scarlett Hurst</td>
                                                <td>1019</td>
                                                <td>Brampton</td>
                                                <td>2015/07/01</td>
                                                <td>94%</td>
                                            </tr>
                                            <tr>
                                                <td>James Scott</td>
                                                <td>3008</td>
                                                <td>Meux</td>
                                                <td>2007/30/05</td>
                                                <td>55%</td>
                                            </tr>
                                            <tr>
                                                <td>Desiree Ferguson</td>
                                                <td>9054</td>
                                                <td>Gojra</td>
                                                <td>2009/15/02</td>
                                                <td>81%</td>
                                            </tr>
                                            <tr>
                                                <td>Elaine Bishop</td>
                                                <td>9160</td>
                                                <td>Petrópolis</td>
                                                <td>2008/23/12</td>
                                                <td>48%</td>
                                            </tr>
                                            <tr>
                                                <td>Hilda Nelson</td>
                                                <td>6307</td>
                                                <td>Posina</td>
                                                <td>2004/23/05</td>
                                                <td>76%</td>
                                            </tr>
                                            <tr>
                                                <td>Evangeline Beasley</td>
                                                <td>3820</td>
                                                <td>Caplan</td>
                                                <td>2009/12/03</td>
                                                <td>62%</td>
                                            </tr>
                                            <tr>
                                                <td>Wyatt Riley</td>
                                                <td>5694</td>
                                                <td>Cavaion Veronese</td>
                                                <td>2012/19/02</td>
                                                <td>67%</td>
                                            </tr>
                                            <tr>
                                                <td>Wyatt Mccarthy</td>
                                                <td>3547</td>
                                                <td>Patan</td>
                                                <td>2014/23/06</td>
                                                <td>9%</td>
                                            </tr>
                                            <tr>
                                                <td>Cairo Rice</td>
                                                <td>6273</td>
                                                <td>Ostra Vetere</td>
                                                <td>2016/27/02</td>
                                                <td>13%</td>
                                            </tr>
                                            <tr>
                                                <td>Sylvia Peters</td>
                                                <td>6829</td>
                                                <td>Arrah</td>
                                                <td>2015/03/02</td>
                                                <td>13%</td>
                                            </tr>
                                            <tr>
                                                <td>Kasper Craig</td>
                                                <td>5515</td>
                                                <td>Firenze</td>
                                                <td>2015/26/04</td>
                                                <td>56%</td>
                                            </tr>
                                            <tr>
                                                <td>Leigh Ruiz</td>
                                                <td>5112</td>
                                                <td>Lac Ste. Anne</td>
                                                <td>2001/09/02</td>
                                                <td>28%</td>
                                            </tr>
                                            <tr>
                                                <td>Athena Aguirre</td>
                                                <td>5741</td>
                                                <td>Romeral</td>
                                                <td>2010/24/03</td>
                                                <td>15%</td>
                                            </tr>
                                            <tr>
                                                <td>Riley Nunez</td>
                                                <td>5533</td>
                                                <td>Sart-Eustache</td>
                                                <td>2003/26/02</td>
                                                <td>30%</td>
                                            </tr>
                                            <tr>
                                                <td>Lois Talley</td>
                                                <td>9393</td>
                                                <td>Dorchester</td>
                                                <td>2014/05/01</td>
                                                <td>51%</td>
                                            </tr>
                                            <tr>
                                                <td>Hop Bass</td>
                                                <td>1024</td>
                                                <td>Westerlo</td>
                                                <td>2012/25/09</td>
                                                <td>85%</td>
                                            </tr>
                                            <tr>
                                                <td>Kalia Diaz</td>
                                                <td>9184</td>
                                                <td>Ichalkaranji</td>
                                                <td>2013/26/06</td>
                                                <td>92%</td>
                                            </tr>
                                            <tr>
                                                <td>Maia Pate</td>
                                                <td>6682</td>
                                                <td>Louvain-la-Neuve</td>
                                                <td>2011/23/04</td>
                                                <td>50%</td>
                                            </tr>
                                            <tr>
                                                <td>Macaulay Pruitt</td>
                                                <td>4457</td>
                                                <td>Fraser-Fort George</td>
                                                <td>2015/03/08</td>
                                                <td>92%</td>
                                            </tr>
                                            <tr>
                                                <td>Danielle Oconnor</td>
                                                <td>9464</td>
                                                <td>Neuwied</td>
                                                <td>2001/05/10</td>
                                                <td>17%</td>
                                            </tr>
                                            <tr>
                                                <td>Kato Carr</td>
                                                <td>4842</td>
                                                <td>Faridabad</td>
                                                <td>2012/11/05</td>
                                                <td>96%</td>
                                            </tr>
                                            <tr>
                                                <td>Malachi Mejia</td>
                                                <td>7133</td>
                                                <td>Vorst</td>
                                                <td>2007/25/04</td>
                                                <td>26%</td>
                                            </tr>
                                            <tr>
                                                <td>Dominic Carver</td>
                                                <td>3476</td>
                                                <td>Pointe-aux-Trembles</td>
                                                <td>2014/14/03</td>
                                                <td>71%</td>
                                            </tr>
                                            <tr>
                                                <td>Paki Santos</td>
                                                <td>4424</td>
                                                <td>Cache Creek</td>
                                                <td>2001/18/11</td>
                                                <td>82%</td>
                                            </tr>
                                            <tr>
                                                <td>Ross Hodges</td>
                                                <td>1862</td>
                                                <td>Trazegnies</td>
                                                <td>2010/19/09</td>
                                                <td>87%</td>
                                            </tr>
                                            <tr>
                                                <td>Hilda Whitley</td>
                                                <td>3514</td>
                                                <td>New Sarepta</td>
                                                <td>2011/05/07</td>
                                                <td>94%</td>
                                            </tr>
                                            <tr>
                                                <td>Roth Cherry</td>
                                                <td>4006</td>
                                                <td>Flin Flon</td>
                                                <td>2008/02/09</td>
                                                <td>8%</td>
                                            </tr>
                                            <tr>
                                                <td>Lareina Jones</td>
                                                <td>8642</td>
                                                <td>East Linton</td>
                                                <td>2009/07/08</td>
                                                <td>21%</td>
                                            </tr>
                                            <tr>
                                                <td>Joshua Weiss</td>
                                                <td>2289</td>
                                                <td>Saint-L�onard</td>
                                                <td>2010/15/01</td>
                                                <td>52%</td>
                                            </tr>
                                            <tr>
                                                <td>Kiona Lowery</td>
                                                <td>5952</td>
                                                <td>Inuvik</td>
                                                <td>2002/17/12</td>
                                                <td>72%</td>
                                            </tr>
                                            <tr>
                                                <td>Nina Rush</td>
                                                <td>7567</td>
                                                <td>Bo‘lhe</td>
                                                <td>2008/27/01</td>
                                                <td>6%</td>
                                            </tr>
                                            <tr>
                                                <td>Palmer Parker</td>
                                                <td>2000</td>
                                                <td>Stade</td>
                                                <td>2012/24/07</td>
                                                <td>58%</td>
                                            </tr>
                                            <tr>
                                                <td>Vielka Olsen</td>
                                                <td>3745</td>
                                                <td>Vrasene</td>
                                                <td>2016/08/01</td>
                                                <td>70%</td>
                                            </tr>
                                            <tr>
                                                <td>Meghan Cunningham</td>
                                                <td>8604</td>
                                                <td>Söke</td>
                                                <td>2007/16/02</td>
                                                <td>59%</td>
                                            </tr>
                                            <tr>
                                                <td>Iola Shaw</td>
                                                <td>6447</td>
                                                <td>Albany</td>
                                                <td>2014/05/03</td>
                                                <td>88%</td>
                                            </tr>
                                            <tr>
                                                <td>Imelda Cole</td>
                                                <td>4564</td>
                                                <td>Haasdonk</td>
                                                <td>2007/16/11</td>
                                                <td>79%</td>
                                            </tr>
                                            <tr>
                                                <td>Jerry Beach</td>
                                                <td>6801</td>
                                                <td>Gattatico</td>
                                                <td>1999/07/07</td>
                                                <td>36%</td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Rocha</td>
                                                <td>3938</td>
                                                <td>Gavorrano</td>
                                                <td>2000/06/08</td>
                                                <td>71%</td>
                                            </tr>
                                            <tr>
                                                <td>Derek Kerr</td>
                                                <td>1724</td>
                                                <td>Gualdo Cattaneo</td>
                                                <td>2014/21/01</td>
                                                <td>89%</td>
                                            </tr>
                                            <tr>
                                                <td>Shad Hudson</td>
                                                <td>5944</td>
                                                <td>Salamanca</td>
                                                <td>2014/10/12</td>
                                                <td>98%</td>
                                            </tr>
                                            <tr>
                                                <td>Daryl Ayers</td>
                                                <td>8276</td>
                                                <td>Barchi</td>
                                                <td>2012/12/11</td>
                                                <td>88%</td>
                                            </tr>
                                            <tr>
                                                <td>Caleb Livingston</td>
                                                <td>3094</td>
                                                <td>Fatehpur</td>
                                                <td>2014/13/02</td>
                                                <td>8%</td>
                                            </tr>
                                            <tr>
                                                <td>Sydney Meyer</td>
                                                <td>4576</td>
                                                <td>Neubrandenburg</td>
                                                <td>2015/06/02</td>
                                                <td>22%</td>
                                            </tr>
                                            <tr>
                                                <td>Lani Lawrence</td>
                                                <td>8501</td>
                                                <td>Turnhout</td>
                                                <td>2008/07/05</td>
                                                <td>16%</td>
                                            </tr>
                                            <tr>
                                                <td>Allegra Shepherd</td>
                                                <td>2576</td>
                                                <td>Meeuwen-Gruitrode</td>
                                                <td>2004/19/04</td>
                                                <td>41%</td>
                                            </tr>
                                            <tr>
                                                <td>Fallon Reyes</td>
                                                <td>3178</td>
                                                <td>Monceau-sur-Sambre</td>
                                                <td>2005/15/02</td>
                                                <td>16%</td>
                                            </tr>
                                            <tr>
                                                <td>Karen Whitley</td>
                                                <td>4357</td>
                                                <td>Sluis</td>
                                                <td>2003/02/05</td>
                                                <td>23%</td>
                                            </tr>
                                            <tr>
                                                <td>Stewart Stephenson</td>
                                                <td>5350</td>
                                                <td>Villa Faraldi</td>
                                                <td>2003/05/07</td>
                                                <td>65%</td>
                                            </tr>
                                            <tr>
                                                <td>Ursula Reynolds</td>
                                                <td>7544</td>
                                                <td>Southampton</td>
                                                <td>1999/16/12</td>
                                                <td>61%</td>
                                            </tr>
                                            <tr>
                                                <td>Adrienne Winters</td>
                                                <td>4425</td>
                                                <td>Laguna Blanca</td>
                                                <td>2014/15/09</td>
                                                <td>24%</td>
                                            </tr>
                                            <tr>
                                                <td>Francesca Brock</td>
                                                <td>1337</td>
                                                <td>Oban</td>
                                                <td>2000/12/06</td>
                                                <td>90%</td>
                                            </tr>
                                            <tr>
                                                <td>Ursa Davenport</td>
                                                <td>7629</td>
                                                <td>New Plymouth</td>
                                                <td>2013/27/06</td>
                                                <td>37%</td>
                                            </tr>
                                            <tr>
                                                <td>Mark Brock</td>
                                                <td>3310</td>
                                                <td>Veenendaal</td>
                                                <td>2006/08/09</td>
                                                <td>41%</td>
                                            </tr>
                                            <tr>
                                                <td>Dale Rush</td>
                                                <td>5050</td>
                                                <td>Chicoutimi</td>
                                                <td>2000/27/03</td>
                                                <td>2%</td>
                                            </tr>
                                            <tr>
                                                <td>Shellie Murphy</td>
                                                <td>3845</td>
                                                <td>Marlborough</td>
                                                <td>2013/13/11</td>
                                                <td>72%</td>
                                            </tr>
                                            <tr>
                                                <td>Porter Nicholson</td>
                                                <td>4539</td>
                                                <td>Bismil</td>
                                                <td>2012/22/10</td>
                                                <td>23%</td>
                                            </tr>
                                            <tr>
                                                <td>Oliver Huber</td>
                                                <td>1265</td>
                                                <td>Hannche</td>
                                                <td>2002/11/01</td>
                                                <td>94%</td>
                                            </tr>
                                            <tr>
                                                <td>Calista Maynard</td>
                                                <td>3315</td>
                                                <td>Pozzuolo del Friuli</td>
                                                <td>2006/23/03</td>
                                                <td>5%</td>
                                            </tr>
                                            <tr>
                                                <td>Lois Vargas</td>
                                                <td>6825</td>
                                                <td>Cumberland</td>
                                                <td>1999/25/04</td>
                                                <td>50%</td>
                                            </tr>
                                            <tr>
                                                <td>Hermione Dickson</td>
                                                <td>2785</td>
                                                <td>Woodstock</td>
                                                <td>2001/22/03</td>
                                                <td>2%</td>
                                            </tr>
                                            <tr>
                                                <td>Dalton Jennings</td>
                                                <td>5416</td>
                                                <td>Dudzele</td>
                                                <td>2015/09/02</td>
                                                <td>74%</td>
                                            </tr>
                                            <tr>
                                                <td>Cathleen Kramer</td>
                                                <td>3380</td>
                                                <td>Crowsnest Pass</td>
                                                <td>2012/27/07</td>
                                                <td>53%</td>
                                            </tr>
                                            <tr>
                                                <td>Zachery Morgan</td>
                                                <td>6730</td>
                                                <td>Collines-de-l'Outaouais</td>
                                                <td>2006/04/09</td>
                                                <td>51%</td>
                                            </tr>
                                            <tr>
                                                <td>Yoko Freeman</td>
                                                <td>4077</td>
                                                <td>Lidköping</td>
                                                <td>2002/27/12</td>
                                                <td>48%</td>
                                            </tr>
                                            <tr>
                                                <td>Chaim Waller</td>
                                                <td>4240</td>
                                                <td>North Shore</td>
                                                <td>2010/25/07</td>
                                                <td>25%</td>
                                            </tr>
                                            <tr>
                                                <td>Berk Johnston</td>
                                                <td>4532</td>
                                                <td>Vergnies</td>
                                                <td>2016/23/02</td>
                                                <td>93%</td>
                                            </tr>
                                            <tr>
                                                <td>Tad Munoz</td>
                                                <td>2902</td>
                                                <td>Saint-Nazaire</td>
                                                <td>2010/09/05</td>
                                                <td>65%</td>
                                            </tr>
                                            <tr>
                                                <td>Vivien Dominguez</td>
                                                <td>5653</td>
                                                <td>Bargagli</td>
                                                <td>2001/09/01</td>
                                                <td>86%</td>
                                            </tr>
                                            <tr>
                                                <td>Carissa Lara</td>
                                                <td>3241</td>
                                                <td>Sherborne</td>
                                                <td>2015/07/12</td>
                                                <td>72%</td>
                                            </tr>
                                            <tr>
                                                <td>Hammett Gordon</td>
                                                <td>8101</td>
                                                <td>Wah</td>
                                                <td>1998/06/09</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td>Walker Nixon</td>
                                                <td>6901</td>
                                                <td>Metz</td>
                                                <td>2011/12/11</td>
                                                <td>41%</td>
                                            </tr>
                                            <tr>
                                                <td>Nathan Espinoza</td>
                                                <td>5956</td>
                                                <td>Strathcona County</td>
                                                <td>2002/25/01</td>
                                                <td>47%</td>
                                            </tr>
                                            <tr>
                                                <td>Kelly Cameron</td>
                                                <td>4836</td>
                                                <td>Fontaine-Valmont</td>
                                                <td>1999/02/07</td>
                                                <td>24%</td>
                                            </tr>
                                            <tr>
                                                <td>Kyra Moses</td>
                                                <td>3796</td>
                                                <td>Quenast</td>
                                                <td>1998/07/07</td>
                                                <td>68%</td>
                                            </tr>
                                            <tr>
                                                <td>Grace Bishop</td>
                                                <td>8340</td>
                                                <td>Rodez</td>
                                                <td>2012/02/10</td>
                                                <td>4%</td>
                                            </tr>
                                            <tr>
                                                <td>Haviva Hernandez</td>
                                                <td>8136</td>
                                                <td>Suwałki</td>
                                                <td>2000/30/01</td>
                                                <td>16%</td>
                                            </tr>
                                            <tr>
                                                <td>Alisa Horn</td>
                                                <td>9853</td>
                                                <td>Ucluelet</td>
                                                <td>2007/01/11</td>
                                                <td>39%</td>
                                            </tr>
                                            <tr>
                                                <td>Zelenia Roman</td>
                                                <td>7516</td>
                                                <td>Redwater</td>
                                                <td>2012/03/03</td>
                                                <td>31%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>    
                            
                            
                            
                    </div>
                </main>
                <!-- Footer-->
                <!-- Min-height is set inline to match the height of the drawer footer-->
                <footer class="py-4 mt-auto border-top" style="min-height: 74px">
                    <div class="container-xl px-5">
                        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between small">
                            <div class="me-sm-2">Copyright &copy; Your Website 2023</div>
                            <div class="d-flex ms-sm-2">
                                <a class="text-decoration-none" href="#!">Privacy Policy</a>
                                <div class="mx-1">&middot;</div>
                                <a class="text-decoration-none" href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <!-- Load Bootstrap JS bundle-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <!-- Load global scripts-->
        <script type="module" src="js/material.js"></script>
        <script src="js/scripts.js"></script>
    </body>
    </>
  );
};

export default Dashboard;