const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div>
              <img src="/images/h-thai.jpg" alt="restaurant pic"/>
            </div>
            <h2>Rating</h2>
            <p>Currently unrated</p>
            <h2>Description</h2>
            <p>
            Located in {data.place.city}, {data.place.state}, {data.place.cuisines}
              </p>
              <div>
                <h2>
                  Comments
                </h2>
                <p>No comments yet!</p>
              </div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>     
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form> 
          </main>
        </Def>
    )
}

module.exports = show
