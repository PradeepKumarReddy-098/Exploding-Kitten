import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const ReactPopUp = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="rules-botton">
            Game Rules
          </button>
        }
      >
        {close => (
          <div className='popup'>
            <div>
              <p>- If the card drawn from the deck is a cat card, then the card is removed from the deck.</p>
              <p>- If the card is exploding kitten (bomb) then the player loses the game.</p>
              <p>- If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.</p>
              <p>- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.</p>
              <p>Note: *If you draw the shuffle card. The defusing card count don't change</p>
            </div>
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        )}
      </Popup>
    </div>
   )

   export default ReactPopUp