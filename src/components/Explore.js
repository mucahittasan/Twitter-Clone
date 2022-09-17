import { BsThreeDots } from 'react-icons/bs'


const Explore = () => {
  return (
    <div className="explore-area">
       <div className="explore-inner">
       <h2 className="explore-header">
          İlgini çekebilecek gündemler
        </h2>
        {/* Theese are have to come from a database */}
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
                Haberler . Gundemler
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #tercih2022
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
                Turkiye tarihinde gundemde
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #Konya
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
                Haberler . Gundemler
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #Melih Gokcek
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
              Turkiye tarihinde gundemde
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #jelibon
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
                Spor . Gundemler
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #Aboubakar
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
              Turkiye tarihinde gundemde
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #Deli
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
              Turkiye tarihinde gundemde
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #EhliyetAffi
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
          <div className="explore-box">
            <div className="explore-box__header">
              <div className="explore-about">
                Turkiye tarihinde gundemde
              </div>
              <button>
                <BsThreeDots />
              </button>
            </div>
            <div className="explore-box__content">
              <div className="hastag">
                #Orgeneral
              </div>
              <div className="count-tweet">
                <span>90B</span> Tweet
              </div>
            </div>
          </div>
       </div>
      </div>
  )
}

export default Explore