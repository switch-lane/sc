import React, {useState} from "react";
import classes from "./Paginator.module.css";
import cn from "classnames"


const Paginator = (props) => {
    let portionSize = 10;

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;



    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div className={classes.paginator}>
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [classes.selectedPage]: props.currentPage === p
                }, classes.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

    { portionCount > portionNumber &&
    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


</div>



    // return <div>
    //     <div className={classes.pageNums}>
    //         {pages.map(p => {
    //             return <span className={props.currentPage === p && classes.selectedPage}
    //                          onClick={() => {
    //                              props.onPageChanged(p)
    //                          }}>{p}</span>
    //         })}
    //     </div>
    // </div>
};


export default Paginator