import { useContext, useEffect, useState } from "react";
import { FaBox, FaArrowDown, FaPlus } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { SERVER_URL } from "../settings";
import Loading from "../components/Loading";
import { Link } from "react-router";

export default function DashboardPage() {
    const [stats, setStats] = useState({ products: 0, imports: 0 });
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext)

    const headers = {
        Authorization: `Bearer ${user?.accessToken}`,
    }

    useEffect(() => {
        // example: replace with real endpoints later
        Promise.all([
            fetch(SERVER_URL + "/myExports", { headers: headers }).then(r => r.json()),
            fetch(SERVER_URL + "/myImports", { headers: headers }).then(r => r.json()),
        ]).then(([products, imports]) => {
            setStats({ products: products.length, imports: imports.length });
            setLoading(false);
        });
    }, );

    if (loading) return <Loading/>

    return (
        <div className="container min-h-screen bg-base-100 p-6">
            <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    icon={<FaBox />}
                    title="Total Products"
                    value={stats.products}
                />
                <StatCard
                    icon={<FaArrowDown />}
                    title="Total Imports"
                    value={stats.imports}
                />
                <StatCard
                    icon={<FaPlus />}
                    title="Add Product"
                    href='/add/exports'
                />
            </div>

            {/* Actions */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ActionCard
                    title="Add New Product"
                    desc="Create export product"
                    href="/add/exports"
                />
                <ActionCard
                    title="Import Product"
                    desc="Reduce stock & track imports"
                    href="/all"
                />
            </div>
        </div>
    );
}

/* UI blocks */
const StatCard = ({ icon, title, value, href }) => (
    <div className="bg-base-200 rounded-2xl shadow p-6 flex items-center gap-4">
        <div className="text-2xl text-primary">{icon}</div>
        <div className="flex-1">
            <p className="text-gray-500 text-sm">{title}</p>
            {href ? (
                <Link to={href} className="btn btn-sm btn-outline mt-2">Create</Link>
            ) : (
                <h3 className="text-2xl font-bold">{value}</h3>
            )}
        </div>
    </div>
);

const ActionCard = ({ title, desc, href }) => (
    <Link
        to={href}
        className="bg-base-200 rounded-2xl shadow p-6 hover:shadow-lg transition block"
    >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </Link>
);
