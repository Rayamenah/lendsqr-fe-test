"use client"
import React, { useState } from "react";
import "../styles/table.scss";
import Pagination from "./pagination";
import { users } from "@/utils/users.db";
import { format } from "date-fns";
import FilterComponent from "./filter";

const Table = () => {
    const [sampleUsers, setSampleUsers] = useState(users);
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState<number | null>(null); // Track which user's action button was clicked
    const rowsPerPage = 9;
    const totalPages = Math.ceil(users.length / rowsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const currentUsers = users.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFilter = (filters: any) => {
        const filteredUsers = sampleUsers.filter((user) => {
            return (
                (filters.organization === "" || user.organization.includes(filters.organization)) &&
                (filters.username === "" || user.name.includes(filters.name)) &&
                (filters.email === "" || user.email.includes(filters.email)) &&
                (filters.phoneNumber === "" || user.phone.includes(filters.phone)) &&
                (filters.dateJoined === "" || user.date_joined === filters.date_joined) &&
                (filters.status === "" || user.status === filters.status)
            );
        });
        setSampleUsers(filteredUsers);
        setShowFilter(false); // Hide filter after applying
    };

    const handleActionClick = (index: number) => {
        setShowModal(index); // Show modal for the clicked user
    };

    const closeModal = () => {
        setShowModal(null); // Close the modal
    };

    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {/* Table Headers */}
                            <th>
                                <div className="table-heading">
                                    <span>Organization</span>
                                    <span><button onClick={() => setShowFilter(!showFilter)}><img src='/filter.svg' className="filter-icon" /></button></span>
                                </div>
                            </th>
                            <th>
                                <div className="table-heading">
                                    <span>Username</span>
                                    <span><button onClick={() => setShowFilter(!showFilter)}><img src='/filter.svg' className="filter-icon" /></button></span>
                                </div>
                            </th>
                            <th>
                                <div className="table-heading">
                                    <span>Email</span>
                                    <span><button onClick={() => setShowFilter(!showFilter)}><img src='/filter.svg' className="filter-icon" /></button></span>
                                </div>
                            </th>
                            <th>
                                <div className="table-heading">
                                    <span>Phone Number</span>
                                    <span><button onClick={() => setShowFilter(!showFilter)}><img src='/filter.svg' className="filter-icon" /></button></span>
                                </div>
                            </th>
                            <th>
                                <div className="table-heading">
                                    <span>Date Joined</span>
                                    <span><button onClick={() => setShowFilter(!showFilter)}><img src='/filter.svg' className="filter-icon" /></button></span>
                                </div>
                            </th>
                            <th>
                                <div className="table-heading">
                                    <span>Status</span>
                                    <span><button onClick={() => setShowFilter(!showFilter)}><img src='/filter.svg' className="filter-icon" /></button></span>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.organization}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{format(new Date(user.date_joined), 'MMM dd yyyy, hh:mma')}</td>
                                <td>
                                    <div className={`status ${user.status.toLowerCase()}`}>
                                        {user.status}
                                    </div>
                                </td>
                                <td>
                                    <img
                                        src='/action_button.svg'
                                        onClick={() => handleActionClick(index)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {/* Show modal when an action button is clicked */}
                                    {showModal === index && (
                                        <div className="modal">
                                            <ul>
                                                <li onClick={closeModal}><img src='/view_details.svg' />View Details</li>
                                                <li onClick={closeModal}><img src='/blacklist_user.svg' />Activate User</li>
                                                <li onClick={closeModal}><img src='/activate_user.svg' />Blacklist User</li>
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showFilter && (
                    <FilterComponent onFilter={handleFilter} onClose={() => setShowFilter(false)} />
                )}
            </div>

            <div className="pagination">
                <div className="page-count">
                    <div className="showing">Showing</div>
                    <div className="number">
                        <span>{'9'}</span>
                        <span><img src='/paginate-chevron.svg' /></span>
                    </div>
                    <div className="length">out of {users.length}</div>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default Table;
