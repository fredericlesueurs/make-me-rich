import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { AccountsLayout } from "./components/admin/accounts/AccountsLayout";

import AdminLayout from "./components/admin/AdminLayout";
import Account from "./pages/admin/accounts/Account";
import AccountIndex from "./pages/admin/accounts/AccountIndex";
import CreateAccount from "./pages/admin/accounts/CreateAccount";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />}/>
          <Route path="accounts" element={<AccountsLayout />}>
            <Route index element={<AccountIndex />} />
            <Route path="create" element={<CreateAccount />} />
            <Route path=":accountId" element={<Account />} />  
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
};

export default App;
