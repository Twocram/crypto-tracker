import React from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return (
    <>
      {props.items.length > 0 ? (
        <div className='flex flex-col'>{props.items.map(props.renderItem)}</div>
      ) : (
        <div className='flex justify-center mt-[50px] text-2xl'>No results</div>
      )}
    </>
  );
}
