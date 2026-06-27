import React from 'react'
import { info } from '../..'
import { useState , useContext } from 'react'
import './Wishlist.css'

const Wishlist = () => {
    const {wishlist , setwishlist , response , setresponse} = useContext(info)

    const handleremove = async (id) => {
      let remove = await fetch(`http://localhost:4090/Removewishlist/${id}`, {
        method: "DELETE",
      })

      if (!remove.ok) {
        return
      }

      const newitem = wishlist.filter(val => val._id !== id)
      setwishlist(newitem)

      setresponse(
        response.map(item =>
          item._id === id
            ? { ...item, wishlist: false }
            : item
        )
      )
    }
     
    return (
      <div className="wishlist-parent">
        <div className="wishlist-header">
          <h1>Your Wishlist</h1>
          <p>{wishlist.length} saved {wishlist.length === 1 ? 'property' : 'properties'}</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <h2>No saved properties yet</h2>
            <p>Start exploring and save your favorite places to stay</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((val) => (
              <div key={val._id} className="card-boxes">
                <img id='card-img' src={val.file} alt="" />
                <div className="sec-1">
                  <span>{val.propertyName}</span>
                  <span>{val.rating}</span>
                </div>
                <div className="sec-2">
                  <span>{val.cityname}</span>
                  <span>{val.desc}</span>
                  <span>₹{val.price}</span>
                  <button onClick={() => handleremove(val._id)} className="wishlist-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}

export default Wishlist
