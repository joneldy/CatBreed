import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormSelectBreed from '../components/FormSelectBreed';
import CardList from '../components/CardList';
import LoadMore from '../components/LoadMore';
import Loading from '../components/Loading';
import { CatBreedActions } from '../redux/actions';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CardContainer = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const [breedType, setBreedType] = useState(query.get('breed') || '');
  const [page, setPage] = useState(0);
  const [cardData, setCardData] = useState([]);

  const pageLimit = 10;
  const data = useSelector(({ breeds }) => breeds?.data || []);
  const isLoading = useSelector(({ breeds }) => breeds.isLoading);

  const filterBreed = (_type, currentPage, limit) => {
    dispatch(
      CatBreedActions.fetchCatBreed({
        limit,
        page: currentPage,
        breed_id: _type,
        order: 'Asc ',
      })
    );
  };

  useEffect(() => {
    // initialize the store
    if (breedType) {
      filterBreed(breedType, page, pageLimit);
    }
  }, []);

  const removeDuplicateData = (data) => {
    if (!data && data.length === 0) return cardData;
    let newData = [...data];

    if (cardData && cardData.length > 0) {
      const ids = cardData.map((item) => item.id);
      newData = data.filter(({ id }) => !ids.includes(id));
    }

    return newData;
  };

  useEffect(() => {
    // remove conflict of data due to server response
    const newData = removeDuplicateData(data);
    setCardData([...cardData, ...newData]);
  }, [data]);

  const paginationCount = useSelector(
    ({ breeds }) => breeds.paginationCount || 0
  );

  // total pages
  const totalPage = Math.ceil(Number(paginationCount) / pageLimit);

  const handleLoadMore = () => {
    const nextPage = Number(page) + 1;
    setPage(nextPage);

    dispatch(
      CatBreedActions.fetchCatBreed({
        limit: pageLimit,
        page: nextPage,
        breed_id: breedType,
      })
    );
  };

  const handleSelectBreed = (id) => {
    setCardData([]);
    setPage(0);
    filterBreed(id, 0, pageLimit);
    setBreedType(id);
  };

  const renderCards = (breedType) => {
    if (!breedType) return null;

    return (
      <>
        <CardList data={cardData} />
        {!isLoading && (
          <LoadMore totalPage={totalPage} page={page} onLoad={handleLoadMore} />
        )}
      </>
    );
  };

  return (
    <div>
      <h2>Cat Browser</h2>
      <FormSelectBreed onSelect={handleSelectBreed} breedType={breedType} />
      {renderCards(breedType)}
      {isLoading && <Loading />}
    </div>
  );
};

export default CardContainer;
