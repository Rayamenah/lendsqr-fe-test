import React from 'react';
import '../styles/table.scss';  // Your SCSS file

type Props = {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void,
}
const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    const maxPageNumbers = 5;

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= maxPageNumbers) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, startPage + 2);

            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            }

            if (currentPage >= totalPages - 1) {
                startPage = totalPages - 2;
                endPage = totalPages;
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (startPage > 1) {
                pages.unshift("...");
                pages.unshift(1);
            }

            if (endPage < totalPages) {
                pages.push("...");
                pages.push(totalPages);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination-container">
            <button
                className="pagination-button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <img src='/previous-button.svg' />
            </button>
            {pageNumbers.map((page, index) => (
                <button
                    key={index}
                    className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={page === '...'}
                >
                    {page}
                </button>
            ))}
            <button
                className="pagination-button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <img src='/next-button.svg' />
            </button>
        </div>
    );
};

export default Pagination;
