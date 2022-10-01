const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/chickenSandwich.jpg" alt="Chicken Sandwich"/>
                <div>
                  Photo by <a href="https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eiliv Aceron</a> on <a href="https://unsplash.com/s/photos/chicken-sandwich?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              {/* button to take you to places page */}
              <a href="/places"><button className='btn-primary'>Places</button></a>
          </main>
      </Def>
    )
  }
  
module.exports = home