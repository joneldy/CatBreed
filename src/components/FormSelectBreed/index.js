import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesActions } from '../../redux/actions';
import './styles.scss';

const FormSelectBreed = ({ onSelect, breedType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoriesActions.fetchCategories());
  }, []);

  const categoryList = useSelector(({ categories }) => categories.data);
  const disabled = !categoryList || categoryList.length === 0;

  const renderList = (list) => {
    if (!list || list.length === 0) return null;
    return list.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  return (
    <div className="col-md-3 col-sm-6 col-12">
      <Form.Group className="mb-3">
        <Form.Label>Breed:</Form.Label>
        <Form.Select
          className="form__select_breed"
          disabled={disabled}
          value={breedType}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option>Select Breed</option>
          {renderList(categoryList)}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

FormSelectBreed.propTypes = {
  onSelect: PropTypes.func.isRequired,
  breedType: PropTypes.string.isRequired,
};

export default FormSelectBreed;
