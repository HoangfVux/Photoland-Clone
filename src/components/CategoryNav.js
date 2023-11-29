import React from 'react';

//useFetch
import useFetch from '../hooks/useFetch';

// link
import { Link } from 'react-router-dom';
import { computeHeadingLevel } from '@testing-library/react';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  return (
    <aside className='hidden xl:flex'>
      <div className='bg-primary flex flex-col w-[286px] h-[500px] '>
        <div className='bg-accent py-4 rounded-t-lg text-primary uppercase font-semibold flex items-center justify-center '>Browse Categories</div>
        <div className='flex flex-col gap-y-6 p-6'>
          {data?.map((category) => {
            return (
              <Link
                to={'/products/${category.id}'}
                key={category.id}
                className='cursor-pointer uppercase'
              >
                {category.attributes.title}
              </Link>
            )
          })}
        </div>
      </div>
    </aside>
  )
};

export default CategoryNav;
