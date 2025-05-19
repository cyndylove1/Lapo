import "./App.css";
import Branches from "./pages/branches";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./pages/layout/dashboardLayout";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Roles from "./pages/roles";
import CreateRole from "./pages/createRole";
import Users from "./pages/users";
import CardScheme from "./pages/cardScheme";
import CardProfile from "./pages/cardProfile";
import CreateProfile from "./pages/createProfile";
import CardRequest from "./pages/cardRequest";
import RequestDetails from "./pages/requestDetails";
import Stock from "./pages/stock";
import BlockCards from "./pages/BlockCards";
import GeneratePin from "./pages/generatePin";
import CardSection from "./pages/cardSection";
import ComplaintLog from "./pages/complaintLog";
import ComplaintLogDetails from "./pages/complaintLogDetails";
import ComplaintResolved from "./pages/complaintResolved";
import ComplaintResolvedDetails from "./pages/complaintResolvedDetails";
import AuthorizationList from "./pages/AuthorizationList";
import AuthorizationQueue from "./pages/AuthorizationQueue";
import Trail from "./pages/trail";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/create" element={<CreateRole />} />
          <Route path="/users" element={<Users />} />
          <Route path="/card-scheme" element={<CardScheme />} />
          <Route path="/profile" element={<CardProfile />} />
          <Route path="/profile/create-profile" element={<CreateProfile />} />
          <Route path="/request" element={<CardRequest />} />
          <Route path="/request/view" element={<RequestDetails />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/block-cards" element={<BlockCards />} />
          <Route path="/generate-pin" element={<GeneratePin />} />
          <Route path="/cards" element={<CardSection />} />
          <Route path="/complaint-log" element={<ComplaintLog />} />
          <Route path="/complaint-log/details" element={<ComplaintLogDetails />} />
          <Route path="/complaint-resolve" element={<ComplaintResolved />} />
          <Route path="/complaint-resolve/details" element={<ComplaintResolvedDetails />} />
          <Route path="/authorization-list" element={<AuthorizationList />} />
          <Route path="/authorization-queue" element={<AuthorizationQueue />} />
          <Route path="/trail" element={<Trail/>} />
          <Route path="/account" element={<Account/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
