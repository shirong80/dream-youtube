import React, { useEffect } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type TRouteParams = {
  keyword: string;
};
type TSearchForm = {
  text: string;
};

function SearchHeader() {
  const { keyword } = useParams<TRouteParams>();
  const { register, setValue, handleSubmit } = useForm<TSearchForm>();
  const navigate = useNavigate();
  const onValid = ({ text }: TSearchForm) => {
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setValue('text', keyword || '');
  }, [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-cent">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit(onValid)}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          {...register('text', { required: true })}
          type="text"
          placeholder="Search..."
          autoComplete="off"
        />
        <button type="submit" className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
