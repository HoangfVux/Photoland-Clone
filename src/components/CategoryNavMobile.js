import React from 'react';

//icons 
import { FiX } from 'react-icons/fi'
// Link
import { Link } from 'react-router-dom';
// useFetch
import useFetch from '../hooks/useFetch';


const CategoryNavMobile = ({ setCatNavMobile }) => {
  // Get categories
  const { data } = useFetch('/categories')
  return (
    <div className='w-full h-full bg-primary p-8 '>
      {/* close icon */}
      <div
        onClick={() => setCatNavMobile(false)}
        className='flex justify-end mb-8 cursor-pointer'>
        <FiX className='text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map(category => {
          return (
            <Link
              to={`products/${category.id}`}
              className='capitalize font-medium'
              key={category.id}
            >
              {category.attributes.title} Cameras
            </Link>
          )
        })}
      </div>
    </div>
  )
};

export default CategoryNavMobile;
