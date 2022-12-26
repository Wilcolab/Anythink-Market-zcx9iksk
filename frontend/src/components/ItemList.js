import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0 && props.searchQuery?.length !== 0) {
    return (
      <div id="empty" className="py-4 no-items" style={{ display: "grid", justifyItems: "center" }}>
        <i className="bi bi-emoji-frown-fill" style={{ fontSize: "200%" }}></i>
        <p>No items found for <span style={{ display: "inline", "fontWeight": "bold" }}>"{props.searchQuery}"</span></p>
      </div>
    );
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
