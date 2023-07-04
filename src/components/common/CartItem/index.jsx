import { Link, useParams } from 'react-router-dom';

import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

import MediaContainer from '../MediaContainer';

import { formatPrice } from 'helpers/format';
import { addIndividualItemPrice } from 'helpers/item';

import styles from './index.module.scss';

const CartItem = ({
  productId,
  variantId,
  skuId,
  model,
  type,
  color,
  size,
  price,
  slug,
  quantity,
  image,
  closeCartModal,
  addItem,
  removeItem,
  deleteItem,
  isLoading,
}) => {
  const { id: urlId } = useParams();

  const handleAddItem = () => {
    if (!isLoading) {
      addItem({
        productId,
        variantId,
        skuId,
        size,
        model,
        type,
        color,
        price,
        slug,
        image,
      });
    }
  };

  const handleRemoveItem = () => {
    if (!isLoading) {
      removeItem(productId, skuId);
    }
  };

  const handleDeleteItem = () => {
    if (!isLoading) {
      deleteItem(skuId);
    }
  };

  // TODO: update this. Search for "pending..." in vs search
  const clearProduct = urlId === slug && '/productos';

  return (
    <div className={styles.card}>
      <Link
        to={`/products/${slug}`}
        state={clearProduct}
        onClick={closeCartModal}
      >
        <div className={styles.info_container}>
          <div className={styles.info_wrapper}>
            <p className={styles.title}>{`${type} ${model}`}</p>
            <p className={styles.color}>{color}</p>
            <p className={styles.size}>{size.toUpperCase()}</p>
            <p className={styles.price}>${formatPrice(price)}</p>
          </div>
          <MediaContainer
            image={image}
            alt=""
            containerClassName={styles.image_container}
            fillClassName={styles.image_fill}
            mediaClassName={styles.image}
          />
        </div>
      </Link>

      <div className={styles.controls_wrapper}>
        <div className={styles.delete_wrapper}>
          <i className={styles.delete_icon} onClick={handleDeleteItem}>
            <FaTrash />
          </i>
        </div>
        <div className={styles.quantity_wrapper}>
          <i className={styles.minus_icon} onClick={handleRemoveItem}>
            <FaMinus />
          </i>
          <div className={styles.quantity}>{quantity}</div>
          <i className={styles.plus_icon} onClick={handleAddItem}>
            <FaPlus />
          </i>
        </div>
        <div className={styles.total}>
          ${addIndividualItemPrice({ price, quantity })}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
