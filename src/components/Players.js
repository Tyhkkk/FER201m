import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <div className='container'>
            
            <div className='column'>
                <div className='card'>
                    <img src='assets/images/cr.jpg' alt='' class="imageChange"/>
                    <h3>Cristiano Ronaldo</h3>
                    <p className='title'>Manchester United</p>
                    <p class='kk'><button class='b'>Detail</button></p>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <img src='assets/images/kante.jpg' alt='' class="imageChange" />
                        <h3>Kante </h3>
                        <p className='title'>Chelsea</p>
                        <p class='kk'><button class='b'>Detail</button></p>
                    

                </div>

            </div>
            <div className='column'>
                <div className='card'>
                    <img src='assets/images/messi.jpg' alt='' class="imageChange" />
                        <h3>Messi </h3>
                        <p className='title'>PSG</p>
                        <p class='kk'><button class='b'>Detail</button></p>
                    

                </div>
            </div>
            

            <div className='column'>
                <div className='card'>
                    <img src='assets/images/neymar.jpg' alt='' class="imageChange" />
                        <h3>Neymar</h3>
                        <p className='title'>PSG</p>
                        <p class='kk'><button class='b'>Detail</button></p>
                    

                </div>

            </div>
            <div className='column'>
                <div className='card'>
                    <img src='assets/images/kane.jpg' alt='' class="imageChange" />
                        <h3>Kane </h3>
                        <p className='title'>Tottemham</p>
                        <p class='kk'><button class='b'>Detail</button></p>
                    

                </div>

            </div>
            <div className='column'>
                <div className='card'>
                    <img src='assets/images/haaland.jpg' alt='' class="imageChange"/>
                        <h3>Haaland </h3>
                        <p className='title'>Manchester City</p>
                        <p class='kk'><button class='b'>Detail</button></p>
                    

                    </div>
            </div>
      </div>
    )
  }
}
