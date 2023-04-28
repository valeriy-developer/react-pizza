import ReactPaginate from 'react-paginate'

const Pagination = ({ onChangePage, totalPages, limit }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={limit}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
