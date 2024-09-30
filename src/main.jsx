import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageTeam from "./components/ManageTeam/ManageTeam.jsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.jsx";
import InvoicesBalances from "./components/InvoicesBalances/InvoicesBalances.jsx";
import ProfileForm from "./components/ProfileForm/ProfileForm.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import FaqPage from "./components/FaqPage/FaqPage.jsx";
import LineChart from "./components/LineChart/LineChart.jsx";
import GeographyChart from "./components/GeographyChart/GeographyChart.jsx";
import BarChart from "./components/BarChart/BarChart.jsx";
import PieChart from "./components/PieChart/PieChart.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="manageTeam" element={<ManageTeam />} />
      <Route path="contactInfo" element={<ContactInfo />} />
      <Route path="invoicesBalances" element={<InvoicesBalances />} />
      <Route path="profileForm" element={<ProfileForm />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faqPage" element={<FaqPage />} />
      <Route path="barChart" element={<BarChart />} />
      <Route path="pieChart" element={<PieChart />} />
      <Route path="lineChart" element={<LineChart />} />
      <Route path="geographyChart" element={<GeographyChart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
