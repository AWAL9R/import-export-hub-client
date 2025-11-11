// Modal.jsx
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div >
      <div className="fixed inset-0 min-h-screen  flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(107,114,128,0.6)' }} onClick={onClose}>
        <div className="bg-base-100 rounded shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative px-6 py-3 transition-all mx-4" onClick={(e) => { e.stopPropagation(); }}>
          <button
            onClick={onClose}
            className="sticky left-full top-2  text-gray-500 hover:text-gray-800"
          >✕</button>
          <div className="mt-7 pb-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
