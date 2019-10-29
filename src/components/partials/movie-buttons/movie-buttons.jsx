import React from "react";
import UIButton from "../UI-button/UI-button.jsx";
import UISvg from "../UI-svg/UI-svg.jsx";

class MovieButtons extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    this._handleMyListButtonClick = this._handleMyListButtonClick.bind(this);
  }

  render() {
    return (
      <div className="movie-card__buttons">
        <UIButton
          classMods={[`btn-play`]}
          title={`Play`}
          onButtonClick={this._handlePlayButtonClick}
        >
          <UISvg
            xlink={`#play-s`}
            viewBox={`0 0 19 19`}
            width={19}
            height={19}
          />
        </UIButton>

        <UIButton
          classMods={[`btn-list`]}
          title={`My list`}
          onButtonClick={this._handleMyListButtonClick}
        >
          <UISvg
            xlink={`#add`}
            viewBox={`0 0 19 20`}
            width={19}
            height={20}
          />
        </UIButton>

        {location.pathname !== `/` &&
          <a href="add-review.html" className="btn movie-card__button">Add review</a>
        }
      </div>
    );
  }

  _handlePlayButtonClick() {}
  _handleMyListButtonClick() {}
}

export default MovieButtons;
