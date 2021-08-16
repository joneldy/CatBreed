import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import { CatActions } from '../redux/actions';
import { isEmpty } from '../utils';
import Details from '../components/Details';
import Loading from '../components/Loading';

const DetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(CatActions.fetchCat({ id }));
  }, [id]);

  const isLoading = useSelector(({ cat }) => cat.isLoading);
  const data = useSelector(({ cat }) => cat.data || {});

  const renderDetails = (catDetails) => {
    if (!catDetails || isEmpty(catDetails)) return null;

    const [cat] = catDetails?.breeds;
    const { url } = catDetails;
    const { name, origin, temperament, description, id } = cat;

    return (
      <Details
        image={url}
        breed={id}
        name={name}
        origin={origin}
        temperament={temperament}
        description={description}
      />
    );
  };

  if (isLoading) return <Loading className="details__page__loader" />;

  if (isEmpty(data)) {
    return <Alert variant="danger">This cat does'nt exist</Alert>;
  }

  return <Container>{renderDetails(data)}</Container>;
};

export default DetailsContainer;
