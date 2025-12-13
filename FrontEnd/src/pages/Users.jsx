import Pagination from "../components/ui/Pagination";
const Users = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="text-2xl font-semibold p-4">Users</div>
      <div className="flex flex-row items-center gap-4 bg-white rounded-lg p-4 h-6 ">
        <input type="text" placeholder="Search User" />
        <select>
          <option value="All Roles">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Transporter">Transporter</option>
          <option value="Driver">Driver</option>
        </select>
        <select>
          <option value="All All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
        <button>Clear</button>
        <button>Search</button>
      </div>
      <div className="overflow-x-auto p-4 ">
        <table className="w-full">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default Users;
