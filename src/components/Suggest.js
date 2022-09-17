import React from 'react'

const Suggest = () => {
  return (
    <div className="suggest">
        <div className="suggest-header">
          Kimi takip etmeli
        </div>
        <div className="suggest-box">
          <div className="suggest-profile">
            <img src="https://avatars.githubusercontent.com/u/88967412?s=400&u=1a41897a033bb317e5aee372a5674bf2c9f0d114&v=4" alt="" />
          </div>
          <div className="suggest-info">
            <div className="name">Koddan Kaleler</div>
            <div className="username">@koddankaleler</div>
          </div>
          <button className="suggest-follow">
            Takip et
          </button>
        </div>
        <div className="suggest-box">
          <div className="suggest-profile">
            <img src="https://avatars.githubusercontent.com/u/88967412?s=400&u=1a41897a033bb317e5aee372a5674bf2c9f0d114&v=4" alt="" />
          </div>
          <div className="suggest-info">
            <div className="name">Enes Nur</div>
            <div className="username">@enesnur</div>
          </div>
          <button className="suggest-follow">
            Takip et
          </button>
        </div>
      </div>
  )
}

export default Suggest