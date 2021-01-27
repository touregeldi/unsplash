import React,{useEffect, useState} from 'react';
import { createClient } from 'pexels';
import style from './Search.module.css'

const client = createClient('563492ad6f9170000100000124a7d26fdf484dfda913bed85f4add36');

function Search({histories, updateHistories, favourite, updateFavourite}) {
    const [search, setSearch] = useState()
    const [query, setQuery] = useState('Work')
    const [photos1, setPhotos1] = useState([])
    const [photos2, setPhotos2] = useState([])
    const [photos3, setPhotos3] = useState([])
    const [placeholder, setPlaceholder] = useState('Поиск')

    useEffect((params) => {
        client.photos.search({ query, per_page: 60 }).then(photos => {
            setPhotos1(photos.photos.slice(0,20))
            setPhotos2(photos.photos.slice(20,40))
            setPhotos3(photos.photos.slice(40,60))
        })
    }, [query])

    const submitHandler = e => {
        e.preventDefault()
        setQuery(search)
        updateHistories(search)
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
                            histories.map(word => <p onClick={e=>setQuery(word)} className={style.word}>{word}</p>)
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
                                                    <i className={`fas fa-heart ${style.heart}`} onClick={e => {updateFavourite(photo.src.medium)}}></i>
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
                                                <i className={`fas fa-heart ${style.heart}`} onClick={e => {updateFavourite(photo.src.medium)}}></i>
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
                                                <i className={`fas fa-heart ${style.heart}`} onClick={e => {updateFavourite(photo.src.medium)}}></i>
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