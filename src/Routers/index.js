import { Route, Routes } from "react-router-dom";
import Attendance from "../Screens/Auth/AttendanceLogs";
import AuthGuard from "../Config/AuthGuard";
const PageRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<AuthGuard Component={Attendance} />} />
    </Routes>
  );
}
export default PageRouter