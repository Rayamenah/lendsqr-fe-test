"use client"
import React, { useState } from "react";
import "../styles/table.scss"
type User = {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
};

const sampleUsers: User[] = Array(50).fill(0).map((_, index) => ({
    organization: `Organization ${index + 1}`,
    username: `User${index + 1}`,
    email: `user${index + 1}@example.com`,
    phoneNumber: `0801234567${index}`,
    dateJoined: `2023-10-${(index % 30) + 1}`,
    status: index % 2 === 0 ? "Active" : "Inactive",
}));

const TableComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 9;
    const totalPages = Math.ceil(sampleUsers.length / rowsPerPage);

    const currentUsers = sampleUsers.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                Organization
                                <img src='/filter.svg' className="filter-icon" />
                            </th>
                            <th>
                                Username
                                <img src='/filter.svg' className="filter-icon" />
                            </th>
                            <th>
                                Email
                                <img src='/filter.svg' className="filter-icon" />
                            </th>
                            <th>
                                Phone Number
                                <img src='/filter.svg' className="filter-icon" />
                            </th>
                            <th>
                                Date Joined
                                <img src='/filter.svg' className="filter-icon" />
                            </th>
                            <th>
                                Status
                                <img src='/filter.svg' className="filter-icon" />
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.organization}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.dateJoined}</td>
                                <td><div>{user.status}</div></td>
                                <td><img src='/action_button.svg
                            ' /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <div className="page-count">
                    <div className="showing">Showing</div>
                    <div className="number">
                        <span>{'9'}</span>
                        <img src='/paginate-chevron.svg' />
                    </div>
                    <div className="">out of {500}</div>
                </div>
                <div className="paginate-buttons">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>

            </div>
        </>
    );
};

export default TableComponent;
