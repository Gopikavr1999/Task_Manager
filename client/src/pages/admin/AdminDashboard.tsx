import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopbar from "../../components/admin/AdminTopbar";

const AdminDashboard = () => {
    return (
        <div className="flex">
            <AdminSidebar />

            <div className="flex-1">
                <AdminTopbar />

                <div className="p-6 space-y-6">
                    <h2 className="text-2xl font-semibold">Dashboard Overview</h2>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="p-6 bg-white shadow rounded-lg">
                            Total Users
                        </div>
                        <div className="p-6 bg-white shadow rounded-lg">
                            Total Tasks
                        </div>
                        <div className="p-6 bg-white shadow rounded-lg">
                            Completed Tasks
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminDashboard;
