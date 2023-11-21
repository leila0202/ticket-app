const StatusDisplay = ({ status }) => {
  let statusColor = "";
  console.log(status);
  switch (status) {
    case "done":
      statusColor = "bg-green-200";
      break;
    case "started":
      statusColor = "bg-yellow-400";
      break;
    case "not started":
      statusColor = "bg-red-200";
      break;
    default:
      statusColor = "bg-slate-700";
      break;
  }
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${statusColor}`}
    >
      {status}
    </span>
  );
};
export default StatusDisplay;
