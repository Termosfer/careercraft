import React from "react";
import PublicLayout from "../layout/PublicLayout";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/login/Register";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Solution from "../pages/Solution/Solution";
import Login from "../pages/login/Login";
import FreeTrial from "../pages/BookaDemo/FreeTrial";
import Profile from "../pages/Profile/Profile";
import ResetPass from "../pages/ResetPass/ResetPass";
import FreeTest from "../pages/FreeTest/FreeTest";
import TestResult from "../components/testResult/TestResult";
import HardSkillTestResult from "../components/hardSkillTestResult/HardSkillTestResult";
import TestResultsOne from "../pages/TestResultsOne/TestResultsOne";
import Packages from "../pages/Packages/Packages";
import TestResultsTwo from "../pages/TestResultsTwo/TestResultsTwo";
import UserProfile from "../pages/UserProfile/UserProfile";
import ErrorNotFound from "../pages/Error/ErrorNotFound";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <UserProfile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/password/reset" element={<ResetPass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/freetest" element={<FreeTest />} />
        <Route path="/freetest/test-result" element={<TestResult />} />
        <Route
          path="/freetest/test-result/testresultsone"
          element={<TestResultsOne />}
        />
        <Route
          path="/freetest/hard-skill-test-result"
          element={<HardSkillTestResult />}
        />
        <Route
          path="/freetest/hard-skill-test-result/testresultstwo"
          element={<TestResultsTwo />}
        />
        <Route path="*" element={<ErrorNotFound />}></Route>
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
