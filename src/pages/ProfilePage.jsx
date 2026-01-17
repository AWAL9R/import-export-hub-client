import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { FaUserEdit, FaSave, FaTimes } from "react-icons/fa";

export default function ProfilePage() {
    const auth = getAuth();
    const user = auth.currentUser;

    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const saveProfile = async (e) => {
        e.preventDefault();
        if (loading) return;
        try {
            setLoading(true);
            await updateProfile(user, {
                displayName: name,
                photoURL: photo,
            });
            setEdit(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-base-100 rounded-2xl shadow-lg w-full max-w-md p-6">
                {/* Header */}
                <form onSubmit={saveProfile} className="mt-6 space-y-3">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-primary">My Profile</h2>

                        {!edit ? (
                            <button type='button' onClick={() => setEdit(true)} className="text-blue-600">
                                <FaUserEdit />
                            </button>
                        ) : (
                            <button type='button' onClick={() => setEdit(false)} className="text-gray-500">
                                <FaTimes />
                            </button>
                        )}
                    </div>

                    {/* Avatar */}
                    <div className="flex flex-col items-center gap-3">
                        <img
                            src={photo || "https://i.pravatar.cc/150"}
                            className="w-24 h-24 rounded-full border"
                        />

                        {edit && (
                            <input
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />
                        )}
                    </div>

                    {/* Info */}
                    <div className="mt-5 space-y-3">
                        <div>
                            <label className="text-sm text-gray-500">Name</label>
                            {edit ? (
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input input-bordered w-full"
                                />
                            ) : (
                                <p className="font-medium text-primary">{user?.displayName}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm text-gray-500">Email</label>
                            <p className="font-medium text-primary">{user?.email}</p>
                        </div>
                    </div>

                    {/* Actions */}
                    {edit && (
                        <button
                            onClick={saveProfile}
                            className="btn btn-primary w-full mt-6 flex gap-2"
                            disabled={loading}
                        >
                            <FaSave /> {loading ? "Saving..." : "Save Changes"}
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
