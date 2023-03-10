import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    // here the id part is very useful because when we will click at home in the navigation it will scroll and bring us to this part
    <div className='gpt3__header section__padding' id='home'>
      {/* this part contains the intro heading, paragrahp, input bar */}
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing with GPT3 OpenAi</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Enter your email' />
          <button type='button'>Get Started</button>
        </div>

        {/* This part is for the people image and the text related to it */}
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      {/* This parrt is related to the ai image that is adjusted in size with the helo of css styles */}
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header