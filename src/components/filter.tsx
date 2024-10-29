import React, { useState } from "react";
import "../styles/filter.scss";

interface FilterProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFilter: (filters: any) => void;
    onClose: () => void; // Function to close the filter component
}

const FilterComponent: React.FC<FilterProps> = ({ onFilter, onClose }) => {
    const [filters, setFilters] = useState({
        organization: "",
        username: "",
        email: "",
        phoneNumber: "",
        dateJoined: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleFilter = () => {
        onFilter(filters);
    };

    return (
        <div className="filter-container">
            {/* <div className="filter-header">
                <button onClick={onClose}>X</button>
            </div> */}
            <div className="filter-fields">
                <div className="filter-field">
                    <label>Organization</label>
                    <input name="organization" value={filters.organization} onChange={handleChange} />
                </div>
                <div className="filter-field">
                    <label>Username</label>
                    <input name="username" value={filters.username} onChange={handleChange} />
                </div>
                <div className="filter-field">
                    <label>Email</label>
                    <input name="email" value={filters.email} onChange={handleChange} />
                </div>
                <div className="filter-field">
                    <label>Phone Number</label>
                    <input name="phoneNumber" value={filters.phoneNumber} onChange={handleChange} />
                </div>
                <div className="filter-field">
                    <label>Date Joined</label>
                    <input type="date" name="dateJoined" value={filters.dateJoined} onChange={handleChange} />
                </div>
                <div className="filter-field">
                    <label>Status</label>
                    <select name="status" value={filters.status} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Inactive">Pending</option>
                        <option value="Blacklisted">Blacklisted</option>
                    </select>
                </div>
                <div className="filter-actions">
                    <button onClick={onClose}>Reset</button>
                    <button onClick={handleFilter}>Filter</button>

                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
