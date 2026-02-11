'use client';

import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import LogsTable from "../components/LogsTable";
import CreateLogModal from "../components/CreateLogModal";

export default function LogsPage() {
    const [logs, setLogs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const search = async (filters: any = {}) => {
        const params = new URLSearchParams(filters);
        const res = await fetch(
            `http://localhost:3000/logs/search?${params.toString()}`
        );
        setLogs(await res.json());
    };

    const handleCreated = () => {
        setShowModal(false);
        search();
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            Logs Query Interface
                        </h1>
                        <p className="text-slate-500 mt-1">
                            Search, filter, and create application logs
                        </p>
                    </div>

                    <button
                        onClick={() => setShowModal(true)}
                        className="mt-4 md:mt-0 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition-all duration-200"
                    >
                        + Create Log
                    </button>
                </div>
                <div className="mb-8">
                    <Filters onSearch={search} />
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 border border-slate-200">
                    <LogsTable logs={logs} />
                </div>
                {showModal && (
                    <CreateLogModal
                        onClose={() => setShowModal(false)}
                        onCreated={handleCreated}
                    />
                )}
            </div>
        </div>
    );
}
