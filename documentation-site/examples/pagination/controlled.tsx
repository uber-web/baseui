import * as React from 'react';
import {Pagination} from 'spaceweb/pagination';

export default function Basic() {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      numPages={20}
      currentPage={currentPage}
      onPageChange={({nextPage}) => {
        setCurrentPage(Math.min(Math.max(nextPage, 1), 20));
      }}
    />
  );
}
