import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div class="header"> 
        <nav>
            <ul class="menuheader">
                <li class="colorhome"><a className='active' href='#home' >Home</a></li>
                <li><a href='#new'>News</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
