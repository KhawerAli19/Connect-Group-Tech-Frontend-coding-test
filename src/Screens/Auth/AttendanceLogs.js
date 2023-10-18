import { useState, useEffect } from 'react';
import CustomTable from "./../../Components/CustomTable";
import "./style.css";
import { PageLayout } from '../../Layout/PageLayout';
import { getAll } from '../../Services/Logs/Log';


const Attendance = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = 'Backend Test';
        fetchAttendance()

    }, [])

    const fetchAttendance = async () => {
        let response = await getAll();
        if (response) {
            setData(response.attendances)
        }
    };

    const Headers = [
        {
            key: "id",
            title: "S.No",
        },
        {
            key: "name",
            title: "Name",
        },
        {
            key: "check_in",
            title: "Checkin",
        },
        {
            key: "check_out",
            title: "Checkout",
        },
        {
            key: "working_hours",
            title: "total working hours",
        },

    ];



    return (
        <>
            <PageLayout >
                <section className="attendence-logs">
                    <div className="container">
                        <div className="row my-4">
                            <div className="col-12 ">
                                <h2 className="mainTitle text-center">Attendance Logs</h2>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <div className="dashCard">
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <CustomTable
                                                headers={Headers}
                                            >
                                                <tbody>
                                                    {data.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.employee.name}</td>
                                                            <td>{item.check_in}</td>
                                                            <td>{item.check_out}</td>
                                                            <td>{item.working_hours}</td>

                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </CustomTable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </PageLayout>
        </>
    )
}


export default Attendance
