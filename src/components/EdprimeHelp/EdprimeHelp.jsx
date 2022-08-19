import '../../styles/edprimeHelp.css';
import menuDonts from '../../assets/menu.png';
import close from '../../assets/close.png';
import telegram from '../../assets/telegram.png'

export const EdprimeHelp = () => {
    return <section>
        <div className="edprime-help-container">
            <div className='help-top-cont'>
                <div>
                    <img src="https://www.kenyt.ai/static/Organizations/EdPrime-7152661/EdPrime/chatbot-icon.png" />
                </div>
                <div className='help-top-text'>
                    <p>EdPrime</p>
                    <p>Online</p>
                </div>
                <div>
                    <div className='help-top-logo'>
                        <img src={menuDonts} />
                        <img src={close} />
                    </div>
                </div>
            </div>
            <div className='help-mid-cont'>
                <div className='help-mid-time'>
                    <p>🤖 EdPrime</p>
                    <p>3:33 PM</p>
                </div>
                <div className='help-mid-text'>
                    <p>Good morning!</p>
                    <p>I’m, your help buddy 👋</p>
                    <p>Welcome to EdPrime, your smart school partner.</p>
                    <p>Please help EdPrime your question or choose an option from the menu.</p>
                </div>
            </div>
            <div className='help-down-cont'>
                <div className='help-down-input'>
                    <input type='text'placeholder='Type your message...'/>
                    <div>
                        <img src={telegram} />
                    </div> 
                </div>
            </div>
        </div>
    </section>
}