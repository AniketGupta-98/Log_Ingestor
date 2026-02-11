'use client';

import { useState } from "react";

export default function Filters({ onSearch }: any) {
    const [filters, setFilters] = useState<any>({});

    const update = (e: any) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full flex justify-center  bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-8 border border-slate-200">

                <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                    Log Filters
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Level
                        </label>
                        <input
                            name="level"
                            placeholder="e.g. ERROR"
                            onChange={update}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Message
                        </label>
                        <input
                            name="message"
                            placeholder="Search message..."
                            onChange={update}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Resource ID
                        </label>
                        <input
                            name="resourceId"
                            placeholder="Resource ID"
                            onChange={update}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Trace ID
                        </label>
                        <input
                            name="traceId"
                            placeholder="Trace ID"
                            onChange={update}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            Start Time
                        </label>
                        <input
                            name="startTime"
                            type="datetime-local"
                            onChange={update}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">
                            End Time
                        </label>
                        <input
                            name="endTime"
                            type="datetime-local"
                            onChange={update}
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => onSearch(filters)}
                        className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 active:scale-95 transition-all duration-200"
                    >
                        Search
                    </button>
                </div>

            </div>
        </div>
    );
}
