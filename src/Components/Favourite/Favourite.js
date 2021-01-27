import React,{useState, useEffect} from 'react';
import style from './Favourite.module.css'

function Favourite(props) {
    const [photos1, setPhotos1] = useState([])
    const [photos2, setPhotos2] = useState([])
    const [photos3, setPhotos3] = useState([])
    const favs = props.favs;

    useEffect((params) => { 
        if(favs.length === 0) return;
        const n = favs.length/3;
        setPhotos1(favs.slice(0,n))
        setPhotos2(favs.slice(n,2*n))
        setPhotos3(favs.slice(2*n,favs.length))
    }, [favs])

    console.log(photos1, photos2, photos3);

    return (
        <div className={style.container}>
            <h1>Избранное</h1>
            <div className={style.gallery}>
                <div className={style.row}>
                    <div className={style.column}>
                        {photos3.length !== 0 && photos3.map(fav => (<img alt='gallery' src={fav.src.medium} key={fav.id}/>))}
                    </div>
                    <div className={style.column}>
                        {photos2.length !== 0 && photos2.map(fav => (<img alt='gallery' src={fav.src.medium} key={fav.id}/>))}
                    </div>
                    <div className={style.column}>
                        {photos1.length !== 0 && photos1.map(fav => (<img alt='gallery' src={fav.src.medium} key={fav.id}/>))}
                    </div>
                </div>
                {/* {props.fav == undefined && props.favs.map(fav => <img alt='gallery' src={fav.src.medium} key={fav.src.medium}/>)} */}
            </div>
        </div>
    );
}

export default Favourite;