import Pagination from "../components/ui/Pagination";

const Trips = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-2xl font-semibold p-4">Trips</div>

      <div className="flex justify-start gap-4 items-center p-4 rounded-lg w-full bg-white">
        <label>From</label>
        <input type="date" />

        <label>To</label>
        <input type="date" />

        <input type="text" placeholder="Vehicle Number" />

        <select>
          <option>Transporter1</option>
          <option>Transporter2</option>
          <option>Transporter3</option>
        </select>

        <select>
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </select>

        <button>Clear</button>
        <button>Search</button>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>Trip ID</th>
              <th>Vehicle No</th>
              <th>Driver Name</th>
              <th>Transporter</th>
              <th>Start Time</th>
              <th>End Time</th>
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

export default Trips;
