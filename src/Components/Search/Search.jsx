import React,{useEffect, useState} from 'react';
import { createClient } from 'pexels';
import style from './Search.module.css'

const client = createClient('563492ad6f9170000100000124a7d26fdf484dfda913bed85f4add36');

function Search(props) {
    const [search, setSearch] = useState()
    const [query, setQuery] = useState('london')
    const [photos1, setPhotos1] = useState([])
    const [photos2, setPhotos2] = useState([])
    const [photos3, setPhotos3] = useState([])
    const [placeholder, setPlaceholder] = useState('Поиск')
    const [helper, setHelper] = useState(['Wallpapers', 'Textures', 'Nature', 'Current', 'Architecture', 'Business', 'Film', "Animals", 'Travel', 'Fashion', 'Food'])
    const [fav, setFav] = useState([])

    useEffect((params) => {
        client.photos.search({ query, per_page: 30 }).then(photos => {
            setPhotos1(photos.photos.slice(0,10))
            setPhotos2(photos.photos.slice(10,20))
            setPhotos3(photos.photos.slice(20,30))
        })
    }, [query])

    useEffect((params) => {
        if(fav.length === 0) return;
        props.favToParent(fav[fav.length - 1]);
    },[fav])

    const submitHandler = e => {
        e.preventDefault()
        setQuery(search)
        let temp = helper.concat()
        temp.unshift(search);
        setHelper(temp);
        setSearch('')
    }

    return (
        <div className={style.container}>
            <div className={style.searcher}>
                <div className={style.searchContainer}>
                    <form onSubmit={submitHandler} className={style.form}>
                        <input 
                        type="text" 
                        onChange={e => setSearch(e.target.value)}
                        value={search} 
                        className={style.input}
                        placeholder={placeholder}
                        onFocus={e => setPlaceholder('')}
                        onBlur={e => setPlaceholder('Поиск')}/>
                    </form>
                    <div className={style.helper}>
                        {
                            helper.slice(0,15).map(word => <p onClick={e=>setQuery(word)} className={style.word}>{word}</p>)
                        }
                    </div>
                </div>

            </div>
            <div className={style.gallery}>
                <div className={style.row}>
                    <div className={style.column}>
                        {photos1.length !== 0 && 
                                photos1.map(photo=> 
                                    <div className={style.rel}>
                                        <img 
                                            src={photo.src.medium} 
                                            alt='gallery' 
                                            key={photo.src.medium}
                                            style={{width: '100%'}}/>
                                            <div className={style.hiden}>
                                                <a href={photo.photographer_url}>{photo.photographer}</a>
                                                <div className={style.icons}>
                                                    <i className={`fas fa-heart ${style.heart}`} onClick={e => { 
                                                        const temp = fav.concat(); 
                                                        if(temp.includes(photo)) return;
                                                        temp.push(photo)
                                                        setFav(temp)
                                                        }}></i>
                                                    <i className="fas fa-expand-alt"></i>
                                                    <i className="fas fa-download"></i>
                                                </div>
                                            </div>
                                    </div>)}
                    </div>
                    <div className={style.column}>
                        {photos2.length !== 0 && 
                            photos2.map(photo=> 
                                <div className={style.rel}>
                                    <img 
                                        src={photo.src.medium} 
                                        alt='gallery' 
                                        key={photo.src.medium}
                                        style={{width: '100%'}}/>
                                        <div className={style.hiden}>
                                            <a href={photo.photographer_url}>{photo.photographer}</a>
                                            <div className={style.icons}>
                                                <i className={`fas fa-heart ${style.heart}`} onClick={e => { 
                                                        const temp = fav.concat(); 
                                                        if(temp.includes(photo)) return;
                                                        temp.push(photo)
                                                        setFav(temp)
                                                        }}></i>
                                                <i className="fas fa-expand-alt"></i>
                                                <i className="fas fa-download"></i>
                                            </div>
                                        </div>
                                </div>)}
                    </div>
                    <div className={style.column}>
                        {photos3.length !== 0 && 
                                photos3.map(photo=> 
                                    <div className={style.rel}>
                                        <img 
                                            src={photo.src.medium} 
                                            alt='gallery' 
                                            key={photo.src.medium}
                                            style={{width: '100%'}}/>
                                        <div className={style.hiden}>
                                            <a href={photo.photographer_url}>{photo.photographer}</a>
                                            <div className={style.icons}>
                                                <i className={`fas fa-heart ${style.heart}`} onClick={e => { 
                                                        const temp = fav.concat(); 
                                                        if(temp.includes(photo)) return;
                                                        temp.push(photo)
                                                        setFav(temp)
                                                        }} ></i>
                                                <i className="fas fa-expand-alt"></i>
                                                <i className="fas fa-download"></i>
                                            </div>
                                        </div>
                                    </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;