import VariantForm from './VariantForm';

import CenterModal from 'components/CenterModal';

import styles from './index.module.scss';

const Variants = ({
  variants,
  sizes,
  baseSku,
  images,
  handleInventoryInput,
}) => {
  const skuSizeCode = {
    s: 'sm',
    m: 'md',
    l: 'lg',
    xl: 'xl',
    xxl: 'xx',
  };

  return (
    <>
      <CenterModal></CenterModal>
      <div className={styles.container}>
        {variants.map((variant, variantIndex) => (
          <VariantForm
            key={variant.id}
            variant={variant}
            variantIndex={variantIndex}
            baseSku={baseSku}
            images={images}
            sizes={sizes}
            handleInventoryInput={handleInventoryInput}
          />
          // <div className={styles.table_container} key={variant.id}>
          //   <p className={styles.variant_number}>Variant {variantIndex + 1}:</p>
          //   <div className={styles.table_wrapper}>
          //     <table>
          //       <thead>
          //         <tr>
          //           <th>
          //             <span className={styles.table_header}>Sizes</span>
          //           </th>
          //           <th>
          //             <span className={styles.table_header}>Images</span>
          //           </th>
          //           <th>
          //             <span className={styles.color_header}>
          //               Color
          //               <ToolTip className={styles.tooltip}>
          //                 Color masculino. Ejemplo: blanco sí, blanca no.
          //               </ToolTip>
          //               <i>
          //                 <FaQuestionCircle />
          //               </i>
          //             </span>
          //           </th>
          //           <th>
          //             <span className={styles.color_header}>
          //               Color Alt
          //               <ToolTip className={styles.tooltip}>
          //                 Solo tildar si el género gramatical del tipo de
          //                 producto no coincide con el género gramatical del
          //                 color del casillero anterior. Ejemplo: remera y
          //                 blanco.
          //               </ToolTip>
          //               <i>
          //                 <FaQuestionCircle />
          //               </i>
          //             </span>
          //           </th>
          //           <th>
          //             <span className={styles.table_header}>Price</span>
          //           </th>

          //           <th>
          //             <span className={styles.table_header}>SKU</span>
          //           </th>
          //           <th>
          //             <span className={styles.table_header}>Inventory</span>
          //           </th>
          //         </tr>
          //       </thead>
          //       <tbody>
          //         {sizes.map((size, sizeIndex) => (
          //           <tr key={size}>
          //             <td className={styles.size}>{size}</td>
          //             <td>
          //               {sizeIndex === 0 && (
          //                 // <ul className={styles.image_links}>
          //                 //   {images.map((image) => (
          //                 //     <li className={styles.image_link}>
          //                 //       <input
          //                 //         type="checkbox"
          //                 //         key={image.name}
          //                 //         value={image.name}
          //                 //       />
          //                 //       <div>
          //                 //         <label htmlFor={image.name}>{image.name}</label>
          //                 //       </div>
          //                 //     </li>
          //                 //   ))}
          //                 // </ul>
          //                 <Button
          //                   className={styles.images_button}
          //                   type="button"
          //                 >
          //                   Select
          //                 </Button>
          //               )}
          //             </td>
          //             <td>{sizeIndex === 0 && <input type="text" />}</td>
          //             <td>{sizeIndex === 0 && <input type="checkbox" />}</td>
          //             <td>{sizeIndex === 0 && <input type="number" />}</td>
          //             <td>{(baseSku + skuSizeCode[size]).toUpperCase()}</td>
          //             <td>
          //               <input
          //                 type="number"
          //                 min="0"
          //                 step="1"
          //                 value={variant.inventory[size]}
          //                 onChange={(e) =>
          //                   handleInventoryInput(e, variantIndex, size)
          //                 }
          //               />
          //             </td>
          //           </tr>
          //         ))}
          //       </tbody>
          //     </table>
          //   </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default Variants;
