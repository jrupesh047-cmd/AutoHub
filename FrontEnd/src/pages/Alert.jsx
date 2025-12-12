import Pagination from "../components/ui/Pagination";

const Alert = () => {
  const date = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="text-2xl font-semibold p-4">Alert</div>

      <div className="flex justify-start items-center gap-4 bg-white shadow-lg rounded-lg p-2">
        <input type="date" defaultValue={date} />

        <select>
          <option value="Alert">Alert</option>
          <option value="EPF">EPF ALERT</option>
          <option value="NDD">NO DEVICE DATA</option>
          <option value="CONTINUOUS DRIVING">CONTINUOUS DRIVING</option>
          <option value="CRITICAL ALERT">CRITICAL ALERT</option>
          <option value="PANIC ALERT">PANIC ALERT</option>
          <option value="CONTINUOUS IDLING > 8 HRS">
            CONTINUOUS IDLING More 8 HRS
          </option>
          <option value="ETA DELAY">ETA DELAY</option>
          <option value="EXCEEDED LEAD DAYS">EXCEEDED LEAD DAYS</option>
        </select>

        <select>
          <option value="Plant Name">Plant Name</option>
          <option value="Vilayat">Vilayat</option>
          <option value="Nagda">Nagda</option>
          <option value="Kharach">Kharach</option>
          <option value="Harihar">Harihar</option>
        </select>

        <input type="text" placeholder="Search Alert" />

        <button>Clear</button>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th>Sr No</th>
              <th>Alert Name</th>
              <th>Vehicle No</th>
              <th>Driver Name</th>
              <th>Transporter</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <Pagination />
      </div>
    </>
  );
};

export default Alert;
