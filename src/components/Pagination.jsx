import ReactPaginate from 'react-paginate'

const Pagination = ({ onChangePage, totalPages, limit, currentPage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={limit}
      pageCount={totalPages}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
