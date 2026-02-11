export default function LogsTable({ logs }: any) {
    const levelStyles = (level?: string) => {
        switch (level?.toLowerCase()) {
            case "error":
                return "bg-red-100 text-red-700 border-red-200";
            case "warn":
            case "warning":
                return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case "info":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "debug":
                return "bg-purple-100 text-purple-700 border-purple-200";
            default:
                return "bg-gray-100 text-gray-600 border-gray-200";
        }
    };

    return (
        <div className="w-full p-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="overflow-x-auto max-h-[600px]">
                    <table className="min-w-full text-sm text-gray-700">
                        <thead className="sticky top-0 bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                            <tr>
                                <th className="px-6 py-4 text-left">Level</th>
                                <th className="px-6 py-4 text-left">Message</th>
                                <th className="px-6 py-4 text-left">Resource</th>
                                <th className="px-6 py-4 text-left">Timestamp</th>
                                <th className="px-6 py-4 text-left">Trace ID</th>
                            </tr>
                        </thead>


                        <tbody className="divide-y divide-gray-100">
                            {logs.map((log: any, index: number) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors duration-200 even:bg-gray-50/40"
                                >
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${levelStyles(
                                                log.level
                                            )}`}
                                        >
                                            {log.level || "N/A"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 font-medium text-gray-900 max-w-xs truncate">
                                        {log.message || "N/A"}
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">
                                        {log.resourceId || "N/A"}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                                        {log.timeStamp
                                            ? new Date(log.timeStamp).toLocaleString()
                                            : "N/A"}
                                    </td>

                                    <td className="px-6 py-4 text-gray-400 text-xs">
                                        {log.traceId || "N/A"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {logs.length === 0 && (
                        <div className="text-center py-10 text-gray-400 text-sm">
                            No logs available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
