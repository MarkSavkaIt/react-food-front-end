import React, { useEffect, useState } from 'react'
import SVG_arrow_down from '../../../assets/svg/SVG_arrow_down';
import MenuItem from './MenuItem'
import { useDispatch, useSelector } from 'react-redux'
import getItemsRequest from '../../../service/getAllMenuItems'
import { loadProducts } from '../../../redux/reducer';


const MenuGrid = (props) => {
   
   const [items, setItems] = useState(undefined);
   const style = 'menu_grid_items';
   // const dispatch = useDispatch();
   
   useEffect( () => {
      async function getItems(){
         setItems( await getItemsRequest() );
         props.changeFade('fade_in');
      }
      getItems()

      // dispatch(loadProducts(getItemsRequest()))
      // props.changeFade('fade_in');

   }, [props, props.fade]);
   
   return (
      <div className="menu_grid">
         <div className="menu_top" >
            <p>Choose Dishes</p>
            <button>
               <SVG_arrow_down width="20px" height="10px" fill="white" />
               Dine in
            </button>
         </div>
         <div className={style + " " + props.fade} >
            {
               items && items.map(item => {
                  return item.category.map(category => {
                     if(category === props.category){
                        return <MenuItem id={item.id} name={item.name} price={item.price} count={item.count} img={item.img} />
                     } 
                  })
               })
            }
         </div>
      </div>
   )
}

export default MenuGrid;