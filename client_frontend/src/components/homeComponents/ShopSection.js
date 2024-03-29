import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
// import products from "../../data/Products";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    try{
                    {products.map((products) => (
                      <div  
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={products._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${products._id}`}>
                            <div className="shopBack">
                              <img src={products.image} alt={products.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${products._id}`}>
                                {products.name}
                              </Link>
                            </p>

                            <Rating
                              value={products.rating}
                              text={`${products.numReviews} reviews`}
                            />
                            <h3>Rs.{products.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                    }
                  </>
                  
                )}
              {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ShopSection;
