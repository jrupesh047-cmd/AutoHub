const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="text-2xl font-bold">Dashboard</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-sm rounded-lg p-4">Card1</div>
        <div className="bg-white shadow-sm rounded-lg p-4">Card2</div>
        <div className="bg-white shadow-sm rounded-lg p-4">Card3</div>
        <div className="bg-white shadow-sm rounded-lg p-4">Card4</div>
      </div>

      <div className="bg-white h-64 rounded flex justify-center items-center">
        Chart Section
      </div>
    </div>
  );
};

export default Dashboard;
