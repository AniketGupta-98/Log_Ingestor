'use client';

import { useState } from 'react';

export default function CreateLogModal({ onClose, onCreated }: any) {
    const [form, setForm] = useState({
        level: '',
        message: '',
        resourceId: '',
        traceId: '',
        spanId: '',
        commit: '',
        parentResourceId: '',
    });

    const update = (e: any) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async () => {
        await fetch('http://localhost:3000/logs/insert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                level: form.level,
                message: form.message,
                resourceId: form.resourceId,
                timeStamp: new Date().toISOString(),
                traceId: form.traceId,
                spanId: form.spanId,
                commit: form.commit,
                metadata: {
                    parentResourceId: form.parentResourceId,
                },
            }),
        });

        onCreated();
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 relative animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-slate-800">
                        Create Log
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 text-xl"
                    >
                        ✕
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <Input label="Level" name="level" onChange={update} />
                    <Input label="Message" name="message" onChange={update} />
                    <Input label="Resource ID" name="resourceId" onChange={update} />
                    <Input label="Trace ID" name="traceId" onChange={update} />
                    <Input label="Span ID" name="spanId" onChange={update} />
                    <Input label="Commit" name="commit" onChange={update} />
                    <Input
                        label="Parent Resource ID"
                        name="parentResourceId"
                        onChange={update}
                        className="md:col-span-2"
                    />
                </div>
                <div className="flex justify-end gap-4 mt-8">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={submit}
                        className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 active:scale-95 transition-all duration-200"
                    >
                        Save Log
                    </button>
                </div>
            </div>
        </div>
    );
}

function Input({ label, name, onChange, className = '' }: any) {
    return (
        <div className={className}>
            <label className="block text-sm font-medium text-slate-600 mb-1">
                {label}
            </label>
            <input
                name={name}
                onChange={onChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
        </div>
    );
}
