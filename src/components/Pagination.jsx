
function Pagination() {
    return (
        <div className='center'>
        <div className='pagination'>
          <a href='#' className='next'>
            &laquo;
          </a>
          <a href='#' className='active'>
            1
          </a>
          <a href='#'>2</a>
          <a href='#'>3</a>
          <a href='#'>4</a>
          <a href='#'>...</a>
          <a href='#'>11</a>
          <a href='#' className='next'>
            &raquo;
          </a>
        </div>
      </div>
    );
  }
  
  export default Pagination;